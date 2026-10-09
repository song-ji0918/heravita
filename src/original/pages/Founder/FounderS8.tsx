import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { Trans, useTranslation } from 'react-i18next'

import ExpandingImageGallery from '../../components/ExpandingImageGallery/ExpandingImageGallery'

gsap.registerPlugin(ScrollTrigger)

/** 占位图，后续替换为各成员真实素材 */
const TEAM_ITEMS = [
  { id: 'creator', image: '/founder/s8/1.jpg' },
  { id: 'guide', image: '/founder/s8/2.jpg' },
  { id: 'curator', image: '/founder/s8/3.jpg' },
  { id: 'designer', image: '/founder/s8/4.jpg' },
  { id: 'companion', image: '/founder/s8/5.jpg' }
] as const

/**
 * Founder Section8 — OUR TEAM（可复用 ExpandingImageGallery）
 */
const FounderS8 = () => {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!rootRef.current) return
      gsap.fromTo(
        rootRef.current.querySelectorAll('[data-fs8]'),
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 78%',
            once: true
          }
        }
      )
    },
    { scope: rootRef }
  )

  return (
    <section
      ref={rootRef}
      className='w-full bg-[#F3EEE7] px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-24'
    >
      <div className='mx-auto w-full max-w-[1440px]'>
        <div className='mx-auto max-w-[42rem] text-center'>
          <p
            data-fs8
            className='text-[11px] tracking-[0.14em] text-brand-gray uppercase sm:text-[12px]'
          >
            {t('founderPage.section8.eyebrow')}
          </p>
          <h2
            data-fs8
            className='mt-3 text-[22px] leading-[1.35] font-medium tracking-tight text-brand-ink sm:mt-4 sm:text-[28px] lg:text-[32px]'
          >
            {t('founderPage.section8.title')}
          </h2>
          <p
            data-fs8
            className='mt-4 text-[13px] leading-[1.8] text-brand-gray sm:mt-5 sm:text-[14px]'
          >
            <Trans
              i18nKey='founderPage.section8.desc'
              components={{ br: <br /> }}
            />
          </p>
        </div>

        <div data-fs8 className='mt-10 sm:mt-12 lg:mt-14'>
          <ExpandingImageGallery
            activeAspect={16 / 9}
            items={TEAM_ITEMS.map(item => ({
              ...item,
              title: t(`founderPage.section8.members.${item.id}.title`),
              desc: t(`founderPage.section8.members.${item.id}.desc`),
              alt: t(`founderPage.section8.members.${item.id}.title`)
            }))}
          />
        </div>
      </div>
    </section>
  )
}

export default FounderS8
