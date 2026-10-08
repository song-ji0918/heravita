export const journeys = [
 { slug: 'discover', number: '01', english: 'LIFE DISCOVERY', name: '生命发现之旅', purpose: '看见自己', question: '我现在，到底发生了什么？', days: 5, nights: 4, follow: '28 天', description: '重新认识身体、情绪、压力与生活方式。先真正看见自己，再决定如何改变。', deliverable: '个人生命状态地图', dayNames: ['回到自己', '重新认识身体', '理解自己', '疗愈与重新连接', '把改变带回生活'] },
 { slug: 'reset', number: '02', english: 'LIFE RESET', name: '生命重启计划', purpose: '重新恢复', question: '什么正在持续消耗我的身体与幸福感？', days: 7, nights: 6, follow: '90 天', description: '从睡眠、代谢、情绪与关系开始，重新建立恢复能力，找回身体的节律与内在的连接。', deliverable: '个人生命恢复地图', dayNames: ['抵达 · 慢下来', '看见 · 了解身体', '释放 · 放下负荷', '恢复 · 重建节律', '连接 · 感受幸福', '整合 · 回到生活', '重启 · 新的开始'] },
 { slug: 'rebuild', number: '03', english: 'LIFE REBUILDING', name: '生命重建计划', purpose: '真正改变', question: '为什么身体、情绪与关系总是回到原来的模式？', days: 7, nights: 6, follow: '6 个月', description: '从身体健康到关系模式，从内在状态到生活方式，重建支撑长期健康与幸福的完整生命系统。', deliverable: '个人生命重建蓝图', dayNames: ['抵达 · 看见生命', '评估 · 深度健康', '释放 · 认识模式', '恢复 · 内在连接', '关系重建', '生活系统重建', '整合 · 新的生命系统'] },
] as const;
export type JourneyStage = typeof journeys[number]['slug'];
