# Home Hero Language Consistency Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Make every text item in the home-page Hero use the currently selected language.

**Architecture:** The `Banner` component already reads five values from the `banner` translation namespace. Keep the component and language-switching behavior unchanged; correct the locale values only, so all four supported locales render a consistent Hero without changing any other page.

**Tech Stack:** React, TypeScript, react-i18next, Vite, JSON locale files.

## Global Constraints

- Change only `banner.subtitle` in the four locale files; do not modify routes, components, styling, navigation, or non-home-page copy.
- Each subtitle must be written in its locale: Chinese (`zh`), English (`en`), Spanish (`es`), and Arabic (`ar`).
- Preserve the existing approved banner title, description, and CTA button copy.

---

### Task 1: Localize the home Hero subtitle

**Files:**
- Modify: `src/i18n/locales/zh.json` (`banner.subtitle`)
- Modify: `src/i18n/locales/en.json` (`banner.subtitle`)
- Modify: `src/i18n/locales/es.json` (`banner.subtitle`)
- Modify: `src/i18n/locales/ar.json` (`banner.subtitle`)
- Test: inline Node locale assertion executed from the repository root

**Interfaces:**
- Consumes: `Banner.tsx` calls `t('banner.subtitle')` from the active react-i18next locale.
- Produces: four locale-specific string values for `banner.subtitle`.

- [ ] **Step 1: Write and run a failing locale check**

Run:

```powershell
node --input-type=module -e "import fs from 'node:fs'; const expected={zh:/^[\p{Script=Han}，。]+$/u,en:/^[A-Za-z .]+$/,es:/^[A-Za-záéíóúüñÁÉÍÓÚÜÑ,. ]+$/,ar:/^[\p{Script=Arabic}،.\s]+$/u}; for(const [locale,pattern] of Object.entries(expected)){const value=JSON.parse(fs.readFileSync('src/i18n/locales/'+locale+'.json','utf8')).banner.subtitle;if(!pattern.test(value)) throw new Error(locale+': '+value)}"
```

Expected: FAIL because all subtitle values currently include a different language.

- [ ] **Step 2: Replace only the four subtitle values**

Use these literal values:

```json
{
  "zh": "重新定义健康，共同塑造健康文明",
  "en": "Redefine Health. Shaping a New Civilization",
  "es": "Redefinir la salud. Dar forma a una nueva civilización.",
  "ar": "إعادة تعريف الصحة، وصناعة حضارة صحية جديدة."
}
```

- [ ] **Step 3: Re-run the locale check**

Run the Step 1 command again.

Expected: exit code 0.

- [ ] **Step 4: Build the production bundle**

Run:

```powershell
npm run build
```

Expected: `✓ built` and exit code 0; the existing chunk-size advisory may remain.

- [ ] **Step 5: Inspect the narrow diff**

Run:

```powershell
git diff -- src/i18n/locales/zh.json src/i18n/locales/en.json src/i18n/locales/es.json src/i18n/locales/ar.json
```

Expected: four `banner.subtitle` replacements only.
