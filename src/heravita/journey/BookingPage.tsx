import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { supabase } from "@/integrations/supabase/client";
import { applicationSchema, stages, destinations, estimate, journeyRules, type Stage } from "./rules";
import { names, stagePaths } from "./Navigation";
import { media } from "./media";
import "./journey.css";

type Props={initialStage?:Stage|"undecided";initialDestination?:typeof destinations[number]};
export default function BookingPage({initialStage="undecided",initialDestination="undecided"}:Props){
 const {i18n}=useTranslation();const lang=i18n.language.split("-")[0];const en=lang!=="zh";
 const [stage,setStage]=useState<Stage|"undecided">(initialStage);const [destination,setDestination]=useState(initialDestination);const [partner,setPartner]=useState(false);
 const [status,setStatus]=useState<"idle"|"sending"|"done">("idle");const [error,setError]=useState("");
 const t=(zh:string,english:string)=>en?english:zh;
 const rule=stage==="undecided"?null:journeyRules[stage];const price=stage==="undecided"?null:estimate(stage,partner);
 async function submit(e:FormEvent<HTMLFormElement>){
  e.preventDefault();if(status==="sending")return;const f=new FormData(e.currentTarget);if(f.get("website"))return;
  const focus=String(f.get("focus")??"")+(destination==="usa"?`\nPreferred US region: ${f.get("usa_region")}; Records ready: ${f.get("records_ready")==="on"}`:"");
  const parsed=applicationSchema.safeParse({full_name:f.get("full_name"),stage,destination,contact_method:f.get("contact_method"),contact:f.get("contact"),preferred_date:f.get("preferred_date")||null,partner,preferred_language:f.get("preferred_language"),focus,consent:f.get("consent")==="on"});
  if(!parsed.success){setError(t("请填写姓名、有效联系方式，并确认咨询与信息使用同意。","Please enter your name and valid contact details, and confirm your consent."));return;}
  setStatus("sending");setError("");
  try{const {error:dbError}=await supabase.from("journey_applications").insert(parsed.data);if(dbError)throw dbError;setStatus("done");}
  catch{setStatus("idle");setError(t("暂时无法提交，您的填写内容仍保留，请稍后重试。","Unable to submit right now. Your entries are retained; please try again later."));}
 }
 return <div className="j-page" dir={i18n.dir()}><Header/><main className="j-booking">
  <aside className="j-booking-aside"><p className="j-kicker">Your Private Life Journey</p><h1 className="j-title">{t("从一次真诚的对话开始","Begin with a Personal Conversation")}</h1><p>{t("不急于决定。先让我们理解，您此刻真正需要什么。","There is no need to decide today. Let us understand what matters to you now.")}</p><div className="j-photo"><img src={stage==="undecided"||stage==="discover"?media.care:media[stage]} alt={t("私人生命旅程空间意象","Private life journey space illustration")} width={1440} height={1088}/></div>
  {stage!=="undecided"&&rule&&price?<><p className="j-kicker">{names[stage][en?1:0]}</p><p>{rule.days}{t("天"," days")} · {rule.nights}{t("夜"," nights")} + {en?rule.followEn:rule.follow}{t("陪伴"," support")}</p><strong>{stage!=="discover"?t("起 ","From "):""}RMB ¥{price.rmb.toLocaleString()} {stage!=="discover"?"+":""}<br/>USD ${price.usd.toLocaleString()} {stage!=="discover"?"+":""}</strong>
  {stage==="discover"&&<p className="j-body">{t("授权合作伙伴客户专享价：","Authorized partner client price: ")}RMB ¥29,800 / USD $4,500。{t("须核实授权合作伙伴客户身份后适用，不自动享有。","Eligibility must be verified; this rate is not automatically applied.")}</p>}
  {partner&&<p className="j-body">{t("两位伴侣参加同一阶段：双方套餐合计 × 90%，并非仅第二位9折。","Two partners in the same stage: the combined package total × 90%, not just the second guest.")}</p>}
  <p className="j-body">{t("以上为方案参考，不是结算金额；最终方案与费用根据检测、医生评估、医疗匹配及定制服务确认。","Indicative program pricing, not a checkout amount. Final scope and fees follow testing, physician assessment, medical matching and customization.")}</p><Link to={stagePaths[stage]} className="j-booking-back">{t("查看完整旅程权益","View full journey inclusions")} →</Link></>:<p className="j-body">{t("您可以先选择关注的阶段，也可以留待顾问沟通后再决定。","Choose a stage of interest, or decide after a conversation with an advisor.")}</p>}
  <p className="j-clinical-note">{t("HeraVita不是医院。医学项目须由具备相应资质的专业医生依据身体状态、适应证与当地法规评估。提交申请不代表预约已确认，也不构成医学诊断或治疗建议。","HeraVita is not a hospital. Medical services require qualified physician assessment, suitability and local regulatory compliance. An application is not a confirmed booking or medical advice.")}</p></aside>
  <section className="j-booking-form"><Link to="/" className="j-booking-back">← {t("返回 HeraVita","Back to HeraVita")}</Link><p className="j-kicker">Private Consultation</p><h2 className="j-title">{t("申请你的生命旅程","Apply for Your Life Journey")}</h2><span className="j-rule"/>
  {status==="done"?<div className="j-success" role="status"><h3 className="j-title">{t("您的申请已收到","Your Application Has Been Received")}</h3><p>{t("您的需求与联系偏好已安全记录，供顾问了解并与您联系。到访日期、方案与费用须另行确认。","Your preferences have been securely recorded for advisor follow-up. Visit dates, program scope and fees require separate confirmation.")}</p><Button asChild variant="ghost" className="j-apply"><Link to={stage==="undecided"?"/discover":stagePaths[stage]}>{t("继续了解生命旅程","Explore the Life Journey")} →</Link></Button></div>:<form className="j-form" onSubmit={submit} noValidate>
   <label className="j-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off"/></label>
   <div className="j-form-row"><label>{t("姓名 *","Full name *")}<input name="full_name" autoComplete="name" required maxLength={80}/></label><label>{t("沟通语言","Preferred language")}<select name="preferred_language" defaultValue={["zh","en","es","ar"].includes(lang)?lang:"en"}><option value="zh">中文</option><option value="en">English</option><option value="es">Español</option><option value="ar">العربية</option></select></label></div>
   <label>{t("关注的生命阶段","Life stage of interest")}<select value={stage} onChange={e=>setStage(e.target.value as Stage|"undecided")} name="stage"><option value="undecided">{t("希望先与顾问沟通","I would like guidance first")}</option>{stages.map(s=><option key={s} value={s}>{names[s][en?1:0]}</option>)}</select></label>
   <div className="j-form-row"><label>{t("目的地 / 咨询方向","Destination / consultation")}<select value={destination} onChange={e=>setDestination(e.target.value as typeof destination)} name="destination">{destinations.map((d,i)=><option key={d} value={d}>{(en?["Phuket","China","United States","Europe","Not decided"]:["泰国普吉岛","中国","美国国际医学协调","欧洲长寿生活","尚未决定"])[i]}</option>)}</select></label><label>{t("期望到访日期（可选）","Preferred date (optional)")}<input type="date" name="preferred_date"/></label></div>
   <div className="j-form-row"><label>{t("联系方式 *","Contact method *")}<select name="contact_method"><option value="wechat">{t("微信","WeChat")}</option><option value="phone">{t("电话","Phone")}</option><option value="email">{t("电子邮箱","Email")}</option></select></label><label>{t("号码 / 账号 *","Number / account *")}<input name="contact" required maxLength={120}/></label></div>
   {destination==="usa"&&<><label>{t("期望美国地区","Preferred US region")}<select name="usa_region"><option>Not decided</option>{["New York","Boston","Rochester / Minnesota","Cleveland","San Francisco Bay Area"].map(x=><option key={x}>{x}</option>)}</select></label><label className="j-check"><input type="checkbox" name="records_ready"/><span>{t("已有可供梳理的医学资料","I have medical records ready for review")}</span></label></>}
   <label className="j-check"><input type="checkbox" checked={partner} onChange={e=>setPartner(e.target.checked)} name="partner"/><span>{t("希望与伴侣参加同一阶段旅程","I would like to join the same stage with my partner")}</span></label>
   <label>{t("您最关注什么？（可选）","What matters most to you? (optional)")}<textarea name="focus" rows={4} maxLength={800}/></label>
   <label className="j-check"><input type="checkbox" name="consent" required/><span>{t("我同意 HeraVita 使用上述信息处理本次咨询并与我联系；理解具体医学项目须经专业医生评估后实施或匹配。","I consent to HeraVita using this information to process my consultation and contact me. I understand medical services require physician assessment and matching.")}</span></label>
   {error&&<p role="alert" className="j-error">{error}</p>}<Button variant="ghost" type="submit" className="j-apply" disabled={status==="sending"}><span>{status==="sending"?t("正在提交","Submitting"):t("提交旅程申请","Submit Application")}</span><span aria-hidden="true">→</span></Button>
  </form>}</section>
 </main><Footer/></div>;
}