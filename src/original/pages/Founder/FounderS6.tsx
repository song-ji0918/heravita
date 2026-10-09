import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

/**
 * Founder Section6 — BRAND MISSION（左文 + 右图 914×515）
 */
const FounderS6 = () => {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!rootRef.current) return
      gsap.fromTo(
        rootRef.current.querySelectorAll('[data-fs6]'),
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
      className='w-full bg-[#E6E2DB] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20'
    >
      <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 xl:gap-16'>
        <div className='min-w-0 flex-1 lg:max-w-[28rem]'>
          <p
            data-fs6
            className='text-[11px] tracking-[0.14em] text-brand-gray uppercase sm:text-[18px]'
          >
            {t('founderPage.section6.eyebrow')}
          </p>
          <h2
            data-fs6
            className='mt-3 text-[22px] leading-[1.35] font-medium tracking-tight text-brand-ink sm:mt-4 sm:text-[28px] lg:text-[32px]'
          >
            {t('founderPage.section6.title')}
          </h2>
          <p
            data-fs6
            className='mt-4 text-[14px] leading-[1.7] font-medium text-brand-ink sm:mt-5 sm:text-[16px]'
          >
            {t('founderPage.section6.subtitle')}
          </p>
          <p
            data-fs6
            className='mt-5 text-[13px] leading-[1.8] text-brand-ink/80 sm:mt-6 sm:text-[14px]'
          >
            {t('founderPage.section6.desc')}
          </p>
        </div>

        <div
          data-fs6
          className='min-w-0 w-full overflow-hidden lg:flex-[914] lg:max-w-[914px]'
        >
          <img
            src='/founder/s5.jpg'
            alt={t('founderPage.section6.title')}
            className='aspect-[914/515] w-full object-cover'
            loading='lazy'
          />
        </div>
      </div>
    </section>
  )
}

export default FounderS6
