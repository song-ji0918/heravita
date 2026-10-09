import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

/**
 * Founder Section7 — GLOBAL STRATEGY（深色背景图 + 左文）
 */
const FounderS7 = () => {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!rootRef.current) return
      gsap.fromTo(
        rootRef.current.querySelectorAll('[data-fs7]'),
        { autoAlpha: 0, y: 28 },
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
      className='relative w-full overflow-hidden bg-[#0A1E28]'
    >
      {/* 全端背景：文字叠在背景之上 */}
      <div
        className='pointer-events-none absolute inset-0 bg-cover bg-right bg-no-repeat'
        style={{ backgroundImage: 'url(/founder/s6_bg.jpg)' }}
        aria-hidden='true'
      />
      {/* 移动端左侧轻微遮罩，保证文案可读 */}
      <div
        className='pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0A1E28]/85 via-[#0A1E28]/45 to-transparent lg:hidden'
        aria-hidden='true'
      />

      <div className='relative mx-auto flex w-full max-w-[1440px] flex-col lg:flex-row lg:items-center'>
        <div className='w-full px-5 py-14 sm:px-8 sm:py-16 lg:w-[42%] lg:px-14 lg:py-24 xl:w-[38%]'>
          <p
            data-fs7
            className='text-[11px] tracking-[0.16em] text-white/70 uppercase sm:text-[18px]'
          >
            {t('founderPage.section7.eyebrow')}
          </p>
          <h2
            data-fs7
            className='mt-3 text-[24px] leading-snug font-medium tracking-tight text-white sm:mt-4 sm:text-[30px] lg:text-[34px]'
          >
            {t('founderPage.section7.title')}
          </h2>
          <div
            data-fs7
            className='mt-6 space-y-4 text-[13px] leading-[1.8] text-white/85 sm:mt-8 sm:text-[14px]'
          >
            <p>{t('founderPage.section7.p1')}</p>
            <p>{t('founderPage.section7.p2')}</p>
          </div>

          <div
            data-fs7
            className='my-6 h-px w-16 bg-[#C9A96E]/70 sm:my-8'
            aria-hidden='true'
          />

          <p
            data-fs7
            className='text-[13px] leading-[1.8] text-white/85 sm:text-[14px]'
          >
            {t('founderPage.section7.p3')}
          </p>

          <a
            data-fs7
            href='#global-layout'
            className='mt-8 inline-flex items-center gap-2 text-[13px] text-[#C9A96E] underline decoration-[#C9A96E]/50 underline-offset-4 transition-opacity hover:opacity-75 sm:mt-10 sm:text-[14px]'
          >
            {t('founderPage.section7.cta')}
            <span aria-hidden='true'>→</span>
          </a>
        </div>

        {/* 桌面：撑开高度，让右侧地图可见 */}
        <div className='hidden min-h-[420px] flex-1 lg:block xl:min-h-[520px]' />
      </div>
    </section>
  )
}

export default FounderS7
