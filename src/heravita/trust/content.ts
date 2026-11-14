export type Partner = {
  index: string; name: string; nameEn: string; place: string; role: string;
  lead: string; body: string[]; tags: string[]; url: string; linkLabel: string;
};

export const asiaCopy = {
  hero: {
    eyebrow: "01 / ASIA HEALTHCARE PARTNERS",
    line1: "从精准预防到再生医学",
    line2: "建立真实医疗交付",
    lead: "HeraVita 在亚洲已建立真实合作关系的医疗机构与长寿中心，让医学检测、专业评估与再生医学，真正发生在一段安心、私密的生命旅程里。",
  },
  why: {
    eyebrow: "WHY ASIA",
    title: "亚洲，是 HeraVita 医疗交付的真实底座",
    body: "真正的全球生命管理，不是把会员带去某一家医院。我们先在亚洲建立可以落地、可以验证、可以持续的医疗合作，再把普吉岛的恢复环境与曼谷的医学能力连接成一条完整路径。",
    pillars: [
      { n: "01", t: "成熟的国际医疗体系", d: "曼谷聚集了长期服务国际会员的私立医疗机构，在流程、语言与服务细节上成熟稳定。" },
      { n: "02", t: "个体化长寿与再生医学", d: "从生物年龄、荷尔蒙、营养与基因，到细胞与再生医学，方案依据医生评估逐人制定。" },
      { n: "03", t: "医学与恢复环境相连", d: "检测与评估在曼谷完成，恢复与生活方式整合回到普吉岛，节奏从容，隐私周全。" },
    ],
  },
  partners: [
    {
      index: "02", name: "康民医院 · VitalLife", nameEn: "VITALLIFE SCIENTIFIC WELLNESS", place: "Bangkok, Thailand",
      role: "HeraVita 医疗与长寿合作机构",
      lead: "以精准长寿医学，看清身体此刻真实的状态。",
      body: [
        "VitalLife 隶属康民国际医院体系，专注精准长寿与科学健康管理。通过生物年龄、荷尔蒙、营养与 DNA 等多维度评估，帮助会员理解身体正在如何变化。",
        "在 HeraVita 旅程中，这里通常是生命重启的第一站：评估结果成为后续恢复、营养与生活方式方案的依据。",
      ],
      tags: ["精准长寿医学", "生物年龄", "荷尔蒙", "营养", "DNA", "个体化健康管理"],
      url: "https://www.vitallifecenter.com", linkLabel: "访问 VitalLife 官网",
    },
    {
      index: "03", name: "曼谷国际医院", nameEn: "BANGKOK HOSPITAL", place: "Bangkok, Thailand",
      role: "HeraVita 医疗与长寿合作机构",
      lead: "完整的专科资源，为每一段旅程提供稳定的医学支持。",
      body: [
        "曼谷国际医院拥有覆盖广泛的综合医疗与专科资源，长期服务来自世界各地的会员。",
        "当会员需要更全面的健康筛查、专科评估或恢复期支持时，HeraVita 协调相应资源，让医学判断始终由专业团队完成。",
      ],
      tags: ["综合医疗", "专科资源", "健康筛查", "长寿与恢复支持"],
      url: "https://www.bangkokhospital.com", linkLabel: "访问曼谷国际医院官网",
    },
    {
      index: "04", name: "ICELLARÉ 生命中心", nameEn: "ICELLARÉ LIFESPAN CENTER", place: "Bangkok, Thailand",
      role: "HeraVita 再生医学与长寿合作机构",
      lead: "根据不同健康需求与医生评估结果，提供个体化细胞与再生医学方案。",
      body: [
        "ICELLARÉ 专注细胞科技与再生医学，具备自体干细胞技术、深度基因检测与细胞实验室能力。",
        "每一项方案都从医生评估开始，结合个人状态、检测结果与适应证判断，形成属于会员自己的再生医学路径。",
      ],
      tags: ["再生医学", "细胞科技", "基因健康", "个体化再生医学"],
      url: "https://www.icellare.com", linkLabel: "访问 ICELLARÉ 官网",
    },
  ] as Partner[],
  flow: {
    eyebrow: "05 / FROM BANGKOK TO PHUKET",
    title: "从医学评估，到生命恢复",
    steps: [
      { t: "评估", d: "在曼谷合作机构完成长寿与健康评估" },
      { t: "判断", d: "医生解读结果，确定个体化方向" },
      { t: "恢复", d: "回到普吉岛，在自然中进入恢复节律" },
      { t: "延续", d: "把改变带回日常，长期陪伴与追踪" },
    ],
  },
  closing: {
    eyebrow: "START WITH REAL HEALTH",
    line1: "信任 不来自承诺",
    line2: "而来自真实发生",
    cta: "申请你的生命旅程",
  },
};
