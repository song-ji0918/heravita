import { z } from 'zod';
export const consultationSchema = z.object({
 title: z.enum(['女士','先生','其他']),
 name: z.string().trim().min(1,'请填写您的姓名').max(100),
  destination: z.enum(['phuket','china','europe','usa']).default('phuket'),
  stage: z.enum(['discover','reset','rebuild','flourish','local_support','medical_coordination']),
 arrival_date: z.string().refine(v => v === '' || /^\d{4}-\d{2}-\d{2}$/.test(v), '请选择有效到访日期'),
 guests: z.coerce.number().int().min(1).max(10),
 partner_consultation: z.boolean(),
 contact_method: z.enum(['email','phone','wechat']),
 contact: z.string().trim().min(3,'请填写有效联系方式').max(255),
 message: z.string().trim().max(1000),
 consent: z.boolean().refine(v => v, '请同意我们为此次咨询联系您'),
}).superRefine((v, ctx) => {
  const allowed = {phuket:['discover','reset','rebuild'],china:['local_support'],europe:['flourish'],usa:['medical_coordination']};
  if (!allowed[v.destination].includes(v.stage)) ctx.addIssue({code:'custom',path:['stage'],message:'请选择与地区对应的咨询方向'});
 if (v.contact_method === 'email' && !z.string().email().safeParse(v.contact).success) ctx.addIssue({code:'custom',path:['contact'],message:'请填写有效邮箱'});
 if (v.contact_method === 'phone' && !/^[+\d\s()-]{6,30}$/.test(v.contact)) ctx.addIssue({code:'custom',path:['contact'],message:'请填写有效电话号码'});
});
