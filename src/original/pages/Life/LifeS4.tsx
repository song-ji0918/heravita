import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

/** Life Section4 — 真正的健康，不是一次治疗 */
const LifeS4 = () => {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!rootRef.current) return
      gsap.fromTo(
        rootRef.current.querySelectorAll('[data-ls4]'),
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
          data-ls4
          className='min-w-0 w-full overflow-hidden lg:flex-[914] lg:max-w-[914px]'
        >
          <img
            src='/life/p3.jpg'
            alt=''
            className='aspect-[16/9] w-full object-cover'
            loading='lazy'
          />
        </div>

        <div className='min-w-0 flex-1 lg:max-w-[28rem]'>
          <p
            data-ls4
            className='text-[11px] tracking-[0.14em] text-brand-gray uppercase sm:text-[18px]'
          >
            {t('lifePage.section4.eyebrow')}
          </p>
          <h2
            data-ls4
            className='mt-3 text-[22px] leading-[1.35] font-medium tracking-tight text-brand-ink sm:mt-4 sm:text-[28px] lg:text-[32px]'
          >
            {t('lifePage.section4.title')}
          </h2>
          <div
            data-ls4
            className='mt-5 space-y-4 text-[13px] leading-[1.8] text-[#2f2f2f] sm:mt-6 sm:text-[14px]'
          >
            <p>{t('lifePage.section4.p1')}</p>
            <p>{t('lifePage.section4.p2')}</p>
            <p>{t('lifePage.section4.p3')}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LifeS4
