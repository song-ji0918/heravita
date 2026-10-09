# Founder Brand Narrative Editorial Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Present HeraVita's origin as a name-free brand narrative in a spacious editorial layout.

**Architecture:** Keep the existing `founderStory` translation schema and `FounderPage` component. Replace locale values with neutral narrative copy and tune only the page-level Tailwind classes for hierarchy, measure, spacing, and CTA rhythm.

**Tech Stack:** React, TypeScript, Tailwind CSS, i18next, Node test runner.

## Global Constraints

- Do not change Header, Footer, routes, imagery, or the CTA destination.
- Do not name an individual or use first-/third-person biography language in `founderStory`.
- Preserve four locales and RTL support.
- Keep CTA target size at least 44px and no horizontal overflow at 375px.

---

### Task 1: Lock in neutral founder-story copy

**Files:**
- Modify: `src/i18n/locales/zh.json`
- Modify: `src/i18n/locales/en.json`
- Modify: `src/i18n/locales/es.json`
- Modify: `src/i18n/locales/ar.json`
- Modify: `tests/founder-story.test.mjs`

**Interfaces:**
- Consumes: existing 38-leaf `founderStory` schema.
- Produces: localized neutral narrative values consumed by `FounderPage` unchanged.

- [ ] **Step 1: Write a failing content test**

Add assertions that Chinese `founderStory` serialisation does not contain `尚玉艳`, `她`, `我`, or `我的` and that the hero title retains `HeraVita`.

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`

Expected: FAIL because the old translations include the founder name and third-person pronouns.

- [ ] **Step 3: Replace all four locale values**

Write neutral, name-free brand-history copy for every copy-bearing founder key. Keep generic image alt text, the documented years, and the closing journey CTA.

- [ ] **Step 4: Run the focused test**

Run: `npm test`

Expected: PASS with all translation-schema and neutral-copy assertions succeeding.

### Task 2: Apply the editorial typography system

**Files:**
- Modify: `src/pages/Founder/FounderPage.tsx`

**Interfaces:**
- Consumes: `founderStory` keys without schema changes.
- Produces: responsive semantic page with balanced headings and increased reading rhythm.

- [ ] **Step 1: Add a failing structural test**

Assert `FounderPage.tsx` includes `text-balance`, a 64px desktop hero class, and a `mt-14` closing CTA class.

- [ ] **Step 2: Run the test to verify it fails**

Run: `npm test`

Expected: FAIL because current classes use a 68px hero and `mt-12` CTA gap.

- [ ] **Step 3: Update page-level Tailwind classes**

Use 38/52/64px hero sizing, 32/42/48px chapter sizing, 16/17px body with readable measures, balanced titles, larger desktop vertical padding, and a 56px CTA gap. Preserve all semantic elements and destination links.

- [ ] **Step 4: Run the test and static checks**

Run: `npm test; npm run lint; npm run build; git diff --check`

Expected: all commands exit 0; build may retain the existing chunk-size warning.

### Task 3: Browser acceptance verification

**Files:**
- No source changes required unless verification reveals a defect.

**Interfaces:**
- Consumes: built local dev page at `/founder`.
- Produces: evidence for desktop, mobile, language, and CTA acceptance.

- [ ] **Step 1: Verify desktop Chinese**

Open `/founder` at 1440px. Confirm title is balanced, body stays within readable measure, no personal name is present, and CTA has clear whitespace.

- [ ] **Step 2: Verify mobile Chinese and RTL Arabic**

Open at 375px and switch to Arabic. Confirm no horizontal overflow, readable hierarchy, and a 48px CTA target.

- [ ] **Step 3: Verify CTA and console**

Follow the closing CTA to `/journey` and confirm the browser error log is empty.
