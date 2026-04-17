# UI Guideline — Neubrutalist Design System
**Stack:** Next.js 16 · Tailwind CSS v4 · No component library

> **For AI agents:** When generating components, strictly follow this document. Never invent spacing, colors, shadows, or styles outside this system. Use the reusable components defined here — never re-implement their styles inline. When in doubt, read the actual source files referenced in each section.

---

## 1. Design Style: Neubrutalism

This is a **bold, high-contrast, playful neubrutalist** landing page. It combines thick black borders, hard offset shadows, warm backgrounds, and oversized typography to create a confident, premium feel.

### Core visual traits:
- **Background is warm off-white** (`bg-[#fdfbf7]`) — never pure white for page-level backgrounds. Sections alternate between `bg-white` and `bg-[#fdfbf7]`.
- **All interactive elements have thick black borders** — `border-2 border-gray-900` on cards, buttons, inputs, and decorative elements.
- **Shadows are hard and offset** — custom `shadow-brutal` (6px offset) and `shadow-brutal-sm` (3px offset). These shift on hover/active for a tactile press effect.
- **Typography is oversized and black-weight** — `font-black`, `tracking-tight` / `tracking-tighter`. Headlines use `text-5xl` to `text-8xl`.
- **Buttons are chunky rectangles** (`rounded-2xl`), not pills. Primary uses `bg-gray-900`, accent uses `bg-yellow-300`.
- **Cards use `rounded-3xl`** with `border-2 border-gray-900 shadow-brutal`.
- **Decorative elements are abundant** — blob shapes, floating animations, gradient text, noise textures, mesh gradient backgrounds.
- **The layout breathes** — generous vertical padding (`py-24 md:py-32`) and large gaps between elements.

---

## 2. Color Palette

| Token | Value / Class | Usage |
|---|---|---|
| Page background | `bg-[#fdfbf7]` | Default page and body fill |
| Section white | `bg-white` | Alternating section backgrounds |
| Card surface | `bg-white` | Default card fill |
| Accent Yellow | `bg-yellow-300` / `bg-yellow-400` | Accent button, step badges, decorative blobs |
| Accent Violet | `bg-violet-200` / `bg-violet-300` / `bg-violet-600` | Feature highlights, CTA banner, gradient text |
| Accent Green | `bg-green-200` / `bg-green-300` / `bg-green-400` | Step badges, verified indicators |
| Accent Indigo | `from-violet-600 to-indigo-600` | Gradient text, chart fills |
| Text primary | `text-gray-900` | Headlines, bold labels, borders |
| Text secondary | `text-gray-600` | Body copy, descriptions |
| Text muted | `text-gray-400` / `text-gray-500` | Captions, meta, social proof |
| Text on dark | `text-white` | Text on `bg-gray-900`+ surfaces |
| Star rating | `text-yellow-400` | Star icons in testimonials |
| Footer background | `bg-gray-950` | Footer section |
| Footer text | `text-gray-400` | Footer body and links |
| Footer hover | `hover:text-yellow-400` | Footer link hover state |

**Gradient text** uses the custom `.text-gradient` class (defined in `globals.css`):
```css
.text-gradient {
  background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 50%, #45B7D1 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
```

For section-specific gradient text, use inline Tailwind:
```tsx
<span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-indigo-600">word</span>
```

> ⚠️ The only allowed arbitrary hex value is `#fdfbf7` for the warm off-white background. All other colors must use Tailwind built-in palette.

---

## 3. Spacing

> **Rule:** Always use `gap`, `p-*`, `px-*`, `py-*`. Avoid `margin` except for specific layout tricks (e.g. `-mt-10` for avatar overlap).

| Context | Tailwind classes |
|---|---|
| Section vertical padding | `py-24 md:py-32` |
| Section header bottom margin | `mb-16 md:mb-20` or `mb-20` |
| Card padding (when added via className) | `p-6` to `p-10` (Card has NO built-in padding) |
| Gap between major content blocks | `gap-12` to `gap-24` |
| Gap between cards in grid | `gap-8` |
| Child elements inside card | `gap-4` to `gap-6` |
| Container max width | `max-w-6xl mx-auto px-6 md:px-12` |

> ⚠️ The `<Card>` component has **no built-in padding**. Always pass padding via `className` (e.g. `<Card className="p-8">`).

---

## 4. Typography

**Font:** Lexend — loaded via `next/font/google` in `app/layout.tsx` (NOT via CSS `@import`).

