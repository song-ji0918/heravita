import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useRef } from 'react'

gsap.registerPlugin(ScrollTrigger)

/**
 * Founder Section2 — 左宽右窄双图（914×515 / 478×515）
 */
const FounderS2 = () => {
  const rootRef = useRef<HTMLElement>(null)

  useGSAP(
    () => {
      if (!rootRef.current) return
      gsap.fromTo(
        rootRef.current.querySelectorAll('[data-fs2]'),
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
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
      className='w-full bg-[#F3EEE7] px-5 pb-10 sm:px-8 sm:pb-12 lg:px-14 lg:pb-16'
    >
      <div className='mx-auto flex w-full max-w-[1440px] flex-col gap-4 sm:gap-5 lg:flex-row lg:gap-6'>
        <div data-fs2 className='min-w-0 flex-[914] overflow-hidden'>
          <img
            src='/founder/s1_left.jpg'
            alt=''
            className='aspect-[914/515] w-full object-cover'
            loading='lazy'
          />
        </div>
        <div data-fs2 className='min-w-0 flex-[478] overflow-hidden'>
          <img
            src='/founder/s1_right.jpg'
            alt=''
            className='aspect-[478/515] w-full object-cover'
            loading='lazy'
          />
        </div>
      </div>
    </section>
  )
}

export default FounderS2
