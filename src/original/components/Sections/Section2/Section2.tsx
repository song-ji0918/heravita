import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { Trans, useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

/**
 * 首页 Section 2
 * - 全宽背景图 + 左侧文案叠层
 * - 滚动入场动画，移动端自适应
 */
const Section2 = () => {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)
  const bgRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!rootRef.current) return

      if (bgRef.current) {
        gsap.fromTo(
          bgRef.current,
          { scale: 1.06 },
          {
            scale: 1,
            duration: 1.6,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: rootRef.current,
              start: 'top 80%',
              once: true
            }
          }
        )
      }

      const items = rootRef.current.querySelectorAll('[data-section2-item]')
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 75%',
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
      id='life-civilization'
      className='relative w-full overflow-hidden'
    >
      <div ref={bgRef} className='absolute inset-0'>
        <img
          src='/home/part3-bg@2x.jpg'
          alt=''
          className='size-full object-cover object-[60%_center] sm:object-center'
          loading='lazy'
        />
        {/* 移动端左侧轻微遮罩，保证文字可读 */}
        <div
          className='absolute inset-0 bg-gradient-to-r from-white/75 via-white/35 to-transparent sm:from-white/40 sm:via-transparent'
          aria-hidden='true'
        />
      </div>

      <div className='relative z-10 mx-auto flex min-h-[420px] w-full max-w-[1440px] items-start px-5 py-16 sm:min-h-[520px] sm:px-8 sm:py-20 lg:min-h-[640px] lg:px-14 lg:py-28'>
        <div className='max-w-[34rem] lg:max-w-[38rem]'>
          <h2
            data-section2-item
            className='text-[26px] leading-[1.3] font-medium tracking-tight text-brand-ink sm:text-[34px] lg:text-[42px]'
          >
            <span className='block'>{t('section2.titleLine1')}</span>
            <span className='block'>{t('section2.titleLine2')}</span>
          </h2>

          <p
            data-section2-item
            className='mt-5 text-[13px] leading-[1.8] text-brand-gray sm:mt-6 sm:text-[14px] lg:text-[15px]'
          >
            {/* {t("section2.desc")} */}
            <Trans
              i18nKey='section2.desc'
              components={{
                br: <br />
              }}
            />
          </p>

          <a
            data-section2-item
            href='#origin'
            className='mt-6 inline-block text-[13px] text-brand-ink underline decoration-brand-ink/40 underline-offset-4 transition-opacity hover:opacity-65 sm:mt-8'
          >
            {t('section2.learnMore')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Section2
