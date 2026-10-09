import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

import { CONTACT_IMAGE } from './assets'

gsap.registerPlugin(ScrollTrigger)

type ContactField = {
  label: string
  value: string
}

/** Contact Section1 — 标题 + 左文右图 */
const ContactS1 = () => {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)
  const fields = t('contactPage.fields', {
    returnObjects: true
  }) as ContactField[]
  useGSAP(
    () => {
      if (!rootRef.current) return
      gsap.fromTo(
        rootRef.current.querySelectorAll('[data-cs1]'),
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
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
      <div className='mx-auto w-full max-w-[1440px]'>
        <h1
          data-cs1
          className='text-center text-[22px] tracking-tight text-brand-ink sm:text-[26px] lg:text-[30px]'
        >
          {t('contactPage.eyebrow')}
        </h1>

        <div className='mt-12 flex flex-col gap-10 lg:mt-16 lg:flex-row lg:items-stretch lg:gap-12 xl:gap-16'>
          <div className='min-w-0 flex-1 lg:max-w-[32rem] lg:pt-1'>
            <h2
              data-cs1
              className='text-[22px] leading-snug tracking-tight text-[#2f2f2f] sm:text-[26px] lg:text-[28px]'
            >
              {t('contactPage.title')}
            </h2>
            <p
              data-cs1
              className='mt-4 text-[13px] leading-[1.75] text-[#2f2f2f]/85 sm:mt-5 sm:text-[14px]'
            >
              {t('contactPage.desc')}
            </p>

            <ul
              data-cs1
              className='mt-5 space-y-1 text-[13px] leading-[1.7] text-[#2f2f2f] sm:mt-6 sm:text-[14px]'
            >
              {fields.map(field => (
                <li key={field.label}>
                  {field.label}：{field.value}
                </li>
              ))}
            </ul>

            <a
              data-cs1
              href={`#`}
              className='mt-6 inline-flex min-h-11 items-center justify-center rounded-full bg-[#2F2F2F] px-10 text-[13px] text-white transition-opacity hover:opacity-85 sm:mt-7 sm:px-12'
            >
              {t('contactPage.cta')}
            </a>
          </div>

          <div
            data-cs1
            className='min-w-0 w-full overflow-hidden lg:flex-1'
          >
            <img
              src={CONTACT_IMAGE}
              alt=''
              className='aspect-[16/9] w-full object-cover lg:aspect-auto lg:h-full lg:min-h-full'
              loading='eager'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactS1
