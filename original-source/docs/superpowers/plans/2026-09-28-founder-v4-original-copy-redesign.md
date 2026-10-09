# Founder V4 Original Copy Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Rebuild `/founder` as a source-faithful editorial story using selected original sentences from the V4 founder master document.

**Architecture:** Keep `FounderPage.tsx` translation-driven. Replace its generic `founderStory` object with six original-copy content groups in every locale, then present them as a responsive editorial narrative with existing images and the existing `/journey` CTA route.

**Tech Stack:** React 19, TypeScript, Tailwind CSS 4, react-i18next, React Router 7, Vite.

## Global Constraints

- Chinese story copy comes only from `C:\Users\Administrator\Desktop\HERAVITA\HeraVita_创始人母版_从初心到全球生命重建_V4.0_全景图版.docx`; remove whole source sentences or paragraphs if needed, but do not paraphrase or splice them.
- Do not publish personal medical records, test values, unverified awards, school/project names, or unverified international recognition.
- Preserve navigation, footer, other routes, existing behavior, and unrelated dirty-worktree changes.
- Add no dependencies; use existing `/founder` assets and do not identify a scene image as a founder portrait.
- Support `zh`, `en`, `es`, and `ar`; Arabic remains RTL and all locales contain identical `founderStory` key paths.
- CTA targets `/journey`, is at least 44px high, and has at least 40px visual space above it.

---

### Task 1: Replace founder story translations with V4 source selections

**Files:**
- Modify: `src/i18n/locales/zh.json:306-357`
- Modify: `src/i18n/locales/en.json:269-320`
- Modify: `src/i18n/locales/es.json:289-340`
- Modify: `src/i18n/locales/ar.json:289-340`

**Interfaces:**
- Consumes: `t(key)` from `react-i18next`.
- Produces: matching `founderStory.hero`, `origin`, `practice`, `accumulation`, `timeline`, `today`, and `close` objects for all locales.

- [ ] **Step 1: Write the Chinese source-copy schema**

Use the following V4 source sentences, unchanged, as the Chinese display copy:

```text
HeraVita，不是从一门生意开始，而是从对生命的追问，走向一项面向全球家庭的长期事业。
尚玉艳女士真正走进大健康行业，并不是因为看到了一门生意。最初的原因，来自她自己的家庭。
这反而促使她产生了一个更深的问题：为什么一个长期身处大健康行业、也一直在做健康管理的人，仍然可能面对如此多的健康困扰？
真正的健康管理，应该更早进入一个人的饮食、睡眠、运动、情绪、压力、关系、环境与长期生命状态。
在真正把HeraVita推向更多客户之前，尚玉艳女士与她的家人首先成为这套生命管理理念的早期实践者。
他们从家庭每天最普通的生活开始重新建立健康方式：饮食、作息、运动、情绪与压力管理、定期检测、专业医疗介入，以及更长期、更稳定的生活习惯。
健康不是某一天去医院完成的一件事，而是一个家庭每天共同创造出来的生活方式。
自2006年起，尚玉艳女士持续深耕中国美容、大健康及高净值客户服务领域。长达16年的行业实践中，她长期参与大型健康项目运营、市场体系建设、高净值客户经营以及大型团队管理。
在长期从事大健康、高净值客户经营以及大型团队管理的同时，尚玉艳女士本人在内在成长、情绪疏导、关系改善以及生命状态管理领域，持续学习和实践十余年。
她长期同时走在两条道路上：一条是商业与高净值客户经营；另一条是内在成长与生命实践。
今天的HeraVita，已经不再只是一个海外医疗平台，也不只是一个大健康品牌。它正在把过去近20年积累的商业能力、高净值客户经营、内在生命成长、全球医疗资源、健康长寿与国际生活方式真正整合在一起。
成为全球领先的生命重建与长寿生活方式平台。
HeraVita不是从一门生意出发，而是从对生命的敬畏、对家庭健康的责任，以及对更长久、更丰盛人生的长期探索中生长出来。
```

Add timeline values for `foundation`, `europe`, `upgrade`, `global`, `service` using source statements: `2006—2022  中国大健康16年实战积累`, `2023  欧洲学习｜HeraVita品牌雏形形成`, `2024年8—10月｜赴美学习，完成第二次升级`, `2025  走向全球｜建立国际健康长寿版图`, and `2026  系统服务全球高值会员｜全球生命重建生态逐步形成`.

- [ ] **Step 2: Translate the selected sentences faithfully in the other three locales**

Keep `HeraVita`, dates, and the 16-year statement. Label “成为全球领先的生命重建与长寿生活方式平台。” as `vision`, paired with `visionLabel`, so it cannot be presented as an existing fact. Do not introduce excluded claims.

- [ ] **Step 3: Run locale parsing and key parity validation**

Run:

```powershell
node --input-type=module -e 'import fs from "node:fs"; const ns=["zh","en","es","ar"]; const f=(o,p="")=>Object.entries(o).flatMap(([k,v])=>v&&typeof v==="object"?f(v,`${p}${k}.`):[`${p}${k}`]); const x=Object.fromEntries(ns.map(n=>[n,f(JSON.parse(fs.readFileSync(`src/i18n/locales/${n}.json`,"utf8")).founderStory)])); for(const n of ns){const a=x.zh.filter(k=>!x[n].includes(k));const b=x[n].filter(k=>!x.zh.includes(k));if(a.length||b.length)throw Error(`${n}: ${a} ${b}`);console.log(`${n}: ${x[n].length}`)}'
```

