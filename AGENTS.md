# Project Instructions

## Project Context

This repository contains a static iPhone-style mobile app prototype for **Meridian Care: AI Massage**, an AI meridian massage and wellness check-in app.

Primary files:

- `index.html` - app screens, modals, and prototype markup.
- `styles.css` - visual design, iPhone frame, responsive behavior, and animations.
- `script.js` - onboarding, subscription, check-in, language, sharing, and Wellness Journey interactions.
- `assets/` - image and GIF assets.
- `AI经络养护最新版需求PRD.md` - latest Chinese PRD.
- `meridian-care-mvp-site-latest.zip` - latest packaged site bundle.

## General Rules

- Inspect the existing project structure before making changes.
- Reuse existing components, tokens, styles, and patterns whenever possible.
- Do not change business logic unless explicitly requested.
- Keep all implementation production-ready and responsive.
- Avoid unnecessary dependencies.
- Keep changes scoped to the user request.
- Do not rewrite unrelated screens or styles.
- Do not remove user-created changes.
- Use `apply_patch` for manual edits.
- Keep code comments minimal and only where they clarify non-obvious logic.

## Product Direction

The app is designed for Western wellness users. Keep the product simple, warm, clean, and non-medical.

Core experience:

- Apple login.
- AI plan setup.
- Subscription paywall after plan generation.
- One-home structure, no bottom navigation.
- Daily guided meridian massage check-in.
- Natural-week check-in record.
- 100-day Wellness Journey with Wellness Tree milestones.
- Check-in sharing and app sharing.
- Settings with language, subscription, restore purchase, terms, privacy, sign out, and account deletion.

Do not reintroduce:

- Tea check-in.
- Bottom navigation.
- Treatment trend module.
- Health report upload as a live feature.
- Medical diagnosis or treatment claims.

## Design Skills

For any user-facing UI task, landing page, dashboard, mobile web page, marketing page, or visual component:

- Use the `frontend-design` skill before implementation.
- Use `ui-ux-pro-max` for layout hierarchy, usability, interaction, and responsive behavior.
- Review the existing design system before creating new styles.
- Preserve brand consistency across typography, spacing, colors, radii, shadows, and button styles.

For this project specifically:

- Preserve the current iPhone-style app presentation.
- Do not expand the prototype canvas size unless explicitly requested.
- If content does not fit, use internal scrolling inside the relevant screen.
- Keep the interface minimal, warm, and uncluttered.
- Keep copy concise and direct.
- Use Western wellness wording: wellness, self-care, routine, relaxation, progress.

## Visual Standards

- Avoid generic AI-generated SaaS layouts.
- Avoid excessive card grids.
- Avoid default purple gradients unless the existing brand already uses them.
- Avoid excessive use of glassmorphism.
- Avoid oversized rounded cards with weak hierarchy.
- Prefer strong hierarchy, whitespace, editorial composition, and clear visual focus.
- Use illustrations, imagery, icons, and typography intentionally.
- Ensure mobile layouts are designed intentionally rather than simply scaled down.
- Avoid medical claims such as cure, heal, treat, diagnose, or guaranteed health outcomes.

## Interaction Rules

Back behavior:

- Back buttons must return to the previous logical screen.
- Paywall close uses `Close`, not `Back`.

Subscription:

- Login -> plan setup -> AI generation -> paywall if unsubscribed.
- Users may close the paywall and browse the unsubscribed state.
- Unsubscribed users see subscription prompts and empty states, not guided check-in data.

Check-in:

- Clicking `Check In` enters the massage guide.
- The home card area should be replaced by the guide during routine mode.
- Each massage step starts with a 3-second preparation countdown.
- The timer can pause and resume.
- Completing check-in updates the home state and weekly record.

Wellness Journey:

- Journey length is 100 days.
- Milestones: Day 1, Day 3, Day 7, Day 15, Day 30, Day 60, Day 100.
- Locked future milestones show question marks.
- Day 100 shows Journey Complete, Tree of Life badge, and Plant a New Tree.

Sharing:

- Check-in sharing appears after milestone completion.
- App sharing lives in the profile/settings surface.
- `More` opens the iPhone-style system share sheet.

## Language

The prototype supports English and Chinese.

- Default language is English.
- Chinese should be natural product Chinese, not literal machine translation.
- When adding new UI text, update language behavior in `script.js` if needed.
- Ensure subscription, settings, sharing, milestone, check-in, and empty-state copy all remain translatable.

## Delivery Requirements

Before coding:

1. Identify current visual and UX issues.
2. Propose a concise visual direction.
3. List the components to change.

After coding:

1. Check desktop and mobile layouts.
2. Check empty, loading, disabled, hover, and error states where relevant.
3. Verify visual consistency with the existing project.
4. Verify that changes do not break the one-home app structure.
5. Verify that unsubscribed and subscribed states still behave correctly.

## Validation

After editing JavaScript, run:

```bash
node --check script.js
```

After meaningful changes, update the site package:

```bash
zip -r meridian-care-mvp-site-latest.zip index.html styles.css script.js assets AI经络养护最新版需求PRD.md 经络按摩MVP中文需求PRD.md AGENTS.md
```

If validating visually, use the local app URL or file URL currently open in the in-app browser.

## Documentation

- Keep `AI经络养护最新版需求PRD.md` aligned with major product changes.
- If the user asks for a PRD, output Chinese unless they explicitly request English.
- Keep ASO, analytics/event tracking, subscription, sharing, and Wellness Journey requirements current.

