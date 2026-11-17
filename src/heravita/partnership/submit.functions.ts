import { createServerFn } from "@tanstack/react-start";
import { partnershipSchema } from "./schema";

const clean = (value: string) => value.replace(/[<>`\r\n]/g, " ").slice(0, 600);
export const submitPartnership = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => partnershipSchema.parse(input))
  .handler(async ({ data }) => {
    // Public, deliberately narrow operation: validated insert only, no caller-selected table or read path.
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("partnership_inquiries").insert(data);
    if (error?.code === "23505") return { saved: true, notified: false };
    if (error) throw new Error("Unable to save partnership enquiry");
    let notified = false;
    const webhook = process.env["WECHAT_WORK_WEBHOOK"];
    if (webhook) {
      try {
        const url = new URL(webhook);
        if (url.protocol !== "https:" || url.hostname !== "qyapi.weixin.qq.com" || url.pathname !== "/cgi-bin/webhook/send") throw new Error("Invalid notification configuration");
        const content = [
          "HeraVita · 收到新的机构与全球合作意向",
          `机构：${clean(data.institution_name)}`,
          `国家与城市：${clean(data.country_city)}`,
          `机构类型：${clean(data.institution_type)}`,
          `合作方向：${data.cooperation.join(" / ")}`,
          `联系人：${clean(data.full_name)} · ${clean(data.position)}`,
          `联系方式：${data.contact_method} · ${clean(data.contact)}`,
          `沟通偏好：${data.communication} · ${data.language}`,
          `官网：${clean(data.website) || "未填写"}`,
          `合作设想：${clean(data.proposal)}`,
          `申请编号：${data.id}`,
          `提交时间：${new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai", hour12: false })} (UTC+8)`,
        ].join("\n");
        const response = await fetch(url.toString(), { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ msgtype: "text", text: { content } }), signal: AbortSignal.timeout(8000) });
        const result = await response.json() as { errcode?: number };
        notified = response.ok && result.errcode === 0;
      } catch {
        // Never log contact information or a secret-bearing webhook URL.
        notified = false;
      }
    }
    await supabaseAdmin.from("partnership_inquiries").update({ notification_status: notified ? "sent" : "failed", notified_at: notified ? new Date().toISOString() : null }).eq("id", data.id);
    return { saved: true, notified };
  });