Expected: all four locales report the same key count and exit 0.

- [ ] **Step 4: Commit only the locale update**

```powershell
git add src/i18n/locales/zh.json src/i18n/locales/en.json src/i18n/locales/es.json src/i18n/locales/ar.json
git commit -m "content: use V4 founder source copy"
```

### Task 2: Rebuild the page as a responsive editorial narrative

**Files:**
- Modify: `src/pages/Founder/FounderPage.tsx:1-121`

**Interfaces:**
- Consumes: the `founderStory` schema, `Header`, `Footer`, `Link`, and `/founder` image assets.
- Produces: semantic section IDs `founder-hero-title`, `founder-origin-title`, `founder-practice-title`, `founder-accumulation-title`, `founder-timeline-title`, `founder-today-title`; CTA link to `/journey`.

- [ ] **Step 1: Define the source timeline keys**

```ts
const TIMELINE_ITEMS = ['foundation', 'europe', 'upgrade', 'global', 'service'] as const
```

- [ ] **Step 2: Replace generic sections with the fixed narrative order**

```tsx
<section aria-labelledby='founder-hero-title' />
<section aria-labelledby='founder-origin-title' />
<section aria-labelledby='founder-practice-title' />
<section aria-labelledby='founder-accumulation-title' />
<section aria-labelledby='founder-timeline-title' />
<section aria-labelledby='founder-today-title' />
<section aria-label={t('founderStory.close.cta')} />
```

Use a single `<h1>` in the hero, `<h2>` later, `<blockquote>` for the three quotations, and `<ol>` for the five timeline points. Do not use `dangerouslySetInnerHTML`.

- [ ] **Step 3: Apply the approved layout constraints**

Use `#F3EEE7` as the base, `#E9E4DD` as a section variation, `#253744` only for the timeline, `#292723` for body text, and restrained `#A48361` accents. Long prose uses `max-w-[42rem]`; the two accumulation columns start only at `md`; mobile uses `px-5 sm:px-8 lg:px-14`; all responsive grids retain `min-w-0`. Use `s1_left.jpg`, `s3.jpg`, `s1_right.jpg` with localized alt text and `loading='lazy'` except the hero image.

- [ ] **Step 4: Implement the final CTA**

```tsx
<Link to='/journey' className='mt-12 inline-flex min-h-12 items-center justify-center rounded-full bg-[#2F2F2F] px-10 py-3 text-[15px] text-white transition-colors duration-200 hover:bg-[#4B4844] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#8A7460] active:scale-[0.98]'>
  {t('founderStory.close.cta')}
</Link>
```

- [ ] **Step 5: Build and lint**

```powershell
npm run build
npm run lint
```

Expected: both commands exit 0.

- [ ] **Step 6: Commit only the founder component**

```powershell
git add src/pages/Founder/FounderPage.tsx
git commit -m "feat: redesign founder story page"
```

### Task 3: Verify copy, responsiveness, i18n, and the CTA

**Files:**
- Modify: none unless verification reveals a defect.
- Test: `http://127.0.0.1:3000/founder`.

**Interfaces:**
- Consumes: Tasks 1 and 2.
- Produces: verified source fidelity, correct responsive layout, translated copy, RTL, and CTA navigation.

- [ ] **Step 1: Confirm source-copy markers exist in Chinese**

```powershell
rg -n 'HeraVita，不是从一门生意开始|尚玉艳女士真正走进大健康行业|健康不是某一天去医院完成|她长期同时走在两条道路上|今天的HeraVita，已经不再只是|成为全球领先的生命重建与长寿生活方式平台|HeraVita不是从一门生意出发' src/i18n/locales/zh.json
```

Expected: each selected V4 sentence appears exactly in the locale.

- [ ] **Step 2: Inspect desktop and mobile geometry**

At 1440×900 and 390×844, inspect `/founder` and evaluate:

```js
({ width: innerWidth, scrollWidth: document.documentElement.scrollWidth, cta: document.querySelector('a[href="/journey"]')?.getBoundingClientRect().toJSON() })
```

Expected: `scrollWidth <= width`, CTA height at least 44px, readable titles, no portrait implication for scene images, and visible whitespace above the CTA.

- [ ] **Step 3: Switch through all languages**

Verify `zh`, `en`, `es`, and `ar` show copy rather than `founderStory.*` keys. For Arabic, verify `document.documentElement.dir === 'rtl'` and `scrollWidth <= innerWidth`.

- [ ] **Step 4: Verify the CTA and console**

Click the closing CTA and confirm the route is `/journey`; return to `/founder` and inspect browser error logs. Expected: the route is correct and the error log is empty.

- [ ] **Step 5: Commit a focused follow-up only if a verification fix is necessary**

```powershell
git add src/pages/Founder/FounderPage.tsx src/i18n/locales/zh.json src/i18n/locales/en.json src/i18n/locales/es.json src/i18n/locales/ar.json
git commit -m "fix: polish founder story layout"
```

Expected: omit this commit when verification identifies no defect.