```tsx
// app/layout.tsx
const lexend = Lexend({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
});
```

**Type scale:**

| Role | Tailwind classes |
|---|---|
| Hero Display | `text-5xl md:text-7xl lg:text-8xl font-extrabold leading-[0.95] tracking-tighter text-gray-900` |
| H2 Section | `text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight` |
| H3 Feature | `text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight` |
| Body large | `text-lg md:text-xl text-gray-600 leading-relaxed font-medium` |
| Body | `text-lg text-gray-600 leading-relaxed` |
| Small / Caption | `text-sm font-semibold text-gray-500 uppercase tracking-wider` |
| Eyebrow / Badge label | `text-xs font-bold tracking-widest uppercase` |
| Stat / Big number | `text-4xl font-black text-gray-900` |
| Nav link | `text-sm font-medium text-gray-600 hover:text-gray-900` |
| Button label | `text-base font-bold` (default) |

> ⚠️ Prefer `font-black` (900) for section headings and `font-bold` (700) for card titles. Never use `font-semibold` for headings.

---

## 5. Shadows & Borders

### Custom Brutal Shadows (defined in `globals.css`)

| Class | Effect | Usage |
|---|---|---|
| `shadow-brutal` | `6px 6px 0px` black, shifts on hover/active | Cards, buttons, decorative elements |
| `shadow-brutal-sm` | `3px 3px 0px` black, shifts on hover/active | Navbar CTA button, small elements |

Both include built-in hover (shifts 2px) and active (fully pressed) states via CSS. **Do not add separate hover shadow transitions when using these.**

### Borders

| Context | Tailwind class |
|---|---|
| Card border | `border-2 border-gray-900` |
| Button border (non-ghost) | `border-2 border-gray-900` |
| Input border | `border-2 border-gray-900` |
| Navbar bottom | `border-b-2 border-gray-900` |
| Decorative circles | `border-2 border-gray-900` or `border-4 border-gray-900` |
| Light inner borders (mockups) | `border border-gray-100` or `border border-gray-200` |

> ⚠️ Never use `border border-gray-200` for primary UI elements (cards, buttons, inputs). Those always get `border-2 border-gray-900`.

---

## 6. Border Radius

| Element | Tailwind class |
|---|---|
| Card | `rounded-3xl` |
| Button | `rounded-2xl` (hero CTA may override to `rounded-3xl`) |
| Input | `rounded-3xl` |
| Badge / pill tag | `rounded-full` |
| Feature image container | `rounded-3xl` with `border-2 border-gray-900` |
| Avatar image | `rounded-full` |
| Image inside card | `rounded-2xl` |
| Logo icon | `rounded-lg` |
| CTA banner | `rounded-[3rem]` |
| FAQ item | `rounded-[2rem]` |
| Nav link hover | `rounded-full` |

---

## 7. Reusable Components

Every repeated UI pattern **must use these components**. Never duplicate their class combinations inline.

### `<Container>` — Page-width wrapper
**Source:** `components/ui/Container.tsx`
```tsx
export function Container({ children, className = "" }) {
  return (
    <div className={`max-w-6xl mx-auto px-6 md:px-12 ${className}`}>
      {children}
    </div>
  );
}
```
**Usage:** Wrap all section content. Can narrow with `className="max-w-4xl"`.

---

### `<Button>` — All button variants
**Source:** `components/ui/Button.tsx`

| Variant | Classes | Usage |
|---|---|---|
| `primary` | `bg-gray-900 text-white hover:bg-gray-800` + brutal border/shadow | Main CTAs |
| `secondary` | `bg-white text-gray-900 hover:bg-gray-50` + brutal border/shadow | Secondary actions |
| `ghost` | `bg-transparent text-gray-700 hover:bg-gray-100` — NO border, NO shadow | Nav "Log In" |
| `accent` | `bg-yellow-300 text-gray-900 hover:bg-yellow-400` + brutal border/shadow | High-emphasis CTA |

**Base classes (all variants):**
`inline-flex items-center justify-center min-h-[44px] px-8 py-3 rounded-2xl text-base font-bold cursor-pointer transition-colors duration-200`

Non-ghost variants additionally get: `border-2 border-gray-900 shadow-brutal`

**Rules:**
- Never add `shadow-sm`, `shadow-md`, or `hover:shadow-*` to buttons — `shadow-brutal` handles this.
- Use `shadow-brutal-sm` on navbar buttons via className override.
- The `accent` variant (yellow) is the preferred high-emphasis CTA, not `primary`.

