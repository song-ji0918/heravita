/** Global 页素材路径，对应 public/global */

export const GLOBAL_MAP_IMAGE = '/global/p1.jpg'

export const GLOBAL_LAYER_IDS = [
  'bases',
  'hospitals',
  'future',
  'resources'
] as const

export type GlobalLayerId = (typeof GLOBAL_LAYER_IDS)[number]

export type GlobalMarker = {
  id: string
  layer: GlobalLayerId
  /** 经纬换算后的水平位置，0–100 */
  x: number
  /** 经纬换算后的垂直位置，0–100 */
  y: number
}

/** 各图层地图点位；合作医院与设计图对应 */
export const GLOBAL_MARKERS: readonly GlobalMarker[] = [
  { id: 'phuket', layer: 'bases', x: 77.3, y: 45.6 },
  { id: 'milan', layer: 'bases', x: 52.6, y: 24.7 },
  { id: 'sedona', layer: 'bases', x: 19.0, y: 30.6 },

  { id: 'ucla', layer: 'hospitals', x: 17.1, y: 31.1 },
  { id: 'imperial', layer: 'hospitals', x: 50.0, y: 21.2 },
  { id: 'paris', layer: 'hospitals', x: 50.7, y: 23.5 },
  { id: 'laprairie', layer: 'hospitals', x: 51.6, y: 25.6 },
  { id: 'regen', layer: 'hospitals', x: 88.8, y: 30.2 },
  { id: 'longevity', layer: 'hospitals', x: 76.4, y: 42.0 },
  { id: 'bumrungrad', layer: 'hospitals', x: 78.2, y: 43.4 },

  { id: 'sydney', layer: 'future', x: 86.5, y: 68.5 },
  { id: 'dubai', layer: 'future', x: 60.3, y: 36.8 },
  { id: 'saoPaulo', layer: 'future', x: 32.4, y: 62.0 },

  { id: 'scn', layer: 'resources', x: 28.0, y: 25.8 },
  { id: 'tokyo', layer: 'resources', x: 87.5, y: 31.5 },
  { id: 'peptide', layer: 'resources', x: 51.4, y: 24.4 },
  { id: 'harley', layer: 'resources', x: 49.7, y: 21.6 }
] as const
