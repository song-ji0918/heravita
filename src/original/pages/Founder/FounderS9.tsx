import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'
import { useTranslation } from 'react-i18next'

gsap.registerPlugin(ScrollTrigger)

const ROLE_IDS = ['platform', 'research', 'disseminator'] as const

/** 占位图，后续可替换为各自素材 */
// const ROLE_IMAGE = "/founder/s9_1.png";
const ROLE_IMAGE = [
  { id: 's9_1', image: '/founder/s9_1.jpg' },
  { id: 's9_2', image: '/founder/s9_2.jpg' },
  { id: 's9_3', image: '/founder/s9_3.jpg' }
] as const
/**
 * Founder Section9 — THE FUTURE OF HERAVITA（三列身份 464×464）
 */
const FounderS9 = () => {
  const { t } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!rootRef.current) return
      gsap.fromTo(
        rootRef.current.querySelectorAll('[data-fs9]'),
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
      className='w-full bg-[#E6E2DB] px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-24'
    >
      <div className='mx-auto w-full max-w-[1440px]'>
        <div className='mx-auto max-w-[40rem] text-center'>
          <p
            data-fs9
            className='text-[11px] tracking-[0.14em] text-brand-gray uppercase sm:text-[18px]'
          >
            {t('founderPage.section9.eyebrow')}
          </p>
          <h2
            data-fs9
            className='mt-3 text-[22px] leading-[1.35] font-medium tracking-tight text-brand-ink sm:mt-4 sm:text-[28px] lg:text-[32px]'
          >
            {t('founderPage.section9.title')}
          </h2>
          <p
            data-fs9
            className='mt-4 text-[13px] leading-[1.8] text-brand-gray sm:mt-5 sm:text-[14px]'
          >
            {t('founderPage.section9.subtitle')}
          </p>
        </div>

        <div className='mt-10 grid grid-cols-1 gap-8 sm:mt-12 md:grid-cols-3 md:gap-6 lg:mt-14 lg:gap-8'>
          {ROLE_IDS.map(id => (
            <article key={id} data-fs9 className='min-w-0'>
              <div className='overflow-hidden'>
                <img
                  src={ROLE_IMAGE[ROLE_IDS.indexOf(id)].image}
                  alt={t(`founderPage.section9.roles.${id}.title`)}
                  className='aspect-square w-full max-w-[464px] object-cover md:max-w-none'
                  loading='lazy'
                />
              </div>
              <h3 className='mt-5 text-[15px] leading-[1.45] font-medium text-brand-ink sm:mt-6 sm:text-[16px] lg:text-[17px]'>
                {t(`founderPage.section9.roles.${id}.title`)}
              </h3>
              <p className='mt-2.5 text-[13px] leading-[1.75] text-brand-gray sm:mt-3 sm:text-[14px]'>
                {t(`founderPage.section9.roles.${id}.desc`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FounderS9