---

### `<Card>` — Content card
**Source:** `components/ui/Card.tsx`
```tsx
export function Card({ children, className = "" }) {
  return (
    <div className={`bg-white border-2 border-gray-900 rounded-3xl shadow-brutal transition-all duration-200 ${className}`}>
      {children}
    </div>
  );
}
```

**Rules:**
- Card has **NO built-in padding**. Always pass padding via className: `<Card className="p-6">`, `<Card className="p-8">`, `<Card className="p-3 overflow-hidden">`.
- Never add `border`, `shadow-sm`, `hover:shadow-md`, or `rounded-2xl` to Card — they conflict with built-in styles.
- For image cards, use `<Card className="p-3 overflow-hidden">` with `rounded-2xl` on the inner image.
- For dark-background card content, override bg: `<Card className="p-6 bg-gray-900">` — avoid this pattern, prefer raw divs for dark panels.

---

### `<Badge>` — Eyebrow labels, pill tags
**Source:** `components/ui/Badge.tsx`

| Variant | Classes |
|---|---|
| `dark` | `bg-gray-900 text-white` |
| `yellow` | `bg-yellow-300 text-gray-900` |
| `green` | `bg-green-200 text-gray-900` |
| `violet` | `bg-violet-200 text-violet-800` |
| `gray` | `bg-gray-100 text-gray-600` |

**Base:** `inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold`

For step badges in the timeline, use raw styled `<span>` elements with `border-2 border-gray-900 shadow-brutal` — Badge does NOT include brutal styling.

---

### `<Input>` — Form input
**Source:** `components/ui/Input.tsx`
```tsx
export function Input({ className = "", ...props }) {
  return (
    <input className={`
      w-full min-h-[44px] px-6 py-4
      bg-white text-gray-900
      border-2 border-gray-900 rounded-3xl
      shadow-brutal
      placeholder:text-gray-400 text-lg
      focus:outline-none focus:ring-0
      transition-all duration-150
      ${className}
    `} {...props} />
  );
}
```

**Rules:**
- Never add focus ring styles — Input uses `focus:ring-0` intentionally.
- Never add `rounded-xl`, `border-gray-300`, or `shadow-sm` — conflicts with built-in neubrutalist styles.
- For dark contexts (footer), override via className: `className="bg-gray-800 border-gray-700 text-white"`.

---

## 8. Custom CSS Utilities

All custom utilities are defined in `app/globals.css`. Use them by class name — never redefine inline.

### Animations
| Class | Effect | Duration |
|---|---|---|
| `animate-float` | Gentle vertical bob + slight rotation | 5s infinite |
| `animate-float-delayed` | Larger bob, opposite rotation, 0.5s delay | 6s infinite |
| `animate-float-slow` | Subtle bob, 1s delay | 7s infinite |
| `animate-fade-up` | Fade in + slide up 24px | 0.7s once |

### Background & Texture
| Class | Effect |
|---|---|
| `bg-mesh-light` | Multi-color radial gradient mesh on `#fdfbf7` base |
| `noise-bg` | Adds subtle SVG noise texture overlay via `::before` pseudo |

### Decorative
| Class | Effect |
|---|---|
| `shadow-brutal` | 6px hard black shadow with hover/active press states |
| `shadow-brutal-sm` | 3px hard black shadow with hover/active press states |
| `text-gradient` | Rainbow gradient text (coral → teal → blue) |
| `blob-shape-1` | Organic border-radius (`40% 60% 70% 30% / 40% 50% 60% 50%`) |
| `blob-shape-2` | Organic border-radius (`60% 40% 30% 70% / 60% 30% 70% 40%`) |
| `text-shadow` | Subtle dark text shadow for headings on colored backgrounds |

> ⚠️ Never redefine these effects inline. Always use the class name.

---

## 9. Page Sections — Structure Reference

The landing page in `app/page.tsx` renders sections in this order:

```
<Navbar />
<HeroSection />
<FeaturesSection />
<HowItWorksSection />
<TestimonialsSection />
<TrackingHighlightSection />
<FaqSection />
<CtaBannerSection />
<Footer />
```

All section components live in `components/landing/`. Each is a server component (no `"use client"`).

