import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

/**
 * 首页 Section 1
 * - 左图 1071/603，右图 338/603，高度一致
 * - 移动端纵向堆叠
 */
const Section1 = () => {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)
  const mediaRef = useRef<HTMLDivElement>(null)

  useGSAP(
    () => {
      if (!rootRef.current) return

      const text = rootRef.current.querySelectorAll('[data-section1-text]')
      gsap.fromTo(
        text,
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

      const frames = mediaRef.current?.querySelectorAll('[data-section1-frame]')
      const images = mediaRef.current?.querySelectorAll('[data-section1-img]')
      if (!frames?.length || !images?.length) return

      gsap.fromTo(
        frames,
        { autoAlpha: 0, y: 48 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.16,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: mediaRef.current,
            start: 'top 82%',
            once: true
          }
        }
      )

      gsap.fromTo(
        images,
        { scale: 1.12 },
        {
          scale: 1,
          duration: 1.35,
          stagger: 0.16,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mediaRef.current,
            start: 'top 82%',
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
      id='rights'
      className='w-full bg-[#FCFAF7] px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-24'
    >
      <div className='mx-auto w-full max-w-[1440px]'>
        <div className='w-full'>
          <h2
            data-section1-text
            className='text-[24px] leading-snug font-medium tracking-tight text-brand-ink sm:text-[30px] lg:text-[34px]'
          >
            {t('section1.title')}
          </h2>
          <p
            data-section1-text
            className='mt-4 text-[14px] leading-[1.75] text-brand-gray sm:mt-5 sm:text-[15px] lg:text-base'
          >
            {t('section1.desc')}
          </p>
        </div>

        {/* flex 按 1071:338 分配宽度，同高由相同分母 603 保证 */}
        <div
          ref={mediaRef}
          className='mt-8 flex flex-col gap-4 sm:mt-10 sm:gap-5 lg:mt-12 lg:flex-row lg:items-start lg:gap-6'
        >
          <div
            data-section1-frame
            className='group w-full overflow-hidden lg:w-auto lg:min-w-0 lg:flex-[1071]'
          >
            <img
              data-section1-img
              src='/home/3ren@2x.jpg'
              alt={t('section1.leftAlt')}
              className='aspect-[1071/603] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]'
              loading='lazy'
            />
          </div>

          <div
            data-section1-frame
            className='group w-full overflow-hidden lg:w-auto lg:min-w-0 lg:flex-[338]'
          >
            <img
              data-section1-img
              src='/home/tree@2x.jpg'
              alt={t('section1.rightAlt')}
              className='aspect-[338/603] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]'
              loading='lazy'
            />
          </div>
        </div>

        <div data-section1-text className='mt-4 sm:mt-5'>
          <a
            href='/journey'
            className='text-[13px] text-brand-ink underline decoration-brand-ink/40 underline-offset-4 transition-opacity hover:opacity-65'
          >
            {t('section1.learnMore')}
          </a>
        </div>
      </div>
    </section>
  )
}

export default Section1
