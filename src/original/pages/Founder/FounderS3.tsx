import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

/**
 * Founder Section3 — 左文右图（右图 914×515）
 */
const FounderS3 = () => {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!rootRef.current) return
      gsap.fromTo(
        rootRef.current.querySelectorAll('[data-fs3]'),
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
      <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-12 xl:gap-16'>
        <div className='flex min-w-0 flex-col lg:max-w-[28rem] lg:py-1'>
          <div>
            <p
              data-fs3
              className='text-[11px] tracking-[0.14em] text-brand-gray uppercase sm:text-[18px]'
            >
              {t('founderPage.section3.eyebrow')}
            </p>
            <h2
              data-fs3
              className='mt-3 text-[28px] leading-snug font-medium tracking-tight text-[#2f2f2f] sm:mt-4 sm:text-[34px] lg:text-[40px]'
            >
              {t('founderPage.section3.title')}
            </h2>
          </div>
          <div
            data-fs3
            className='mt-10 space-y-4 leading-[1.6] text-[#2f2f2f] sm:mt-12 sm:space-y-5 lg:mt-auto lg:pt-16'
          >
            <p className='text-[14px] sm:text-[18px]'>
              {t('founderPage.section3.question')}
            </p>
            <p className='text-[12px] sm:text-[14px]'>
              {t('founderPage.section3.p1')}
            </p>
            <p className='text-[12px] sm:text-[14px]'>
              {t('founderPage.section3.p2')}
            </p>
          </div>
        </div>

        <div
          data-fs3
          className='min-w-0 w-full flex-1 overflow-hidden lg:w-auto lg:flex-[914] lg:max-w-[914px]'
        >
          <img
            src='/founder/hv.jpg'
            alt={t('founderPage.section3.title')}
            className='aspect-[914/515] w-full object-cover'
            loading='lazy'
          />
        </div>
      </div>
    </section>
  )
}

export default FounderS3