### 9.1 Navbar (`Navbar.tsx`)
- Sticky, `bg-[#fdfbf7]/90 backdrop-blur-md`, `border-b-2 border-gray-900`
- Logo: yellow `rounded-lg` icon with link SVG + "BioLinks" wordmark
- Nav links: pill-hover style (`hover:bg-gray-50 rounded-full`)
- CTA: `<Button variant="accent">` with `shadow-brutal-sm` inside offset wrapper

### 9.2 Hero (`HeroSection.tsx`)
- Two-column grid layout (`lg:grid-cols-12`), NOT centered single column
- Left: status pill → oversized headline with `.text-gradient` → body → Input + Button inline → social proof avatars
- Right: phone mockup card (`border-[8px] border-gray-900 shadow-brutal`) + floating stat card + floating product card + decorative blob
- Background: `bg-mesh-light` + `noise-bg` + large blurred color blobs

### 9.3 Features (`FeaturesSection.tsx`)
- Two large alternating feature blocks (left-text/right-image, then reversed), NOT a bento grid
- Each feature: numbered blob icon → H3 → description → bullet list or platform grid
- Images wrapped in `rounded-3xl border-2 border-gray-900 shadow-brutal` containers with browser-chrome mockup headers
- Decorative diagonal line pattern background

### 9.4 How It Works (`HowItWorksSection.tsx`)
- Vertical timeline layout with center line on desktop, NOT 3 colored cards in a row
- 3 steps alternate left/right of center line
- Each step: colored step badge (`shadow-brutal`) + title + description on one side, `<Card>` with image on other
- Center dots: `w-16 h-16 rounded-full border-4 border-gray-900 shadow-brutal` with step colors (yellow/violet/green)

### 9.5 Testimonials (`TestimonialsSection.tsx`)
- Large decorative quote mark background element
- H2 with gradient text + `<Card>` social proof block (avatars + stars + count)
- 3 testimonial cards: raw `<div>` (NOT `<Card>`) with tilt rotation, pastel backgrounds (`bg-yellow-50`, `bg-violet-50`, `bg-green-50`), `border-2 border-gray-900 shadow-brutal`, `hover:-translate-y-4`
- Large quote marks, verified badge on avatars

### 9.6 Tracking Highlight (`TrackingHighlightSection.tsx`)
- Two-column layout: left text + stat cards, right dashboard mockup
- Left: status pill badge → gradient text H2 → description → two `<Card>` stat blocks (100% / <20ms)
- Right: dark dashboard panel with bar chart + floating "302" yellow circle badge + floating code log entry

### 9.7 FAQ (`FaqSection.tsx`)
- Centered single-column layout with `max-w-4xl`, NOT two-column
- Numbered FAQ items using `<details>` / `<summary>`
- Items: `rounded-[2rem]`, expand to `border-gray-900 shadow-brutal`
- Chevron icon in circular button, rotates on open
- Answer text uses `animate-fade-up`

### 9.8 CTA Banner (`CtaBannerSection.tsx`)
- Single centered card: `bg-violet-600 rounded-[3rem]` — NOT yellow
- Internal glow effect + dot pattern overlay
- Large white `font-black` headline with `text-shadow`
- `<Button variant="accent">` with oversized styling + emoji flairs (🔥 💸)
- Subtext: `text-violet-200 uppercase tracking-widest`

### 9.9 Footer (`Footer.tsx`)
- `bg-gray-950` (NOT `bg-gray-900`)
- Logo with yellow square icon + "BioLinks" in white
- Social icons: circles with `hover:bg-violet-600`
- Link columns: `hover:text-yellow-400`
- Giant "BIOLINKS" watermark text with `WebkitTextStroke`
- Copyright bar at bottom

---

## 10. Layout & Responsive Rules

**Breakpoints (Tailwind v4 defaults):**

| Prefix | Min-width |
|---|---|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |

- **Mobile-first always.** Default styles = mobile. Add `md:` / `lg:` for desktop.
- Cards always stack to 1 column on mobile.
- Hero right column is `hidden md:block`.
- Timeline center line is `hidden lg:block`.
- No fixed `height` on cards — use `min-h-*` only when needed.
- `overflow-hidden` on all sections with decorative elements that might escape bounds.
- `relative` + `z-10` on content containers when decorative `absolute` elements are present.

---

## 11. Anti-Patterns — Do NOT Do These

