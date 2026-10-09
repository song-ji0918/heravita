import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'

const TIMELINE_ITEMS = ['foundation', 'europe', 'upgrade', 'global', 'service'] as const

const FounderPage = () => {
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='flex min-h-screen flex-col bg-[#F3EEE7] text-[#292723]'>
      <Header backgroundColor='#F3EEE7' />

      <main className='flex-1'>
        <section aria-labelledby='founder-hero-title' className='px-5 py-16 sm:px-8 sm:py-24 lg:px-14 lg:py-36'>
          <div className='mx-auto grid w-full max-w-[1280px] items-end gap-10 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-20'>
            <div className='min-w-0 max-w-[42rem] pb-1'>
              <p className='text-[12px] tracking-[0.16em] text-[#6D6258] sm:text-[13px]'>{t('founderStory.hero.eyebrow')}</p>
              <h1 id='founder-hero-title' className='mt-5 max-w-[20ch] text-balance text-[38px] leading-[1.12] font-medium tracking-[-0.045em] text-[#292723] sm:text-[52px] lg:text-[64px]'>
                {t('founderStory.hero.title')}
              </h1>
              <p className='mt-10 border-t border-[#292723]/20 pt-5 text-[14px] tracking-[0.04em] text-[#6D6258] sm:mt-12 sm:text-[15px]'>{t('founderStory.hero.signature')}</p>
            </div>
            <div className='min-w-0 overflow-hidden bg-[#D9D0C5]'>
              <img src='/founder/s1_left.jpg' alt={t('founderStory.hero.imageAlt')} className='aspect-[4/3] w-full object-cover object-center lg:aspect-[6/5]' />
            </div>
          </div>
        </section>

        <section aria-labelledby='founder-origin-title' className='bg-[#E9E4DD] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-40'>
          <div className='mx-auto grid w-full max-w-[1120px] gap-10 lg:grid-cols-[10rem_minmax(0,1fr)] lg:gap-16'>
            <p className='text-[12px] tracking-[0.14em] text-[#6D6258] sm:pt-2 sm:text-[13px]'>{t('founderStory.origin.eyebrow')}</p>
            <div className='min-w-0 max-w-[42rem]'>
              <h2 id='founder-origin-title' className='max-w-[18ch] text-balance text-[32px] leading-[1.2] font-medium tracking-[-0.035em] sm:text-[42px] lg:text-[48px]'>{t('founderStory.origin.title')}</h2>
              <div className='mt-10 max-w-[40rem] space-y-7 text-[16px] leading-[1.9] text-[#4B4844] sm:mt-12 sm:text-[17px]'>
                <p>{t('founderStory.origin.p1')}</p>
                <p>{t('founderStory.origin.p2')}</p>
                <p>{t('founderStory.origin.p3')}</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby='founder-practice-title' className='px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-40'>
          <div className='mx-auto grid w-full max-w-[1280px] items-center gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.85fr)] lg:gap-20'>
            <div className='min-w-0 order-2 lg:order-1'>
              <p className='text-[12px] tracking-[0.14em] text-[#6D6258] sm:text-[13px]'>{t('founderStory.practice.eyebrow')}</p>
              <h2 id='founder-practice-title' className='mt-5 max-w-[19ch] text-balance text-[32px] leading-[1.2] font-medium tracking-[-0.035em] sm:text-[42px] lg:text-[48px]'>{t('founderStory.practice.title')}</h2>
              <div className='mt-10 max-w-[40rem] space-y-6 text-[16px] leading-[1.9] text-[#4B4844] sm:mt-12 sm:text-[17px]'>
                <p>{t('founderStory.practice.p1')}</p>
                <p>{t('founderStory.practice.p2')}</p>
              </div>
              <blockquote className='mt-10 max-w-[35rem] border-s-2 border-[#A48361] ps-6 text-[22px] leading-[1.65] tracking-[-0.02em] text-[#292723] sm:mt-12 sm:ps-8 sm:text-[26px]'>
                {t('founderStory.practice.quote')}
              </blockquote>
            </div>
            <div className='order-1 min-w-0 overflow-hidden bg-[#D9D0C5] lg:order-2'>
              <img src='/founder/s3.jpg' alt={t('founderStory.practice.imageAlt')} loading='lazy' className='aspect-[4/3] w-full object-cover object-center' />
            </div>
          </div>
        </section>

        <section aria-labelledby='founder-accumulation-title' className='bg-[#E9E4DD] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-40'>
          <div className='mx-auto w-full max-w-[1280px]'>
            <p className='text-[12px] tracking-[0.14em] text-[#6D6258] sm:text-[13px]'>{t('founderStory.accumulation.eyebrow')}</p>
            <h2 id='founder-accumulation-title' className='mt-5 max-w-[22ch] text-balance text-[32px] leading-[1.2] font-medium tracking-[-0.035em] sm:text-[42px] lg:text-[48px]'>{t('founderStory.accumulation.title')}</h2>
            <div className='mt-12 grid gap-10 md:grid-cols-2 md:gap-14 lg:mt-16 lg:gap-20'>
              <article className='min-w-0 border-t border-[#292723]/25 pt-6 sm:pt-7'>
                <p className='text-[13px] tracking-[0.12em] text-[#A48361]'>01</p>
                <h3 className='mt-4 max-w-[22ch] text-[24px] leading-[1.35] font-medium tracking-[-0.025em] sm:text-[28px]'>{t('founderStory.accumulation.industryTitle')}</h3>
                <p className='mt-5 max-w-[39rem] text-[16px] leading-[1.95] text-[#4B4844] sm:text-[17px]'>{t('founderStory.accumulation.industry')}</p>
              </article>
              <article className='min-w-0 border-t border-[#292723]/25 pt-6 sm:pt-7'>
                <p className='text-[13px] tracking-[0.12em] text-[#A48361]'>02</p>
                <h3 className='mt-4 max-w-[22ch] text-[24px] leading-[1.35] font-medium tracking-[-0.025em] sm:text-[28px]'>{t('founderStory.accumulation.lifeTitle')}</h3>
                <p className='mt-5 max-w-[39rem] text-[16px] leading-[1.95] text-[#4B4844] sm:text-[17px]'>{t('founderStory.accumulation.life')}</p>
              </article>
            </div>
            <blockquote className='mt-12 max-w-[58rem] border-s-2 border-[#A48361] ps-6 text-[23px] leading-[1.65] tracking-[-0.02em] text-[#292723] sm:mt-16 sm:ps-8 sm:text-[28px]'>
              {t('founderStory.accumulation.quote')}
            </blockquote>
          </div>
        </section>

        <section aria-labelledby='founder-timeline-title' className='bg-[#253744] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-14 lg:py-40'>
          <div className='mx-auto grid w-full max-w-[1280px] gap-12 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1fr)] lg:gap-24'>
            <div className='min-w-0'>
              <p className='text-[12px] tracking-[0.14em] text-white/65 sm:text-[13px]'>{t('founderStory.timeline.eyebrow')}</p>
              <h2 id='founder-timeline-title' className='mt-5 max-w-[15ch] text-balance text-[32px] leading-[1.2] font-medium tracking-[-0.035em] sm:text-[42px] lg:text-[48px]'>{t('founderStory.timeline.title')}</h2>
            </div>
            <ol className='border-t border-white/20'>
              {TIMELINE_ITEMS.map((item, index) => (
                <li key={item} className='grid gap-4 border-b border-white/20 py-7 sm:grid-cols-[3rem_minmax(0,1fr)] sm:gap-7 sm:py-8'>
                  <span className='text-[13px] tracking-[0.1em] text-[#E1C6A5]'>{String(index + 1).padStart(2, '0')}</span>
                  <p className='max-w-[42rem] text-[17px] leading-[1.75] text-white sm:text-[20px]'>{t(`founderStory.timeline.items.${item}`)}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby='founder-today-title' className='px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-40'>
          <div className='mx-auto grid w-full max-w-[1280px] items-center gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-20'>
            <div className='min-w-0 overflow-hidden bg-[#D9D0C5]'>
              <img src='/founder/s1_right.jpg' alt={t('founderStory.today.imageAlt')} loading='lazy' className='aspect-[4/3] w-full object-cover object-center' />
            </div>
            <div className='min-w-0 max-w-[42rem]'>
              <p className='text-[12px] tracking-[0.14em] text-[#6D6258] sm:text-[13px]'>{t('founderStory.today.eyebrow')}</p>
              <h2 id='founder-today-title' className='mt-5 max-w-[18ch] text-balance text-[32px] leading-[1.2] font-medium tracking-[-0.035em] sm:text-[42px] lg:text-[48px]'>{t('founderStory.today.title')}</h2>
              <p className='mt-10 max-w-[40rem] text-[16px] leading-[1.9] text-[#4B4844] sm:mt-12 sm:text-[17px]'>{t('founderStory.today.p1')}</p>
              <div className='mt-10 border-t border-[#292723]/25 pt-6 sm:mt-12'>
                <p className='text-[12px] tracking-[0.14em] text-[#A48361] sm:text-[13px]'>{t('founderStory.today.visionLabel')}</p>
                <p className='mt-3 text-[23px] leading-[1.5] font-medium tracking-[-0.025em] sm:text-[28px]'>{t('founderStory.today.vision')}</p>
              </div>
            </div>
          </div>
        </section>

        <section aria-label={t('founderStory.close.cta')} className='bg-[#E9E4DD] px-5 py-20 sm:px-8 sm:py-28 lg:px-14 lg:py-36'>
          <div className='mx-auto max-w-[58rem] text-center'>
            <blockquote className='text-balance text-[30px] leading-[1.35] font-medium tracking-[-0.04em] text-[#292723] sm:text-[42px] lg:text-[48px]'>
              {t('founderStory.close.quote')}
            </blockquote>
            <Link to='/journey' className='mt-14 inline-flex min-h-12 items-center justify-center rounded-full bg-[#2F2F2F] px-10 py-3 text-[15px] text-white transition-colors duration-200 hover:bg-[#4B4844] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A7460] active:scale-[0.98]'>
              {t('founderStory.close.cta')}
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default FounderPage
