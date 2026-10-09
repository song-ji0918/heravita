import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { Trans, useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

/**
 * Founder Section4 — FOUNDER'S WHY（左图 914×515 + 右文）
 */
const FounderS4 = () => {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!rootRef.current) return
      gsap.fromTo(
        rootRef.current.querySelectorAll('[data-fs4]'),
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
      className='w-full bg-[#F3EEE7] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20'
    >
      <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 xl:gap-16'>
        <div
          data-fs4
          className='min-w-0 w-full overflow-hidden lg:flex-[914] lg:max-w-[914px]'
        >
          <img
            src='/founder/s3.jpg'
            alt=''
            className='aspect-[914/515] w-full object-cover'
            loading='lazy'
          />
        </div>

        <div className='min-w-0 flex-1 lg:max-w-[28rem]'>
          <p
            data-fs4
            className='text-[11px] tracking-[0.14em] text-brand-gray uppercase sm:text-[12px]'
          >
            {t('founderPage.section4.eyebrow')}
          </p>
          <h2
            data-fs4
            className='mt-3 text-[22px] leading-[1.35] font-medium tracking-tight text-brand-ink sm:mt-4 sm:text-[28px] lg:text-[32px]'
          >
            <Trans
              i18nKey='founderPage.section4.title'
              components={{ br: <br /> }}
            />
          </h2>
          <div
            data-fs4
            className='mt-6 space-y-4 text-[13px] leading-[1.8] text-brand-ink/85 sm:mt-8 sm:space-y-5 sm:text-[14px]'
          >
            <p>{t('founderPage.section4.p1')}</p>
            <p>{t('founderPage.section4.p2')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FounderS4
