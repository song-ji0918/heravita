/** Section5 Journey 轮播项，后续替换 image / 文案 key 即可 */
export const SECTION5_SLIDES = [
  {
    id: 'airport-pickup',
    image: '/home/section5/1.jpg'
  },
  {
    id: 'welcome',
    image: '/home/section5/2.jpg'
  },
  {
    id: 'check-in',
    image: '/home/section5/3.jpg'
  },
  {
    id: 'spa',
    image: '/home/section5/4.jpg'
  },
  {
    id: 'kitchen',
    image: '/home/section5/5.jpg'
  },
  {
    id: 'health-assessment',
    image: '/home/section5/6.jpg'
  },
  {
    id: 'afternoon-tea',
    image: '/home/section5/7.jpg'
  },
  {
    id: 'float-therapy',
    image: '/home/section5/8.jpg'
  },
  {
    id: 'sunset',
    image: '/home/section5/9.jpg'
  },
  {
    id: 'party',
    image: '/home/section5/10.jpg'
  },
  {
    id: 'evening-meditation',
    image: '/home/section5/11.jpg'
  }
] as const

export type Section5SlideId = (typeof SECTION5_SLIDES)[number]['id']
