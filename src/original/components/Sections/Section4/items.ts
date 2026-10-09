/** Section4 帮助方式卡片，后续替换 image 路径即可 */
export const SECTION4_ITEMS = [
  {
    id: 'environment',
    image: '/home/section4/1.gif'
  },
  {
    id: 'medicine',
    image: '/home/section4/2.gif'
  },
  {
    id: 'spirit',
    image: '/home/section4/3.jpg'
  },
  {
    id: 'food',
    image: '/home/section4/4.jpg'
  },
  {
    id: 'energy',
    image: '/home/section4/5.jpg'
  },
  {
    id: 'happiness',
    image: '/home/section4/6.jpg'
  },
  {
    id: 'influence',
    image: '/home/section4/7.jpg'
  },
  {
    id: 'creativity',
    image: '/home/section4/8.jpg'
  },
  {
    id: 'spirituality',
    image: '/home/section4/9.jpg'
  },
  {
    id: 'aristocracy',
    image: '/home/section4/10.jpg'
  },
  {
    id: 'courage',
    image: '/home/section4/11.jpg'
  },
  {
    id: 'joy',
    image: '/home/section4/12.jpg'
  }
] as const

export type Section4ItemId = (typeof SECTION4_ITEMS)[number]['id']
