/** Section3 健康维度卡片配置（环状 5 张），后续替换 image 路径即可 */
export const SECTION3_ITEMS = [
  {
    id: 'physical',
    image: '/home/section3/1.jpg'
  },
  {
    id: 'mental',
    image: '/home/section3/2.jpg'
  },
  {
    id: 'emotional',
    image: '/home/section3/3.jpg'
  },
  {
    id: 'relational',
    image: '/home/section3/4.jpg'
  },
  {
    id: 'life',
    image: '/home/section3/5.jpg'
  }
] as const

export type Section3ItemId = (typeof SECTION3_ITEMS)[number]['id']
