/** Life 页素材路径，对应 public/life */

export const LIFE_HERO_IMAGES = [
  '/life/p1-1.jpg',
  '/life/p1-2.jpg',
  '/life/p1-3.jpg'
] as const

export const LIFE_STATE_ITEMS = [
  { id: 'fatigue', image: '/life/p2-1疲惫.jpg' },
  { id: 'insomnia', image: '/life/p2-2失眠.jpg' },
  { id: 'anxiety', image: '/life/p2-3焦虑.jpg' }
] as const

export const LIFE_CIRCLE_BG = '/life/p4-circle.png'
export const LIFE_CIRCLE_CENTER = '/life/p4-0.png'

/** 圆环卫星图：角度从正右方向顺时针，0° 为右侧 */
export const LIFE_CIRCLE_ITEMS = [
  { id: 'emotion', image: '/life/p4-2.png', deg: -90 },
  { id: 'diet', image: '/life/p4-4.png', deg: -45 },
  { id: 'movement', image: '/life/p4-5.png', deg: 0 },
  { id: 'family', image: '/life/p4-6.png', deg: 45 },
  { id: 'lifestyle', image: '/life/p4-7.png', deg: 90 },
  { id: 'care', image: '/life/p4-8.png', deg: 135 },
  { id: 'body', image: '/life/p4-1.png', deg: 180 },
  { id: 'sleep', image: '/life/p4-3.png', deg: 225 }
] as const

export const LIFE_SYSTEM_ITEMS = [
  { id: 'body', image: '/life/p5-1.jpg' },
  { id: 'emotion', image: '/life/p5-2.jpg' },
  { id: 'sleep', image: '/life/p5-3.jpg' },
  { id: 'diet', image: '/life/p5-4.jpg' },
  { id: 'movement', image: '/life/p5-5.jpg' },
  { id: 'family', image: '/life/p5-6.jpg' },
  { id: 'lifestyle', image: '/life/p5-7.jpg' },
  { id: 'care', image: '/life/p5-8.jpg' }
] as const

export const LIFE_CLOSING_IMAGES = [
  '/life/p6-1.jpg',
  '/life/p6-3.jpg',
  '/life/p6-4.jpg',
  '/life/p6-5.jpg'
] as const
