import assert from 'node:assert/strict'
import fs from 'node:fs'
import path from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const readLocale = (locale) => JSON.parse(fs.readFileSync(path.join(root, 'src', 'i18n', 'locales', `${locale}.json`), 'utf8'))

test('home hero carries the same soft narrative in every supported language', () => {
  const expected = {
    zh: {
      title: '让生命回归秩序，让人生重新绽放。',
      titleLine1: '让生命回归秩序，',
      titleLine2: '让人生重新绽放。',
      cta: '开启生命发现',
    },
    en: {
      title: 'Restore Order to Life, Let Life Flourish Again.',
      titleLine1: 'Restore Order to Life,',
      titleLine2: 'Let Life Flourish Again.',
      cta: 'Begin Your Discovery',
    },
    es: {
      title: 'Deja que la vida recupere su orden y vuelva a florecer.',
      titleLine1: 'Deja que la vida recupere su orden',
      titleLine2: 'y vuelva a florecer.',
      cta: 'Comienza tu descubrimiento',
    },
    ar: {
      title: 'دع الحياة تستعيد توازنها، ودعها تزدهر من جديد.',
      titleLine1: 'دع الحياة تستعيد توازنها،',
      titleLine2: 'ودعها تزدهر من جديد.',
      cta: 'ابدأ رحلة اكتشافك',
    },
  }

  for (const [locale, expectedBanner] of Object.entries(expected)) {
    const banner = readLocale(locale).banner
    for (const [key, value] of Object.entries(expectedBanner)) {
      assert.equal(banner[key], value, `${locale} banner.${key}`)
    }
    assert.equal(banner.subtitle, banner.title, `${locale} keeps its unused subtitle in sync`)
  }
})

