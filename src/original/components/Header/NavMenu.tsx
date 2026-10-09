import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import { NAV_ITEMS } from './nav'

type NavMenuProps = {
  isOpen: boolean
  onClose: () => void
}

const isAppRoute = (href: string) =>
  href.startsWith('/') && !href.startsWith('/#')

/**
 * 导航菜单
 * - 移动端全屏；桌面端左侧窄栏，点击遮罩关闭
 * - 打开时锁定滚动，Esc / 关闭按钮 / 点击链接后关闭
 */
const NavMenu = ({ isOpen, onClose }: NavMenuProps) => {
  const { t, i18n } = useTranslation()
  const panelRef = useRef<HTMLDivElement>(null)
  const itemsRef = useRef<(HTMLAnchorElement | null)[]>([])
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  const animateItem = (link: HTMLAnchorElement, active: boolean) => {
    const label = link.querySelector<HTMLElement>('[data-nav-label]')
    const line = link.querySelector<HTMLElement>('[data-nav-line]')
    if (!label || !line) return

    const duration = window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 0 : 0.32
    gsap.killTweensOf([label, line])
    gsap.to(label, {
      x: active ? 8 : 0,
      color: active ? '#4e716c' : '#1a1a1a',
      duration,
      ease: 'power3.out'
    })
    gsap.to(line, {
      x: active ? 8 : 0,
      scaleX: active ? 1 : 0,
      opacity: active ? 1 : 0,
      duration,
      ease: 'power3.out'
    })
  }

  useGSAP(
    () => {
      if (!isOpen || !panelRef.current) return

      const items = itemsRef.current.filter(Boolean)
      const tl = gsap.timeline()

      gsap.set(panelRef.current, { autoAlpha: 0 })
      gsap.set(items, { autoAlpha: 0, y: 16 })
      if (closeBtnRef.current) {
        gsap.set(closeBtnRef.current, { autoAlpha: 0 })
      }

      tl.to(panelRef.current, {
        autoAlpha: 1,
        duration: 0.28,
        ease: 'power2.out'
      })

      if (closeBtnRef.current) {
        tl.to(
          closeBtnRef.current,
          { autoAlpha: 1, duration: 0.2, ease: 'power2.out' },
          '-=0.1'
        )
      }

      tl.to(
        items,
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.35,
          stagger: 0.045,
          ease: 'power2.out'
        },
        '-=0.08'
      )
    },
    { dependencies: [isOpen] }
  )

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    closeBtnRef.current?.focus()

    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div ref={panelRef} dir='ltr' className='fixed inset-0 z-[100]'>
      <button
        type='button'
        tabIndex={-1}
        aria-label='Close menu'
        onClick={onClose}
        className='absolute inset-0 hidden cursor-pointer bg-black/30 lg:block'
      />
      <div
        role='dialog'
        aria-modal='true'
        aria-label={t('header.menu')}
        className='absolute inset-y-0 left-0 h-full w-full bg-white lg:w-[22rem] lg:shadow-[8px_0_32px_rgba(0,0,0,0.12)] xl:w-[24rem]'
      >
        <div className='mx-auto flex h-full w-full max-w-[1440px] flex-col px-6 pt-[18px] pb-10 sm:px-10 sm:pt-6 lg:px-8'>
          <button
            ref={closeBtnRef}
            type='button'
            onClick={onClose}
            aria-label='Close menu'
            className='mb-10 flex size-10 shrink-0 items-center justify-start text-brand-ink transition-colors duration-300 hover:text-[#4e716c] cursor-pointer sm:mb-12'
          >
            <svg
              width='18'
              height='18'
              viewBox='0 0 18 18'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path
                d='M1 1L17 17M17 1L1 17'
                stroke='currentColor'
                strokeWidth='1.4'
                strokeLinecap='round'
              />
            </svg>
          </button>

          <nav>
            <ul className='flex flex-col gap-5 sm:gap-6 md:gap-7'>
              {NAV_ITEMS.map((item, index) => {
                const className =
                  'relative block text-left text-[20px] font-light leading-[1.25] tracking-[0.01em] text-brand-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#4e716c] sm:text-[20px] md:text-[22px]'
                const setRef = (el: HTMLAnchorElement | null) => {
                  itemsRef.current[index] = el
                }
                const content = (
                  <>
                    <span data-nav-label dir={i18n.dir()} className='inline-block max-w-full'>
                      {t(`nav.${item.id}`)}
                    </span>
                    <span data-nav-line aria-hidden='true' className='pointer-events-none absolute bottom-[-7px] left-0 block h-px w-12 origin-left scale-x-0 bg-[#4e716c] opacity-0' />
                  </>
                )
                const motionProps = {
                  onMouseEnter: (event: React.MouseEvent<HTMLAnchorElement>) => animateItem(event.currentTarget, true),
                  onMouseLeave: (event: React.MouseEvent<HTMLAnchorElement>) => animateItem(event.currentTarget, false),
                  onFocus: (event: React.FocusEvent<HTMLAnchorElement>) => animateItem(event.currentTarget, true),
                  onBlur: (event: React.FocusEvent<HTMLAnchorElement>) => animateItem(event.currentTarget, false)
                }

                return (
                  <li key={item.id}>
                    {isAppRoute(item.href) ? (
                      <Link
                        ref={setRef}
                        to={item.href}
                        onClick={onClose}
                        className={className}
                        {...motionProps}
                      >
                        {content}
                      </Link>
                    ) : (
                      <a
                        ref={setRef}
                        href={item.href}
                        onClick={onClose}
                        className={className}
                        {...motionProps}
                      >
                        {content}
                      </a>
                    )}
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default NavMenu
