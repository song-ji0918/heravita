import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { Trans, useTranslation } from 'react-i18next'

import ImageCardSlider from '../../components/ImageCardSlider/ImageCardSlider'

gsap.registerPlugin(ScrollTrigger)

/** 占位图，后续替换为各层真实素材 */
const S4_ITEMS = [
  { id: 'personal', image: '/founder/s5/1.jpg' },
  { id: 'family', image: '/founder/s5/2.jpg' },
  { id: 'civilization', image: '/founder/s5/3.jpg' }
] as const

/**
 * Founder Section5 — BRAND VISION（左文 + 右 ImageCardSlider 519×519）
 */
const FounderS5 = () => {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!rootRef.current) return
      gsap.fromTo(
        rootRef.current.querySelectorAll('[data-fs5]'),
        { autoAlpha: 0, y: 32 },
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
      className='relative w-full bg-[#F3EEE7] px-5 pb-14 pt-16 sm:px-8 sm:pb-16 sm:pt-20 lg:px-14 lg:pb-24 lg:pt-24'
    >
      {/* 分节线：BRAND VISION */}
      <div className='absolute top-0 left-0 flex w-full items-center justify-center px-5 sm:px-8 lg:px-14'>
        <span className='h-px flex-1 bg-[#2f2f2f]/20' />
        <span className='mx-5 text-[12px] tracking-[0.16em] text-brand-gray uppercase sm:mx-6 sm:text-[13px]'>
          {t('founderPage.section5.divider')}
        </span>
        <span className='h-px flex-1 bg-[#2f2f2f]/20' />
      </div>

      <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-10 xl:gap-14'>
        <div className='min-w-0 shrink-0 lg:w-[min(100%,22rem)] xl:w-[26rem]'>
          <p
            data-fs5
            className='text-[11px] tracking-[0.14em] text-brand-gray uppercase sm:text-[18px]'
          >
            {t('founderPage.section5.eyebrow')}
          </p>
          <h2
            data-fs5
            className='mt-3 text-[22px] leading-[1.35] font-medium tracking-tight text-brand-ink sm:mt-4 sm:text-[28px] lg:text-[32px]'
          >
            <Trans
              i18nKey='founderPage.section5.title'
              components={{ br: <br /> }}
            />
          </h2>
          <div
            data-fs5
            className='mt-6 space-y-4 text-[13px] leading-[1.8] text-brand-ink/85 sm:mt-8 sm:space-y-5 sm:text-[14px]'
          >
            <p>{t('founderPage.section5.p1')}</p>
            <p>{t('founderPage.section5.p2')}</p>
          </div>
        </div>

        <ImageCardSlider
          items={S4_ITEMS}
          desktopCardSize={519}
          gap={24}
          className='min-w-0 flex-1'
          getAriaLabel={item =>
            t(`founderPage.section5.cards.${item.id}.title`)
          }
          renderContent={(item, { showText }) => (
            <div
              className={`mt-5 transition-opacity duration-500 sm:mt-6 ${
                showText ? 'opacity-100' : 'pointer-events-none opacity-0'
              }`}
            >
              <h3 className='text-[16px] font-medium text-brand-ink sm:text-[17px]'>
                {t(`founderPage.section5.cards.${item.id}.title`)}
              </h3>
              <p className='mt-2.5 text-[13px] leading-[1.7] text-brand-gray sm:mt-3 sm:text-[14px]'>
                {t(`founderPage.section5.cards.${item.id}.desc`)}
              </p>
            </div>
          )}
        />
      </div>
    </section>
  )
}

export default FounderS5
