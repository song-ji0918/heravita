import { createServerFn } from '@tanstack/react-start';
import { consultationSchema } from './consultation-schema';
export const submitConsultation = createServerFn({ method: 'POST' })
 .inputValidator((input: unknown) => consultationSchema.parse(input))
 .handler(async ({ data }) => {
  // A public, validated insert-only lead-capture action. No arbitrary reads or recipients.
  const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
  const { data: row, error } = await supabaseAdmin.from('phuket_consultations').insert({ ...data, arrival_date: data.arrival_date || null }).select('id').single();
  if (error || !row) return { success: false, id: null, error: '暂时无法提交，请稍后重试。' };
  return { success: true, id: row.id, error: null };
 });
