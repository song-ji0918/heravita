import { createServerFn } from "@tanstack/react-start";
import { applicationSchema } from "./rules";

const stageNames: Record<string, string> = { reset: "生命重启 LIFE RESET", rebuild: "生命重建 LIFE REBUILDING", flourish: "生命绽放 LIFE FLOURISHING", undecided: "尚未决定" };
const destNames: Record<string, string> = { phuket: "泰国普吉岛", china: "中国", usa: "美国国际医学协调", europe: "欧洲长寿生活", undecided: "尚未决定" };
const methods: Record<string, string> = { wechat: "微信", phone: "电话", email: "邮箱" };
const clean = (s: unknown) => String(s ?? "").replace(/[<>`]/g, "").slice(0, 500);

export const notifyApplication = createServerFn({ method: "POST" })
  .inputValidator((d: unknown) => applicationSchema.parse(d))
  .handler(async ({ data }) => {
    const url = process.env["WECHAT_WORK_WEBHOOK"];
    if (!url) return { ok: false };
    const time = new Date().toLocaleString("zh-CN", { timeZone: "Asia/Shanghai", hour12: false });
    const content = [
      "### HeraVita · 收到新的生命旅程申请",
      `> **申请人**：${clean(data.full_name)}（${clean(data.preferred_language)}）`,
      `> **意向旅程**：${stageNames[data.stage] ?? clean(data.stage)}`,
      `> **意向基地**：${destNames[data.destination] ?? clean(data.destination)}`,
      `> **同行安排**：${data.partner ? "携带伴侣同行" : "独自前往"}`,
      `> **期望日期**：${clean(data.preferred_date) || "未填写"}`,
      `> **联系方式**：${methods[data.contact_method] ?? ""} · ${clean(data.contact)}`,
      `> **健康关注**：${clean(data.focus) || "未填写"}`,
      `> **提交时间**：${time} (UTC+8)`,
    ].join("\n");
    try {
      const r = await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ msgtype: "markdown", markdown: { content } }) });
      const j = (await r.json()) as { errcode?: number };
      if (j.errcode !== 0) console.error("wecom webhook error", j);
      return { ok: j.errcode === 0 };
    } catch (e) {
      console.error("wecom webhook failed", e);
      return { ok: false };
    }
  });
