import phuket from '@/assets/phuket-hero.asset.json';
import china from '@/assets/china-sanctuary.jpg';
import europe from '@/assets/europe-living.jpg';
import usa from '@/assets/usa-network.jpg';
export type DestinationKey = 'phuket' | 'china' | 'europe' | 'usa';
export const destinations = [
 { key:'phuket', to:'/destinations/phuket', number:'01', name:'Thailand · Phuket', chinese:'泰国 · 普吉岛', positioning:'亚洲生命发现与重建基地', english:'LIFE DISCOVERY & REBUILDING', status:'Established', network:'Current Operating Base', image:phuket.url, alt:'普吉岛海湾晨光中的极简石材建筑与无边水境', tags:['ANDAMAN SEA','ASIA SANCTUARY','CURRENT OPERATING BASE'] },
 { key:'china', to:'/destinations/china', number:'02', name:'China', chinese:'中国', positioning:'健康文明入口 · 让生命支持回到日常', english:'LIFE SUPPORT, IN EVERYDAY LIVING', status:'Expanding', network:'Local Company · Channel Network', image:china, alt:'中国湖畔庭院的茶席、自然石材与静谧绿意，设计意向示意', tags:['LOCAL COMPANY','CHANNEL NETWORK','EVERYDAY LIFE'] },
 { key:'europe', to:'/destinations/europe', number:'03', name:'Europe', chinese:'欧洲', positioning:'地中海长寿生活方式 × 精准长寿医学', english:'MEDITERRANEAN LIVING & LONGEVITY', status:'Expanding', network:'Spain Local Company · Partner Network', image:europe, alt:'地中海海岸的石材露台与橄榄树，生活方式意向示意', tags:['SPAIN','SWITZERLAND','ITALY'] },
 { key:'usa', to:'/destinations/usa', number:'04', name:'United States', chinese:'美国', positioning:'前沿医学与生命科技连接', english:'ADVANCED MEDICINE & LIFE SCIENCE', status:'Expanding', network:'New York Local Company · Resource Network', image:usa, alt:'纽约天际线与自然光下的现代室内，网络意向示意', tags:['NEW YORK LOCAL PRESENCE','NATIONAL RESOURCE NETWORK'] },
] as const;
export const regionStories = {
 china: {
  title:'Life returns to the everyday.', quote:'让生命支持，回到日常。', introduction:'海外旅程结束后，我们仍将回到家庭、事业、关系与城市。中国不是单纯的客源地，而是长期生命改变回到现实生活的地方。', english:'Beyond the journey, lasting change belongs at home.', foundation:'已建立中国本地公司，以深厚的高净值渠道基础，连接海外旅程与日常生命支持。', imageTitle:'Jie You Ge', imageChinese:'解忧阁 · 全球华人身边的生命能量补给站', imageQuote:'让烦恼有出口，让生命有能量。', imageEnglish:'A place to be heard. A space to feel renewed.', pillars:[['01','EMOTIONAL SUPPORT','情绪支持与生命陪伴','为情绪留出出口，为关系与日常提供持续陪伴。'],['02','INNER GROWTH','内在成长与生活方式教育','将觉察、健康教育与可持续的生活方式融入真实日常。'],['03','CONTINUITY OF CARE','旅程前后端长程陪伴','从行前对话到归来后的家庭与事业，让改变有长期支持。']], consult:'中国私人顾问预约', consultEnglish:'Your everyday. Thoughtfully supported.', purpose:'local_support', consultCopy:'与私人顾问交流您的生活期待，了解解忧阁与海外旅程前后的长程陪伴。',
 },
 europe: {
  title:'From diet. To a way of life.', quote:'从 Mediterranean Diet，走向 Mediterranean Living。', introduction:'地中海饮食不是一张菜单，而是一种长寿生活方式。阳光、天然膳食、自然节律与人与人的连接，让高质量长寿回到生活本身。', english:'Not simply what we eat. How we live.', foundation:'以西班牙本地公司为支点，拓展欧洲伙伴网络；医学资源按个人需求审慎筛选与匹配。', imageTitle:'Mediterranean Living', imageChinese:'阳光、自然节律与生命感受力', imageQuote:'让长寿，成为一种生活。', imageEnglish:'Live well. Feel more. Flourish forward.', pillars:[['01','SPAIN · LOCAL ANCHOR','西班牙 · 地中海长寿哲学','本地公司支点，连接阳光、天然膳食、自然节律与慢生活。'],['02','SWITZERLAND · PRECISION','瑞士 · 精准长寿医学','围绕前沿评估，筛选并匹配国际优质医疗与长寿资源。'],['03','ITALY · ART OF LIVING','意大利 · 生活美学与生命品质','从饮食、艺术与社交，重新打开对生活的感受力。']], consult:'欧洲长寿咨询通道', consultEnglish:'A fuller life. A wider world.', purpose:'flourish', consultCopy:'面向 Life Flourishing 与全球生命拓展，以您的生活愿景与专业评估为起点，规划高阶长寿生活旅程。',
 },
 usa: {
  title:'One local presence. A broader medical network.', quote:'一个本地支点，连接更广阔的美国医学网络。', introduction:'以纽约本地公司为支点，持续连接全美前沿医学中心与生命科学资源。不是单一地点，而是围绕个人需求展开的专业资源路径。', english:'A New York anchor. A national perspective.', foundation:'New York → Boston → Rochester / Minnesota → Cleveland → San Francisco Bay Area', imageTitle:'Science, connected.', imageChinese:'前沿医学 · 生命科技 · 专家资源', imageQuote:'以需求为中心，以专业为路径。', imageEnglish:'Expertise matched to your individual needs.', pillars:[['01','ADVANCED MEDICINE','前沿医学与精准健康','Advanced Medicine · Precision Health\n筛选专业资源，梳理个人化评估与协调路径。'],['02','GENOMICS & LONGEVITY','基因组学与长寿科学','Genomics · Longevity Science\n连接生命科技信息与适宜的专业评估资源。'],['03','EXPERT COORDINATION','全球专家筛选与路径整合','围绕需求进行专家资源匹配与国际医学协调；服务以机构确认和医生评估为准。']], consult:'国际医学协调与咨询', consultEnglish:'Your needs. The right connections.', purpose:'medical_coordination', consultCopy:'与私人协调顾问交流您的需求，了解医学资源筛选、专家匹配与路径整合；请勿在表单中填写敏感医疗信息。',
 },
} as const;