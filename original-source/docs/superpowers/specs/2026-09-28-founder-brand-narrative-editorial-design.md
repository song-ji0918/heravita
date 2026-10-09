# Founder Brand Narrative Editorial Design

## Goal

Turn the founder page from a third-person profile into an anonymous brand-origin narrative, with a quieter editorial reading experience.

## Copy

- Remove the founder's name and every first- or third-person reference from `founderStory` in Chinese, English, Spanish, and Arabic.
- Preserve the documented milestones, the long-term health premise, and the stated vision; change only the narrative viewpoint.
- Use a neutral brand/history voice: the story begins with a family health question, develops through daily practice and long-term accumulation, then arrives at HeraVita's global positioning.

## Typography and layout

- Retain the warm neutral palette, dark timeline chapter, three existing imagery assets, semantic heading order, and one closing CTA.
- Use an editorial hierarchy: a responsive 38/52/64px hero, 32/42/48px chapter headings, 16/17px body copy at 1.75-2 line-height, 12-13px letter-spaced chapter labels.
- Limit prose to 42rem and titles to character-based measures; use `text-wrap: balance` to avoid awkward title wrapping.
- Increase desktop section rhythm to 9-11rem and mobile to 4.5-5rem. Use fine rules, sequencing, and whitespace instead of card-like visual density.
- Make the ending quote the only focal CTA: keep at least 56px between quote and 48px-high button.

## Responsive and quality requirements

- No horizontal overflow at 375px, 768px, or 1440px.
- Support all four existing languages, including RTL Arabic.
- Keep localized alt text and visible keyboard focus for the CTA.
- Add regression tests that reject name/pronoun-led Chinese founder copy and verify all locales preserve the existing translation schema.
