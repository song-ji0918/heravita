import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

/** Journey Section3 — 左文右图（WHY） */
const Section3 = () => {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)
  const features = t('journeyPage.section3.features', {
    returnObjects: true
  }) as string[]

  useGSAP(
    () => {
      if (!rootRef.current) return
      gsap.fromTo(
        rootRef.current.querySelectorAll('[data-j3]'),
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
      <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-8 lg:flex-row-reverse lg:items-center lg:gap-12 xl:gap-16'>
        <div data-j3 className='min-w-0 flex-[1.2] overflow-hidden'>
          <img
            src='/journey/PHUKET.jpg'
            alt=''
            className='aspect-[914/515] w-full object-cover'
            loading='lazy'
          />
        </div>
        <div className='min-w-0 flex-1 lg:max-w-[28rem]'>
          <p
            data-j3
            className='text-[11px] tracking-[0.16em] text-[#2f2f2f] uppercase sm:text-[18px]'
          >
            {t('journeyPage.section3.eyebrow')}
          </p>
          <h2
            data-j3
            className='mt-3 text-[24px] leading-snug text-brand-ink sm:text-[30px] lg:text-[32px]'
          >
            {t('journeyPage.section3.title')}
          </h2>
          <p
            data-j3
            className='mt-5 text-[13px] leading-[1.8] text-[#2f2f2f] sm:text-[20px]'
          >
            {t('journeyPage.section3.desc')}
          </p>
          <p
            data-j3
            className='mt-5 text-[13px] leading-[1.8] text-[#2f2f2f] sm:text-[14px]'
          >
            {t('journeyPage.section3.subdesc')}
          </p>
          <ul
            data-j3
            className='grid grid-cols-2 gap-3 border-b border-t border-[#2f2f2f]/15 mt-7 sm:mt-9 py-4'
          >
            {features.map((item, index) => (
              <li
                key={item}
                className={`text-[13px] text-[#2f2f2f]/85 sm:text-[14px] leading-[2] ${index % 2 === 0 ? 'border-r border-[#2f2f2f]/15 ' : ' text-center'}`}
              >
                {item}
              </li>
            ))}
          </ul>
          <p
            data-j3
            className='mt-7 text-[13px] leading-[1.7] text-[#2f2f2f] sm:mt-8 sm:text-[14px]'
          >
            {t('journeyPage.section3.minidesc')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section3
