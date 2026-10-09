import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { Trans, useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

/**
 * 首页 Section 6 — Origin
 * - 左文案 + 右上手势插画
 * - 下方身份 / 使命两卡
 */
const Section6 = () => {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!rootRef.current) return
      const items = rootRef.current.querySelectorAll('[data-section6-item]')
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
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
      id='origin'
      className='w-full bg-[#F3EEE7] px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-24'
    >
      <div className='mx-auto w-full max-w-[1440px]'>
        {/* 上方：文案 + 手势图 */}
        <div className='flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-12 xl:gap-16'>
          <div className='w-full max-w-[35rem] shrink-0 lg:pt-2'>
            <h2
              data-section6-item
              className='text-[32px] leading-none tracking-tight text-brand-ink sm:text-[40px] lg:text-[46px]'
            >
              {t('section6.title')}
            </h2>

            <div
              data-section6-item
              className='mt-3 h-px w-14 bg-brand-ink/70'
              aria-hidden='true'
            />
            <p
              data-section6-item
              className='mt-6 text-[13px] leading-[1.85] text-brand-gray sm:text-[14px]'
            >
              <Trans
                i18nKey='section6.desc'
                components={{
                  br: <br />
                }}
              />
            </p>
            <a
              data-section6-item
              href='#contact'
              className='mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-[#2F2F2F] px-24 text-[13px] text-white transition-opacity hover:opacity-85 sm:mt-10'
            >
              {t('section6.cta')}
            </a>
          </div>

          <div
            data-section6-item
            className='mx-auto w-full max-w-[514px] lg:mx-0 lg:max-w-[514px]'
          >
            <img
              src='/home/hand@2x.jpg'
              alt=''
              className='h-auto w-full object-contain'
              loading='lazy'
            />
          </div>
        </div>

        {/* 下方双卡 */}
        <div className='mt-12 grid grid-cols-1 gap-4 sm:mt-14 sm:gap-5 lg:mt-16 lg:grid-cols-2 lg:gap-6'>
          <article
            data-section6-item
            className='rounded-[1.25rem] border border-[#2f2f2f] bg-white/52 px-6 py-7 sm:rounded-[1.5rem] sm:px-8 sm:py-8 lg:rounded-[1.75rem] lg:px-10 lg:py-9'
          >
            <p className='text-[15px] text-brand-gray sm:text-base'>
              {t('section6.identity.label')}
            </p>

            <h3 className='mt-2 text-[15px] tracking-tight text-[#2f2f2f]'>
              {/* {t("section6.identity.title")} */}
              <Trans
                i18nKey='section6.identity.title'
                components={{
                  br: <br />
                }}
              />
            </h3>
            <p className='mt-4 text-[13px] leading-[1.75] text-brand-gray sm:text-[14px]'>
              {/* {t("section6.identity.desc")} */}
              <Trans
                i18nKey='section6.identity.desc'
                components={{
                  br: <br />
                }}
              />
            </p>
          </article>

          <article
            data-section6-item
            className='rounded-[1.25rem] border border-[#2f2f2f] bg-white/52 px-6 py-7 sm:rounded-[1.5rem] sm:px-8 sm:py-8 lg:rounded-[1.75rem] lg:px-10 lg:py-9'
          >
            <p className='text-[15px] text-[#2f2f2f] sm:text-base'>
              {t('section6.mission.label')}
            </p>
            <h3 className='mt-2 text-[15px] tracking-tight text-[#2f2f2f]'>
              {/* {t("section6.mission.title")} */}
              <Trans
                i18nKey='section6.mission.title'
                components={{
                  br: <br />
                }}
              />
            </h3>
            <p className='mt-4 text-[13px] leading-[1.75] text-[#2f2f2f] sm:text-[14px]'>
              {/* {t("section6.mission.desc")} */}
              <Trans
                i18nKey='section6.mission.desc'
                components={{
                  br: <br />
                }}
              />
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default Section6