| ❌ Don't | ✅ Do Instead |
|---|---|
| `border border-gray-200` on cards/buttons/inputs | `border-2 border-gray-900` |
| `shadow-sm` / `shadow-md` / `hover:shadow-md` on cards/buttons | `shadow-brutal` or `shadow-brutal-sm` |
| `rounded-full` on buttons | `rounded-2xl` (or `rounded-3xl` for hero CTA) |
| `rounded-2xl` on cards | `rounded-3xl` |
| `rounded-xl` on inputs | `rounded-3xl` |
| `bg-white` for page background | `bg-[#fdfbf7]` |
| `font-semibold` on section headings | `font-black` or `font-extrabold` |
| `text-2xl md:text-4xl` for H2 | `text-4xl md:text-5xl lg:text-6xl` |
| `@import url(...)` for fonts | `next/font/google` in layout.tsx |
| `focus:ring-2 focus:ring-violet-500` on inputs | `focus:outline-none focus:ring-0` |
| Inline `style={{}}` for repeatable effects | Use custom CSS classes from globals.css |
| Duplicate Card/Button class patterns inline | Use `<Card>`, `<Button>`, `<Input>` components |
| Add padding inside Card component source | Pass padding via `className` prop |
| Use `<SectionHeader>` component | Does not exist — compose heading blocks inline |

---

## 12. Icons

Use **inline SVG only** with these defaults:
```tsx
<svg
  width="20" height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2.5"
  strokeLinecap="round"
  strokeLinejoin="round"
>
```

- Checkmark icons use `fill="currentColor"` with a `fillRule` path.
- Emoji characters (🔥, 💸, ✦) are allowed in decorative contexts.
- No icon libraries / icon fonts.

---

## 13. Accessibility & Motion

- All `<button>` and `<a>` must have `cursor-pointer`.
- All images must have descriptive `alt` text.
- FAQ accordion uses native `<details>` / `<summary>` for zero-JS interaction.
- `details summary::marker { display: none; content: ""; }` is set globally.
- `scroll-behavior: smooth` is set on `html`.
- Contrast: `text-white` on `bg-gray-900`+ ✓ · `text-gray-900` on `bg-yellow-300` ✓ · `text-white` on `bg-violet-600` ✓

---

## 14. Code Conventions (Next.js 16)

- **Server Components by default.** Add `"use client"` only for interactivity or hooks.
- Reusable UI primitives: `components/ui/` — `Button`, `Card`, `Badge`, `Container`, `Input`.
- Page-specific sections: `components/landing/` — one file per section.
- Global CSS and custom utilities only in `app/globals.css`.
- Font loading via `next/font/google` in `app/layout.tsx`.
- No inline `style={{}}` except for truly one-off effects (e.g. `WebkitTextStroke`, dynamic bar heights).
- No `@apply` in component files.
- No duplicate markup — if a pattern repeats twice, it becomes a component.

---

## 15. Quick Reference Cheatsheet

```
Font:              Lexend 400–800 via next/font/google
Body background:   bg-[#fdfbf7]  (warm off-white)
Section alt bg:    bg-white
Border (primary):  border-2 border-gray-900
Shadow:            shadow-brutal (6px) · shadow-brutal-sm (3px)
Radius (card):     rounded-3xl
Radius (button):   rounded-2xl
Radius (input):    rounded-3xl
Radius (badge):    rounded-full
Radius (CTA card): rounded-[3rem]
Radius (FAQ item): rounded-[2rem]
Container:         <Container>  →  max-w-6xl mx-auto px-6 md:px-12
Section padding:   py-24 md:py-32
Card:              <Card>  →  bg-white border-2 border-gray-900 rounded-3xl shadow-brutal
Button primary:    bg-gray-900 text-white border-2 border-gray-900 rounded-2xl shadow-brutal
Button accent:     bg-yellow-300 text-gray-900 border-2 border-gray-900 rounded-2xl shadow-brutal
Button ghost:      bg-transparent text-gray-700 — no border, no shadow
Badge:             <Badge variant="dark|yellow|green|violet|gray">
Input:             <Input>  →  border-2 border-gray-900 rounded-3xl shadow-brutal
Gradient text:     .text-gradient  OR  text-transparent bg-clip-text bg-gradient-to-r ...
Float animations:  animate-float · animate-float-delayed · animate-float-slow
Mesh background:   bg-mesh-light  (hero section)
Noise texture:     noise-bg  (hero section)
Blob shapes:       blob-shape-1 · blob-shape-2
Footer:            bg-gray-950 text-gray-400
```