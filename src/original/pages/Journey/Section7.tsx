import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { Trans, useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

/** Journey Section7 — CTA */
const Section7 = () => {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!rootRef.current) return
      gsap.fromTo(
        rootRef.current.querySelectorAll('[data-j7]'),
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 80%',
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
      className='w-full bg-[#F3EEE7] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28'
    >
      <div className='mx-auto w-full text-center'>
        <p
          data-j7
          className='text-[11px] tracking-[0.14em] text-[#2f2f2f] uppercase sm:text-[18px]'
        >
          {t('journeyPage.section7.eyebrow')}
        </p>
        <h2
          data-j7
          className='mt-3 text-[28px] text-[#2f2f2f] sm:text-[34px] lg:text-[40px]'
        >
          <Trans
            i18nKey='journeyPage.section7.title'
            components={{ br: <br /> }}
          />
        </h2>
        <p
          data-j7
          className='mt-4 text-[16px] leading-[1.8] text-[#2f2f2f] sm:mt-5 sm:text-[20px]'
        >
          <Trans
            i18nKey='journeyPage.section7.subtitle'
            components={{ br: <br /> }}
          />
        </p>
        <p
          data-j7
          className='mt-4 text-[13px] leading-[1.8] text-[#2f2f2f] sm:mt-5 sm:text-[14px]'
        >
          <Trans
            i18nKey='journeyPage.section7.desc'
            components={{ br: <br /> }}
          />
        </p>
        <p
          data-j7
          className='mt-15 text-[13px] leading-[1.8] text-[#2f2f2f] sm:text-[18px]'
        >
          <Trans
            i18nKey='journeyPage.section7.caption1'
            components={{ br: <br /> }}
          />
        </p>
        <p
          data-j7
          className='mt-1 text-[13px] leading-[1.8] text-[#2f2f2f] sm:text-[18px]'
        >
          <Trans
            i18nKey='journeyPage.section7.caption2'
            components={{ br: <br /> }}
          />
        </p>
        <a
          data-j7
          href='#contact'
          className='mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-[#2F2F2F] px-12 text-[13px] tracking-[0.04em] text-white transition-opacity hover:opacity-85 sm:mt-10'
        >
          {t('journeyPage.section7.buttonText')}
        </a>
      </div>
    </section>
  )
}

export default Section7