test('home hero preserves a clear semantic hierarchy and reduces motion on request', () => {
  const source = fs.readFileSync(path.join(root, 'src', 'components', 'Banner', 'Banner.tsx'), 'utf8')
  const globalStyles = fs.readFileSync(path.join(root, 'src', 'index.css'), 'utf8')

  assert.match(source, /const isChinese = i18n\.language\.startsWith\('zh'\)/)
  assert.match(source, /t\('banner\.label'\)/)
  assert.match(source, /t\('banner\.titleLine1'\)/)
  assert.match(source, /t\('banner\.titleLine2'\)/)
  assert.match(source, /flex w-full flex-col items-center/)
  assert.match(source, /text-\[clamp\(1\.5rem,5vw,3rem\)\]/)
  assert.match(source, /font-medium tracking-\[0\.055em\]/)
  assert.match(source, /italic/)
  assert.match(source, /group mt-4 inline-flex/)
  assert.match(source, /text-white\/85/)
  assert.match(source, /isChinese \? '' : 'uppercase'/)
  assert.match(source, /var\(--font-hero-display\)/)
  assert.match(source, /var\(--font-hero-text\)/)
  assert.match(source, /fontFamily: bannerFont/)
  assert.match(globalStyles, /--font-brand-sans/)
  assert.match(globalStyles, /--font-display-latin/)
  assert.match(globalStyles, /"Helvetica Neue", "Helvetica", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Noto Sans CJK SC", Arial, sans-serif/)
  assert.match(globalStyles, /family=Red\+Hat\+Display/)
  assert.match(globalStyles, /family=Red\+Hat\+Text/)
  assert.doesNotMatch(source, /t\('banner\.desc'\)/)
  assert.match(source, /prefers-reduced-motion: reduce/)
  assert.match(source, /focus-visible:outline/)
  assert.doesNotMatch(source, /border-b border-white\/55/)
})

test('home navigation mirrors the reference transparent scroll-direction behavior', () => {
  const homeSource = fs.readFileSync(path.join(root, 'src', 'pages', 'Home', 'HomePage.tsx'), 'utf8')
  const headerSource = fs.readFileSync(path.join(root, 'src', 'components', 'Header', 'Header.tsx'), 'utf8')
  const bannerSource = fs.readFileSync(path.join(root, 'src', 'components', 'Banner', 'Banner.tsx'), 'utf8')
  const narrativeSource = fs.readFileSync(path.join(root, 'src', 'components', 'HomeNarrative', 'HomeNarrative.tsx'), 'utf8')

  assert.match(homeSource, /<Header overlay \/>/)
  assert.match(headerSource, /useGSAP/)
  assert.match(headerSource, /ScrollTrigger\.create/)
  assert.match(headerSource, /scrollY > 24/)
  assert.match(headerSource, /self\.direction < 0/)
  assert.match(headerSource, /autoAlpha/)
  assert.match(headerSource, /visibleStateRef/)
  assert.doesNotMatch(headerSource, /yPercent/)
  assert.match(headerSource, /fixed top-0/)
  assert.match(headerSource, /h-\[104px\].+md:h-\[128px\]/)
  assert.match(headerSource, /isAtPageTop \? "bg-transparent backdrop-blur-none"/)
  assert.match(headerSource, /bg-black\/\[0\.08\]/)
  assert.match(headerSource, /bg-white\/\[0\.14\]/)
  assert.doesNotMatch(headerSource, /border-b(?:\s|\")/)
  assert.doesNotMatch(headerSource, /bg-white text-brand-ink/)
  assert.match(headerSource, /visible \? 0\.8 : 1\.3/)
  assert.match(headerSource, /LanguageDropdown inverted=\{useLightControls\} prominent=\{overlay\}/)
  assert.match(headerSource, /elementsFromPoint/)
  assert.match(headerSource, /dataset\.headerTheme/)
  assert.match(headerSource, /headerTheme === "dark"/)
  assert.match(bannerSource, /data-header-theme='dark'/)
  assert.match(narrativeSource, /id='belief'[^>]+data-header-theme='light'/)
  assert.match(narrativeSource, /id='method'[^>]+data-header-theme='dark'/)
  assert.match(headerSource, /h-12 w-auto object-contain max-\[399px\]:h-9 sm:h-14 lg:h-16/)
  assert.match(headerSource, /src="\/brand\/heravita-logo-white@2x\.png"/)
  assert.match(headerSource, />\s*HERA VITA\s*</)
  assert.match(headerSource, />\s*HEALTH GROUP\s*</)
  assert.match(headerSource, /items-center text-center/)
  assert.doesNotMatch(headerSource, /src="\/logo@2x\.png"/)
  assert.match(headerSource, /brightness-0/)
})

test('home hero opens the local video in an accessible playback dialog', () => {
  const source = fs.readFileSync(path.join(root, 'src', 'components', 'Banner', 'Banner.tsx'), 'utf8')

  assert.equal(fs.existsSync(path.join(root, 'public', 'home', 'hero.mp4')), true)
  assert.match(source, /const dialogVideoRef = useRef<HTMLVideoElement>\(null\)/)
  assert.match(source, /const \[isVideoDialogOpen, setIsVideoDialogOpen\] = useState\(false\)/)
  assert.match(source, /src='\/home\/hero\.mp4'/)
  assert.match(source, /muted/)
  assert.match(source, /onClick=\{openVideoDialog\}/)
  assert.match(source, /t\('banner\.playFullVideo'\)/)
  assert.match(source, /role='dialog'/)
  assert.match(source, /aria-modal='true'/)
  assert.match(source, /ref=\{dialogVideoRef\}/)
  assert.match(source, /controls/)
  assert.match(source, /onClick=\{closeVideoDialog\}/)
  assert.match(source, /const ambientVideoRef = useRef<HTMLVideoElement>\(null\)/)
  assert.match(source, /const \[isBackgroundMuted, setIsBackgroundMuted\] = useState\(false\)/)
  assert.match(source, /onClick=\{toggleBackgroundSound\}/)
  assert.match(source, /aria-pressed=\{!isBackgroundMuted\}/)
  assert.match(source, /left-6.*bottom-7/)
  assert.match(source, /right-6.*bottom-7/)
})
