import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { Trans, useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

type Section2Row = {
  label: string
  value: string
  underline?: boolean
}

/** Journey Section2 — 左图右文（标签 | 说明 对齐布局） */
const Section2 = () => {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)
  const rows = t('journeyPage.section2.rows', {
    returnObjects: true
  }) as Section2Row[]

  useGSAP(
    () => {
      if (!rootRef.current) return
      gsap.fromTo(
        rootRef.current.querySelectorAll('[data-j2]'),
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
      className='w-full bg-[#F3EEE7] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20 relative'
    >
      <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 xl:gap-16'>
        {/* 左图：比例与路径保持现有配置 */}
        <div data-j2 className='min-w-0 flex-[1.2] overflow-hidden'>
          <img
            src='/journey/section2.jpg'
            alt=''
            className='aspect-[914/515] w-full object-cover'
            loading='lazy'
          />
        </div>

        {/* 右文 */}
        <div className='min-w-0 flex-1 lg:max-w-[32rem]'>
          <p
            data-j2
            className='mb-5 text-[11px] tracking-[0.14em] text-[#2f2f2f] uppercase sm:mb-6 sm:text-[18px]'
          >
            {t('journeyPage.section2.eyebrow')}
          </p>

          <h2
            data-j2
            className='text-[22px] leading-[1.35] font-medium tracking-tight text-brand-ink sm:text-[28px] lg:text-[32px]'
          >
            <Trans
              i18nKey='journeyPage.section2.title'
              components={{
                br: <br />
              }}
            />
          </h2>

          {/* 标签 | 说明：左列固定宽度，竖线对齐 */}
          <ul data-j2 className='mt-7 space-y-3 sm:mt-9 sm:space-y-3.5 w-max'>
            {rows.map(row => (
              <li
                key={`${row.label}-${row.value}`}
                className='grid grid-cols-[minmax(5.5rem,7.5rem)_auto_1fr] items-baseline gap-x-3 text-[13px] leading-[1.6] text-[#2f2f2f] sm:grid-cols-[minmax(6.5rem,8.5rem)_auto_1fr] sm:gap-x-4 sm:text-[14px] border-b border-[#2f2f2f]/15 pb-4'
              >
                <span>{row.label}</span>
                <span className='text-[#2f2f2f]/35' aria-hidden='true'>
                  |
                </span>
                <span className='text-[#2f2f2f]/'>{row.value}</span>
              </li>
            ))}
          </ul>

          <p
            data-j2
            className='mt-7 text-[13px] leading-[1.7] text-[#2f2f2f] sm:mt-8 sm:text-[14px]'
          >
            {t('journeyPage.section2.desc')}
          </p>
        </div>
      </div>
      <div className='absolute -bottom-[11px] w-full left-0 flex justify-center items-center'>
        <span className='flex-1 border-b border-[#2f2f2f]/23'></span>
        <span className='mx-6 text-[18px]'>WHY PHUKET?</span>
        <span className='flex-1 border-b border-[#2f2f2f]/23'></span>
      </div>
    </section>
  )
}

export default Section2
