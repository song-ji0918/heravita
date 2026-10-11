import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

export const HERO_VIDEO_SRC = '/home/hero.mp4'
export const HERO_VIDEO_AUTOPLAY_MUTED = true

/**
 * 首页 Banner
 * - 全宽视频背景自动播放
 * - 文案叠在视频之上，左侧对齐
 */
const Banner = () => {
  const { t, i18n } = useTranslation()
  const rootRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const ambientVideoRef = useRef<HTMLVideoElement>(null)
  const dialogVideoRef = useRef<HTMLVideoElement>(null)
  const [isVideoDialogOpen, setIsVideoDialogOpen] = useState(false)
  const [isBackgroundMuted, setIsBackgroundMuted] = useState(HERO_VIDEO_AUTOPLAY_MUTED)
  const isChinese = i18n.language.startsWith('zh')
  const bannerFont = 'var(--font-brand-sans)'
  const heroDisplayFont = bannerFont
  const heroTextFont = bannerFont
  const heroCtaFont = bannerFont
  const staggerTitle = isChinese || i18n.language.startsWith('en')

  const toggleBackgroundSound = () => {
    const video = ambientVideoRef.current
    if (!video) return

    const nextMuted = !isBackgroundMuted
    video.muted = nextMuted
    setIsBackgroundMuted(nextMuted)
    void video.play().catch(() => {
      video.muted = true
      setIsBackgroundMuted(true)
      void video.play().catch(() => undefined)
    })
  }

  const openVideoDialog = () => {
    ambientVideoRef.current?.pause()
    setIsVideoDialogOpen(true)
  }

  const closeVideoDialog = () => {
    const video = dialogVideoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
    }
    void ambientVideoRef.current?.play().catch(() => undefined)
    setIsVideoDialogOpen(false)
  }

  useEffect(() => {
    const video = ambientVideoRef.current
    if (!video) return

    video.muted = isBackgroundMuted
    void video.play().catch(() => {
      if (!isBackgroundMuted) {
        video.muted = true
        setIsBackgroundMuted(true)
        void video.play().catch(() => undefined)
      }
    })
  }, [isBackgroundMuted])

  useEffect(() => {
    if (!isVideoDialogOpen) return

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeVideoDialog()
    }

    window.addEventListener('keydown', closeOnEscape)
    const video = dialogVideoRef.current
    if (video) {
      video.muted = false
      void video.play().catch(() => undefined)
    }

    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [isVideoDialogOpen])

  useGSAP(
    () => {
      if (!contentRef.current) return

      const elements = contentRef.current.querySelectorAll('[data-banner-item]')
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

      if (prefersReducedMotion) {
        gsap.set(elements, { autoAlpha: 1, y: 0 })
        return
      }

      gsap.fromTo(
        elements,
        { autoAlpha: 0, y: 18 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: 'power2.out',
          delay: 0.1
        }
      )
    },
    { scope: rootRef }
  )

  return (
    <section
      ref={rootRef}
      id='home'
      data-header-theme='dark'
      className='relative flex min-h-[100svh] w-full items-center overflow-hidden bg-brand-ink'
    >
      {/* 视频背景 */}
      <video
        ref={ambientVideoRef}
        className='absolute inset-0 size-full object-cover'
        poster='/home/hero-poster.jpg'
        autoPlay
        muted={isBackgroundMuted}
        loop
        playsInline
        preload='auto'
        aria-hidden='true'
      >
        <source src={HERO_VIDEO_SRC} type='video/mp4' />
      </video>

      {/* 文字可读性遮罩，保留影像的明暗层次 */}
      <div
        className='absolute inset-0 bg-gradient-to-r from-black/72 via-black/42 to-black/10'
        aria-hidden='true'
      />
      <div
        className='absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/5'
        aria-hidden='true'
      />

      <div
        ref={contentRef}
        className='relative z-10 mx-auto flex w-full max-w-[1440px] translate-y-[21px] justify-start px-6 py-20 sm:px-10 sm:py-24 lg:-translate-y-[11px] lg:px-16 lg:py-28 xl:px-20'
      >
        <div className='flex w-full flex-col items-center text-center text-white' style={{ fontFamily: bannerFont }}>
          <p
            data-banner-item
            className={`text-[13px] leading-[30px] font-medium tracking-[0.12em] text-white sm:text-[17px] ${isChinese ? '' : 'uppercase'}`}
            style={{ fontFamily: heroTextFont }}
          >
            {t('banner.label')}
          </p>

          <h1
            data-banner-item
            className={`mt-6 flex w-full flex-col items-center text-[clamp(1.5rem,5vw,3rem)] leading-[1.16] font-medium tracking-[0.055em] text-white ${isChinese ? '' : 'uppercase'}`}
            style={{ fontFamily: heroDisplayFont }}
          >
            <span className={`block max-w-full text-balance ${staggerTitle ? 'min-[900px]:-translate-x-[15%]' : ''}`}>{t('banner.titleLine1')}</span>
            <span className={`mt-3 block max-w-full text-balance font-medium italic ${staggerTitle ? 'min-[900px]:translate-x-[15%]' : ''}`}>{t('banner.titleLine2')}</span>
          </h1>

          <a
            data-banner-item
            href='/journey'
            className='group mt-4 inline-flex min-h-11 items-center gap-3 text-[15px] leading-[30px] font-normal tracking-[0.03em] text-white/85 transition-transform duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0 sm:text-[17px]'
            style={{ fontFamily: heroCtaFont }}
          >
            <span>{t('banner.cta')}</span>
            <span aria-hidden='true' className='text-[17px] leading-none transition-transform duration-300 group-hover:translate-x-1.5'>
              →
            </span>
          </a>
        </div>
      </div>

      <button
        type='button'
        onClick={openVideoDialog}
        aria-label={t('banner.playFullVideo')}
        className='group absolute right-6 bottom-7 z-20 inline-flex min-h-11 items-center gap-3 whitespace-nowrap text-[13px] font-medium tracking-[0.03em] text-white/90 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:right-10 sm:bottom-9 sm:text-[15px]'
        style={{ fontFamily: heroCtaFont }}
      >
        <span>{t('banner.playFullVideo')}</span>
        <span className='flex size-7 items-center justify-center rounded-full border border-white/65 transition-transform duration-300 group-hover:scale-110' aria-hidden='true'>
          <svg viewBox='0 0 24 24' className='size-3 fill-current'>
            <path d='m9 7 8 5-8 5z' />
          </svg>
        </span>
      </button>

      <button
        type='button'
        onClick={toggleBackgroundSound}
        aria-pressed={!isBackgroundMuted}
        aria-label={isBackgroundMuted ? t('banner.playMusic') : t('banner.pauseMusic')}
        className='group absolute left-6 bottom-7 z-20 flex h-12 w-24 items-center justify-center text-white/90 transition-colors duration-300 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:left-10 sm:bottom-9'
      >
        <svg viewBox='0 0 84 24' className='h-9 w-24 fill-none stroke-current stroke-[1.2]' aria-hidden='true'>
          <path d='M4 4v17M14 4v17' />
          <path d='M50 8v13M58 5v13M65 7v12M72 6v11M80 2v17' />
          {isBackgroundMuted && <path d='M49 21 81 2' />}
        </svg>
      </button>

      {isVideoDialogOpen && (
        <div
          role='dialog'
          aria-modal='true'
          aria-labelledby='hero-video-title'
          onClick={closeVideoDialog}
          className='fixed inset-0 z-[60] grid place-items-center bg-black/70 p-5 backdrop-blur-sm'
        >
          <div className='relative w-full max-w-[780px] overflow-hidden bg-black shadow-[0_22px_80px_rgba(0,0,0,0.55)]' onClick={(event) => event.stopPropagation()}>
            <h2 id='hero-video-title' className='sr-only'>{t('banner.playFullVideo')}</h2>
            <video
              ref={dialogVideoRef}
              className='aspect-video w-full bg-black object-contain'
              poster='/home/hero-poster.jpg'
              controls
              autoPlay
              loop
              playsInline
              preload='auto'
            >
              <source src={HERO_VIDEO_SRC} type='video/mp4' />
            </video>
            <button
              type='button'
              onClick={closeVideoDialog}
              aria-label={t('banner.closeVideo')}
              className='absolute right-3 top-3 flex size-11 items-center justify-center rounded-full bg-black/55 text-white transition-colors hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
            >
              <svg viewBox='0 0 24 24' className='size-5 fill-none stroke-current stroke-[1.5]' aria-hidden='true'>
                <path d='m7 7 10 10M17 7 7 17' />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  )
}

export default Banner
