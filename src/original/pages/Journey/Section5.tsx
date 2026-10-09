import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { Trans, useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

/** Journey Section5 — FROM DISCOVERY TO REDESIGN + 右侧轮播 */
const Section5 = () => {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)
  const items = t('journeyPage.section5.items', {
    returnObjects: true
  }) as string[]

  useGSAP(
    () => {
      if (!rootRef.current) return
      gsap.fromTo(
        rootRef.current.querySelectorAll('[data-j5]'),
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
        <div className='min-w-0 flex-1 lg:max-w-[26rem] lg:pt-2'>
          <p
            data-j5
            className='text-[11px] tracking-[0.14em] text-[#2f2f2f] uppercase sm:text-[18px]'
          >
            {t('journeyPage.section5.eyebrow')}
          </p>
          <h2
            data-j5
            className='mt-3 text-[24px] leading-snug text-[#2f2f2f] sm:text-[30px] lg:text-[32px]'
          >
            {/* {t("journeyPage.section5.title")} */}
            <Trans
              i18nKey='journeyPage.section5.title'
              components={{
                br: <br />
              }}
            />
          </h2>
          <p
            data-j5
            className='mt-2 text-[15px] text-[#2f2f2f]/80 sm:text-[16px]'
          >
            {t('journeyPage.section5.subtitle')}
          </p>
          <ul data-j5 className='mt-6 space-y-2.5 sm:mt-8'>
            {items.map((item, index) => (
              <li
                key={item}
                className='text-[13px] leading-[1.7] text-[#2f2f2f]/85 sm:text-[14px] border-t border-[#2f2f2f]/23 pt-2.5 last:border-b last:border-[#2f2f2f]/23 last:pb-2.5'
              >
                <span className='text-[#2f2f2f]/85 mr-4'>
                  {index < 10 ? `0${index + 1}` : `${index + 1}`}
                </span>
                <span className='text-[#2f2f2f]'>{item}</span>
              </li>
            ))}
          </ul>
          <p
            data-j5
            className='mt-6 text-[13px] leading-[1.75] text-[#2f2f2f] sm:text-[14px]'
          >
            {t('journeyPage.section5.desc')}
          </p>
        </div>
        <div className='flex flex-2 flex-row gap-8 lg:gap-12 xl:gap-16'>
          <div className='max-w-[519px] w-full'>
            <img
              src='/journey/experience.jpg'
              alt=''
              className='aspect-square w-full object-cover'
              loading='lazy'
            ></img>
          </div>
          <div className='max-w-[519px] w-full'>
            <img
              src='/journey/food.jpg'
              alt=''
              className='aspect-square w-full object-cover'
              loading='lazy'
            ></img>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section5
