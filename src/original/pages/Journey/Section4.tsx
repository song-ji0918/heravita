import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { Trans, useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

/** Journey Section4 — 左图右文（不是一场旅游） */
const Section4 = () => {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)
  const items = t('journeyPage.section4.items', {
    returnObjects: true
  }) as string[]

  useGSAP(
    () => {
      if (!rootRef.current) return
      gsap.fromTo(
        rootRef.current.querySelectorAll('[data-j4]'),
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
        <div data-j4 className='min-w-0 flex-[1.2] overflow-hidden'>
          <img
            src='/journey/eye.jpg'
            alt=''
            className='aspect-[16/10] w-full object-cover'
            loading='lazy'
          />
        </div>
        <div className='min-w-0 flex-1 lg:max-w-[28rem]'>
          <p
            data-j4
            className='text-[11px] tracking-[0.14em] text-[#2f2f2f] uppercase sm:text-[18px]'
          >
            {t('journeyPage.section4.eyebrow')}
          </p>
          <h2
            data-j4
            className='mt-3 text-[24px] leading-snug text-brand-ink sm:text-[30px] lg:text-[32px]'
          >
            {/* {t("journeyPage.section4.title")} */}
            <Trans
              i18nKey='journeyPage.section4.title'
              components={{
                br: <br />
              }}
            />
          </h2>

          <ul data-j4 className='grid grid-cols-2 mt-6 space-y-2.5 sm:mt-8'>
            {items.map(item => (
              <li
                key={item}
                className={`text-[13px] leading-[1.7] text-[#2f2f2f]/85 sm:text-[14px] border-l border-[#2f2f2f]/15  mb-0 py-2 pl-1 `}
              >
                {item}
              </li>
            ))}
          </ul>
          <p
            data-j4
            className='mt-6 text-[13px] leading-[1.75] text-[#2f2f2f] sm:text-[14px]'
          >
            {t('journeyPage.section4.desc')}
          </p>
          <p
            data-j3
            className='text-[13px] leading-[1.7] text-[#2f2f2f] sm:text-[14px]'
          >
            {t('journeyPage.section4.subdesc')}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Section4
