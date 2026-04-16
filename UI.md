# UI Guideline — Soft Modern SaaS Design System
**Stack:** Next.js · Tailwind CSS v4 · No component library

> **For AI agents:** When generating components, strictly follow this document. Never invent spacing, colors, or styles outside this system. All design decisions must map to Tailwind v4 built-in utility classes. Avoid arbitrary values `[]` unless explicitly listed as exceptions in this doc.

---

## 1. Design Style: Soft Modern SaaS

This is a **clean, friendly, and conversion-focused SaaS landing page** style. It is white-dominant, heavily rounded, and uses soft shadows and pastel accent fills to create a polished yet approachable feel.

### Core visual traits:
- **Background is pure white** (`bg-white`) for the page and most sections. Some sections use a very light off-white or gray tint (`bg-gray-50`) to create visual separation.
- **All cards and containers have large rounded corners** — `rounded-2xl` or `rounded-3xl` everywhere. Nothing is sharp or squared.
- **Shadows are soft and blurred** — Tailwind's `shadow-sm` and `shadow-md`. Used to float cards gently off the background.
- **Borders are thin and light** — `border border-gray-200`. Barely visible, used only to define card edges.
- **Accent sections use pastel-filled cards** — lavender/violet, yellow, green, and occasionally dark (near-black) cards to create visual variety within a section grid.
- **Typography is large, bold, and centered** in hero and section headers. Supporting text is gray and smaller.
- **Buttons are pill-shaped** (`rounded-full`). The primary button uses a solid dark color (`bg-gray-900`). The secondary button is white with a light gray border.
- **Section eyebrows** (small labels above headings) are small pill badges in a pastel or dark color with a short label and sometimes a small icon or emoji prefix (e.g. "✦ AI Integration").
- **Images inside cards** are real product screenshots or photos, clipped with `rounded-xl` corners.
- **The overall layout breathes** — generous vertical padding between sections and generous internal card padding.

---

## 2. Color Palette

Use **Tailwind built-in color palette only**. No custom hex values.

| Token | Tailwind class | Usage |
|---|---|---|
| Page background | `bg-white` | Default page and section fill |
| Section tint | `bg-gray-50` | Subtle alternate section background |
| Card surface | `bg-white` | Default card fill |
| Accent Lavender card | `bg-violet-200` | Step 1 card background, feature highlight fills |
| Accent Yellow card | `bg-yellow-300` | Step 2 card background, CTA banner background |
| Accent Green card | `bg-green-200` | Step 3 card background |
| Accent Dark card | `bg-gray-900` | Dark feature callout card (stat/highlight) |
| Card border | `border-gray-200` | Thin subtle card border |
| Text primary | `text-gray-900` | All headlines and bold labels |
| Text secondary | `text-gray-500` | Body copy, descriptions |
| Text muted | `text-gray-400` | Captions, meta, footer links |
| Text on dark card | `text-white` | Text inside `bg-gray-900` cards or footer |
| Text on yellow | `text-gray-900` | Text inside yellow cards/banners |
| Text on lavender | `text-gray-900` | Text inside violet/lavender cards |
| Star rating | `text-yellow-400` | Star icons in testimonials |
| Footer background | `bg-gray-900` | Footer section |
| Footer text | `text-gray-400` | Footer links and body |

> ⚠️ Never use `bg-[#...]`, `text-[#...]`, or any arbitrary color values. Always pick the closest Tailwind built-in shade.

---

## 3. Spacing — 8px Grid (Strict)

> **Rule:** Always use `gap`, `p-*`, `px-*`, `py-*`. Avoid `margin` to prevent collapsing margin issues.

| Context | Tailwind classes |
|---|---|
| Section vertical padding | `py-16 md:py-24` |
| Gap between sections | `space-y-24` |
| Card padding (default) | `p-6 md:p-8` |
| Card padding (large feature/step) | `p-8 md:p-10` |
| Gap between cards in grid | `gap-4 md:gap-6` |
| Child elements inside card | `gap-3` or `gap-4` |
| Container max width | `max-w-6xl mx-auto px-6 md:px-12` |

**Container component — always use, never repeat inline:**
```tsx
// components/ui/Container.tsx
export function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`max-w-6xl mx-auto px-6 md:px-12 ${className}`}>
      {children}
    </div>
  );
}

// Usage
<section className="py-16 md:py-24">
  <Container>
    {/* content */}
  </Container>
</section>
```

> ⚠️ Never add padding directly on `<section>` tags. Always wrap content in `<Container>`.

---

## 4. Typography

**Google Fonts:**
- All text: **Lexend** (400, 500, 600, 700, 800) — clean, rounded, highly legible, full Vietnamese support ✓

```css
/* app/globals.css */
@import url('https://fonts.googleapis.com/css2?family=Lexend:wght@400;500;600;700;800&display=swap');

body {
  font-family: 'Lexend', sans-serif;
}
```

**Type scale — use Tailwind built-in sizes only:**

| Role | Tailwind classes | Notes |
|---|---|---|
| Hero Display | `text-4xl md:text-6xl font-extrabold leading-tight tracking-tight text-gray-900` | Centered, 2–3 lines max |
| H2 Section | `text-2xl md:text-4xl font-bold text-gray-900` | Centered or left-aligned |
| H3 Card title | `text-lg md:text-xl font-semibold text-gray-900` | Inside cards |
| Body | `text-sm md:text-base font-normal leading-relaxed text-gray-500` | Descriptions, paragraphs |
| Small / Caption | `text-xs md:text-sm text-gray-400` | Meta, timestamps, author names |
| Eyebrow | `text-xs font-semibold tracking-wide` | Inside Badge component above headings |
| Stat / Big number | `text-5xl md:text-7xl font-extrabold text-white` | Inside dark accent cards |
| Nav link | `text-sm font-medium text-gray-600 hover:text-gray-900` | Header navigation |
| Button label | `text-sm font-semibold` | Inside all button variants |

---

## 5. Shadows & Borders

| Context | Tailwind class |
|---|---|
| Default card | `shadow-sm` |
| Hovered card / elevated | `shadow-md` |
| Floating dropdown / modal | `shadow-xl` |
| Card border | `border border-gray-200` |
| Input border (default) | `border border-gray-300` |
| Input border (focus) | `ring-2 ring-violet-500 border-transparent` |

**Hover lift effect:**
```tsx
<div className="shadow-sm hover:shadow-md transition-shadow duration-200">
```

---

## 6. Border Radius — Key Differentiation

Large, friendly rounded corners define this style. Apply consistently across all elements.

| Element | Tailwind class |
|---|---|
| Standard card | `rounded-2xl` |
| Large feature / step / CTA card | `rounded-3xl` |
| Button | `rounded-full` |
| Badge / pill tag | `rounded-full` |
| Input field | `rounded-xl` |
| Avatar image | `rounded-full` |
| Image inside card | `rounded-xl` |
| Nav bar | no radius (full width sticky bar) |

---

## 7. Reusable Components

Every repeated UI pattern **must be a component**. Never duplicate markup.

### `<Button>` — All button variants
```tsx
// components/ui/Button.tsx
type Variant = "primary" | "secondary" | "ghost";

const variants: Record<Variant, string> = {
  primary:   "bg-gray-900 text-white hover:bg-gray-800",
  secondary: "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50",
  ghost:     "bg-transparent text-gray-700 hover:bg-gray-100",
};

export function Button({ variant = "primary", className = "", children, ...props }) {
  return (
    <button
      className={`
        min-h-[44px] px-5 py-2.5
        rounded-full text-sm font-semibold
        cursor-pointer
        transition-all duration-200
        shadow-sm hover:shadow-md
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
```

> The primary button is **dark (`bg-gray-900`)**, not violet. Violet/lavender is used only for accent card backgrounds. Always use `bg-gray-900` for primary CTA buttons.

### `<Card>` — Content card
```tsx
// components/ui/Card.tsx
export function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-white border border-gray-200 rounded-2xl
        p-6 md:p-8
        shadow-sm hover:shadow-md
        transition-shadow duration-200
        ${className}
      `}
    >
      {children}
    </div>
  );
}
```

### `<Badge>` — Eyebrow labels, pill tags, step numbers
```tsx
// components/ui/Badge.tsx
type BadgeVariant = "dark" | "yellow" | "green" | "violet" | "gray";

const badgeVariants: Record<BadgeVariant, string> = {
  dark:   "bg-gray-900 text-white",
  yellow: "bg-yellow-300 text-gray-900",
  green:  "bg-green-200 text-gray-900",
  violet: "bg-violet-200 text-violet-800",
  gray:   "bg-gray-100 text-gray-600",
};

export function Badge({ variant = "gray", children }) {
  return (
    <span className={`
      inline-flex items-center gap-1
      px-3 py-1 rounded-full
      text-xs font-semibold
      ${badgeVariants[variant]}
    `}>
      {children}
    </span>
  );
}
```

### `<Input>` — Form input
```tsx
// components/ui/Input.tsx
export function Input({ className = "", ...props }) {
  return (
    <input
      className={`
        w-full min-h-[44px] px-4 py-2.5
        bg-white text-gray-900
        border border-gray-300 rounded-xl
        placeholder:text-gray-400 text-sm
        focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent
        transition-all duration-150
        ${className}
      `}
      {...props}
    />
  );
}
```

### `<SectionHeader>` — Repeated heading block
```tsx
// components/ui/SectionHeader.tsx
export function SectionHeader({ eyebrow, title, description, centered = false }) {
  return (
    <div className={`flex flex-col gap-3 ${centered ? "items-center text-center mx-auto max-w-2xl" : "max-w-2xl"}`}>
      {eyebrow && <Badge variant="gray">{eyebrow}</Badge>}
      <h2 className="text-2xl md:text-4xl font-bold text-gray-900">{title}</h2>
      {description && <p className="text-sm md:text-base leading-relaxed text-gray-500">{description}</p>}
    </div>
  );
}
```

---

## 8. Page Sections — Detailed Breakdown

This section documents every section of the **BioLinks landing page** in order of appearance, with exact layout, content structure, and Tailwind classes to use. All copy, CTAs, and imagery reflect the platform's core purpose: **link-in-bio pages for showcasing affiliate products**.

---

### 8.1 Navigation Bar

**Layout:** Full-width sticky bar. White background with a subtle bottom border. Logo on the left, nav links in the center, two action buttons on the right.

**Behavior:** `sticky top-0 z-50`. Has frosted glass effect — `bg-white/80 backdrop-blur-md` — so page content scrolls beneath it with a blurred effect.

**Logo:** "BioLinks" wordmark. Bold, dark (`text-gray-900`). Optionally preceded by a small link-chain icon.

**Nav links:** 4 items. Hidden on mobile. Use `text-sm font-medium text-gray-600`, hover to `text-gray-900`.

**Right buttons:** Two buttons — a ghost/text "Log In" and a filled dark "Get Started Free".

```tsx
<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
  <Container>
    <div className="flex items-center justify-between h-16">
      <a href="/" className="text-lg font-bold text-gray-900">BioLinks</a>

      <div className="hidden md:flex items-center gap-7 text-sm font-medium text-gray-600">
        <a href="#features" className="hover:text-gray-900 transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-gray-900 transition-colors">How It Works</a>
        <a href="#testimonials" className="hover:text-gray-900 transition-colors">Testimonials</a>
        <a href="#faq" className="hover:text-gray-900 transition-colors">FAQ</a>
      </div>

      <div className="flex items-center gap-2">
        <Button variant="ghost">Log In</Button>
        <Button variant="primary">Get Started Free</Button>
      </div>
    </div>
  </Container>
</nav>
```

---

### 8.2 Hero Section

**Layout:** Fully centered single-column layout with generous vertical whitespace above and below. Content stacks vertically: eyebrow → headline → subtext → buttons → image strip.

**Eyebrow badge:** Small dark pill (`bg-gray-900 text-white`), rounded-full, with a sparkle symbol (✦) prefix. e.g. `✦ Your Affiliate Products, One Beautiful Page`.

**Headline:** Very large, extrabold, 2 lines, centered. One key phrase is highlighted with a yellow background span (`bg-yellow-300 px-2 rounded-md`). e.g. "Showcase products. Track clicks. / **Earn more.**" where "Earn more." has the yellow highlight.

**Subtext:** 1–2 short sentences, `text-gray-500`, centered, max width ~480px. Describes the core value: create a personal profile page at `yourdomain.com/{username}` to showcase affiliate products and track every click.

**CTA buttons:** Two buttons side by side (stacked on mobile): secondary "See a Demo Profile" on the left, primary "Create Your Page" on the right.

**Image strip:** A horizontal row of 4 profile-style preview cards/thumbnails, displayed below the buttons. Each is `rounded-2xl`, roughly `w-28 md:w-36 h-40 md:h-52`, `object-cover`. They represent sample creator profile pages — editorial photo row, NOT overlapping.

```tsx
<section className="py-20 md:py-32 bg-white">
  <Container>
    <div className="flex flex-col items-center text-center gap-6">
      <Badge variant="dark">✦ Your Affiliate Products, One Beautiful Page</Badge>

      <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight max-w-3xl">
        Showcase products. Track clicks.<br />
        <span className="bg-yellow-300 px-2 rounded-md">Earn more.</span>
      </h1>

      <p className="text-sm md:text-base text-gray-500 leading-relaxed max-w-md">
        Create your personal link-in-bio page to showcase affiliate products. Share one link, let your audience browse by category, and track every click in real time.
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <Button variant="secondary">See a Demo Profile</Button>
        <Button variant="primary">Create Your Page</Button>
      </div>

      <div className="flex gap-3 mt-4">
        {[1, 2, 3, 4].map(i => (
          <img
            key={i}
            src={`https://picsum.photos/seed/creator${i}/200/260`}
            alt={`Creator profile ${i}`}
            className="w-28 md:w-36 h-40 md:h-52 object-cover rounded-2xl"
          />
        ))}
      </div>
    </div>
  </Container>
</section>
```

---

### 8.3 Platform Features Section (Bento Grid)

**Layout:** Centered section header at the top, then a **2-column bento-style grid** of 4 feature cards below.

**Section header:** Centered. Eyebrow badge ("Platform Features") → H2 ("Everything you need to monetize your audience") → short description paragraph.

**Card grid (2 columns, 2 rows = 4 cards):**

- **Card 1 (top-left):** White card. H3 title: "Product Showcase with Categories" + body text explaining category filtering and drag-and-drop ordering. At the bottom, a product grid UI screenshot clipped with `rounded-xl`, bordered with `border border-gray-100`.
- **Card 2 (top-right):** White card. H3 title: "Connect All Your Socials" + body text about linking social profiles (Instagram, TikTok, YouTube, Twitter, Shopee). At the bottom, a row of small circular platform logos — `w-9 h-9 rounded-full bg-gray-100` circles with a letter or icon inside.
- **Card 3 (bottom-left):** White card. H3 title: "Click Tracking & Analytics" + body text about event-based click tracking, referer data, and time-series analytics. At the bottom, a dashboard/analytics preview screenshot.
- **Card 4 (bottom-right):** **Dark card** (`bg-gray-900 border-gray-900`). Displays a massive click-count number (e.g. "12K") in extrabold white as a decorative large type element, followed by a bold heading "Clicks Tracked This Month" and a short supporting sentence in `text-gray-400`.

```tsx
<section id="features" className="py-16 md:py-24 bg-white">
  <Container>
    <div className="flex flex-col gap-12">
      <SectionHeader
        eyebrow="Platform Features"
        title="Everything you need to monetize your audience"
        description="One page for all your affiliate products. Organize by category, reorder with drag & drop, and track every single click — all from a clean, shareable profile."
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <Card className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-gray-900">Product Showcase with Categories</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Organize your affiliate products into categories so visitors can filter and find exactly what they're looking for. Drag & drop to reorder them however you like.</p>
          <div className="mt-auto rounded-xl overflow-hidden border border-gray-100">
            <img src="https://picsum.photos/seed/productgrid/600/260" alt="Product showcase preview" className="w-full object-cover" />
          </div>
        </Card>

        <Card className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-gray-900">Connect All Your Socials</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Add links to every platform you're active on — Instagram, TikTok, YouTube, Twitter, Shopee, and more. Your visitors see everything in one place.</p>
          <div className="flex gap-2 flex-wrap mt-auto">
            {['Ig', 'Tk', 'Yt', 'X', 'Sp'].map((letter, i) => (
              <div key={i} className="w-9 h-9 bg-gray-100 rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-500">{letter}</span>
              </div>
            ))}
          </div>
        </Card>

        <Card className="flex flex-col gap-4">
          <h3 className="text-lg font-semibold text-gray-900">Click Tracking & Analytics</h3>
          <p className="text-sm text-gray-500 leading-relaxed">Every product click is recorded as a discrete event — not just a counter. See which products get the most clicks, when, and from where. Analytics-ready from day one.</p>
          <div className="mt-auto rounded-xl overflow-hidden border border-gray-100">
            <img src="https://picsum.photos/seed/clickanalytics/600/240" alt="Click analytics dashboard" className="w-full object-cover" />
          </div>
        </Card>

        <Card className="bg-gray-900 border-gray-900 flex flex-col justify-between gap-6">
          <p className="text-7xl md:text-8xl font-extrabold text-white leading-none">12K</p>
          <div className="flex flex-col gap-2">
            <p className="text-lg font-semibold text-white">Clicks Tracked This Month</p>
            <p className="text-sm text-gray-400 leading-relaxed">Creators using BioLinks see an average of 3× more affiliate conversions with transparent click data.</p>
          </div>
        </Card>
      </div>
    </div>
  </Container>
</section>
```

---

### 8.4 How It Works — 3 Easy Steps Section

**Layout:** Centered section header, then **3 large colored cards in a row** (stacked to 1 column on mobile). Each card is tall, padded, and uses `rounded-3xl`.

**Section header:** Small rocket emoji prefix before the eyebrow label. H2 is centered and large.

**Step card colors:**
- Step 1: `bg-violet-200` (soft lavender)
- Step 2: `bg-yellow-300` (bright yellow)
- Step 3: `bg-green-200` (soft green)

**Each step card contains (top to bottom):**
1. Small dark badge (`bg-gray-900 text-white rounded-full`) — "Step 1", "Step 2", "Step 3"
2. H3 title — bold, `text-gray-900`
3. Short description paragraph — `text-sm text-gray-700`
4. At the bottom: a product UI screenshot/mockup image with `rounded-xl` corners, filling the card width

The cards are tall enough that the image fills the lower half. Use `flex flex-col` with `mt-auto` on the image to push it to the bottom.

```tsx
<section id="how-it-works" className="py-16 md:py-24 bg-white">
  <Container>
    <div className="flex flex-col gap-12">
      <SectionHeader
        eyebrow="🚀 How It Works"
        title="Start earning in 3 simple steps"
        centered
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-violet-200 rounded-3xl p-8 flex flex-col gap-5 min-h-[480px]">
          <Badge variant="dark">Step 1</Badge>
          <h3 className="text-xl font-semibold text-gray-900">Sign up with Google & claim your username</h3>
          <p className="text-sm text-gray-700 leading-relaxed">One-click Google sign-in. Pick a unique username and your profile goes live at yourdomain.com/{username} instantly.</p>
          <div className="mt-auto rounded-xl overflow-hidden">
            <img src="https://picsum.photos/seed/signup/400/240" alt="Google sign-up flow" className="w-full object-cover" />
          </div>
        </div>

        <div className="bg-yellow-300 rounded-3xl p-8 flex flex-col gap-5 min-h-[480px]">
          <Badge variant="dark">Step 2</Badge>
          <h3 className="text-xl font-semibold text-gray-900">Add your affiliate products & organize by category</h3>
          <p className="text-sm text-gray-700 leading-relaxed">Upload product thumbnails, paste your affiliate links, assign categories, and drag to reorder. Your showcase is ready in minutes.</p>
          <div className="mt-auto rounded-xl overflow-hidden">
            <img src="https://picsum.photos/seed/addproduct/400/240" alt="Adding products" className="w-full object-cover" />
          </div>
        </div>

        <div className="bg-green-200 rounded-3xl p-8 flex flex-col gap-5 min-h-[480px]">
          <Badge variant="dark">Step 3</Badge>
          <h3 className="text-xl font-semibold text-gray-900">Share your link & track every click</h3>
          <p className="text-sm text-gray-700 leading-relaxed">Drop your BioLinks URL in your social bios. Every product click is tracked with timestamps, referers, and user agents — ready for analysis.</p>
          <div className="mt-auto rounded-xl overflow-hidden">
            <img src="https://picsum.photos/seed/sharetrack/400/240" alt="Share and track clicks" className="w-full object-cover" />
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>
```

---

### 8.5 Testimonials Section

**Layout:** Two-part top row + card grid below. The top row has the H2 heading on the left and a social proof indicator on the right. The card grid has 3 testimonial cards in a row.

**Top row — right side social proof:**
- A row of 4 small overlapping circular avatars (`-space-x-2`, each `w-8 h-8 rounded-full border-2 border-white`)
- Short trust text to the right: e.g. "Trusted by 2,000+ creators and affiliate marketers" — `text-xs text-gray-500`, max width ~180px

**Testimonial card (each):**
1. 5 yellow star icons (`text-yellow-400 text-base`) — use the ★ character
2. Quote text — `text-sm text-gray-600 leading-relaxed`, 2–3 sentences about affiliate product showcase experience
3. Bottom row with avatar + name + role:
   - `w-9 h-9 rounded-full object-cover` avatar
   - Name: `text-sm font-semibold text-gray-900`
   - Role/Company: `text-xs text-gray-400` — e.g. "Tech Reviewer", "Fashion Blogger", "Fitness Creator"

```tsx
<section id="testimonials" className="py-16 md:py-24 bg-white">
  <Container>
    <div className="flex flex-col gap-10">

      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Creators love BioLinks</h2>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[1,2,3,4].map(i => (
              <img key={i} src={`https://picsum.photos/seed/creator${i}/40/40`} alt="" className="w-8 h-8 rounded-full border-2 border-white object-cover" />
            ))}
          </div>
          <p className="text-xs text-gray-500 max-w-[180px] leading-snug">Trusted by 2,000+ creators and affiliate marketers</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {testimonials.map((t, i) => (
          <Card key={i} className="flex flex-col gap-4">
            <div className="text-yellow-400 text-base tracking-wide">★★★★★</div>
            <p className="text-sm text-gray-600 leading-relaxed">{t.quote}</p>
            <div className="flex items-center gap-3 mt-auto pt-2">
              <img src={t.avatar} alt={t.name} className="w-9 h-9 rounded-full object-cover" />
              <div>
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-400">{t.role}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  </Container>
</section>
```

---

### 8.6 Click Tracking Highlight Section

**Layout:** A single large `rounded-3xl` card with a **lavender/violet background** (`bg-violet-200`), inside the container. Inside: 2 columns — left is text content, right is a floating product mockup card.

**Left column (text):**
1. Small dark badge: "Smart Tracking"
2. H2 title: "Every click, fully tracked"
3. Short description paragraph about event-based click tracking — each click stored as a discrete event (not a counter), capturing timestamps, referers, and user agents
4. Two white pill chips in a row — each chip has a ✦ icon + label text. These represent tracking features (e.g. "✦ Event-Based Logging", "✦ Referer Tracking"). Each chip is `bg-white rounded-full px-4 py-2 shadow-sm text-sm font-medium`.
5. A stat block at the bottom: a very large bold redirect flow diagram text "→", then a short sentence explaining the `/r/{productId}` redirect tracking flow in `text-sm text-gray-700`

**Right column:**
A floating white card (`bg-white rounded-2xl shadow-md`) containing a click analytics dashboard screenshot or redirect flow UI mockup image.

```tsx
<section className="py-16 md:py-24 bg-white">
  <Container>
    <div className="bg-violet-200 rounded-3xl p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

      <div className="flex flex-col gap-5">
        <Badge variant="dark">Smart Tracking</Badge>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Every click, fully tracked</h2>
        <p className="text-sm text-gray-700 leading-relaxed">When a visitor clicks a product, they hit our redirect route. We log the click as a discrete event — timestamp, referer, user agent — then instantly forward them to your affiliate link. No data lost, even with ad-blockers.</p>

        <div className="flex gap-3 flex-wrap">
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm text-sm font-medium text-gray-900">
            ✦ Event-Based Logging
          </div>
          <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm text-sm font-medium text-gray-900">
            ✦ Referer Tracking
          </div>
        </div>

        <div className="flex flex-col gap-1 mt-2">
          <p className="text-5xl font-extrabold text-gray-900">302→</p>
          <p className="text-sm text-gray-700 leading-relaxed">Server-side redirect ensures every click is captured — /r/{productId} logs the event, then forwards to your affiliate URL in milliseconds.</p>
        </div>
      </div>

      <div className="flex justify-center md:justify-end">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full max-w-sm">
          <img src="https://picsum.photos/seed/trackingdash/500/420" alt="Click tracking dashboard" className="w-full object-cover" />
        </div>
      </div>
    </div>
  </Container>
</section>
```

---

### 8.7 FAQ Section

**Layout:** 2-column layout — left column has the H2 heading + short supporting description text. Right column has the accordion list. On mobile, stacks vertically (heading on top, accordion below).

**Accordion item:**
- Items are separated by thin horizontal dividers (`divide-y divide-gray-200`)
- Each item: question text (bold, `text-sm font-semibold text-gray-900`) on the left + a `+` icon on the right (`text-gray-400`)
- When expanded, the `+` rotates to `×` using `group-open:rotate-45 transition-transform`
- Answer text appears below: `text-sm text-gray-500 leading-relaxed`
- Use native HTML `<details>` / `<summary>` for zero-JS accordion

**FAQ questions must be specific to BioLinks:**
1. "What is BioLinks?" — A link-in-bio platform for showcasing affiliate products.
2. "How does click tracking work?" — Every click goes through /r/{productId}, logged as a discrete event, then redirected.
3. "Can I organize products into categories?" — Yes, create custom categories and visitors can filter by them.
4. "Why don't you show product prices?" — Prices change on the merchant side; we link out so visitors see the live price.
5. "Is BioLinks free to use?" — Free tier available with all core features.
6. "Can I reorder my products?" — Yes, drag & drop ordering that persists automatically.

```tsx
<section id="faq" className="py-16 md:py-24 bg-white">
  <Container>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

      <div className="flex flex-col gap-4">
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">Frequently asked questions</h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          Everything you need to know about BioLinks. Can't find what you're looking for? Reach out to us directly — we reply within 24 hours.
        </p>
      </div>

      <div className="divide-y divide-gray-200">
        {faqs.map((faq, i) => (
          <details key={i} className="group py-4">
            <summary className="flex justify-between items-center cursor-pointer list-none gap-4">
              <span className="text-sm font-semibold text-gray-900">{faq.question}</span>
              <span className="text-gray-400 text-xl leading-none shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
            </summary>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">{faq.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </Container>
</section>
```

---

### 8.8 CTA Banner Section

**Layout:** A single large `rounded-3xl` card with a **yellow background** (`bg-yellow-300`), placed inside the container. Inside: 2 columns — left has eyebrow badge + large headline + two buttons; right has a photo or product mockup.

**Left column:**
1. Small pill badge (gray or dark) — "Free to Start"
2. Large extrabold headline — 2–3 lines, `text-gray-900`, e.g. "Your audience is waiting. Show them what to buy."
3. Two buttons side by side: primary (dark) "Create Your Page" + secondary (white/outline) "See How It Works"

**Right column:**
A real photo image (`rounded-2xl object-cover`) of a creator or lifestyle shot — someone showcasing products on their phone, clipped and floating within the yellow card.

```tsx
<section className="py-16 md:py-24 bg-white">
  <Container>
    <div className="bg-yellow-300 rounded-3xl p-8 md:p-14 grid grid-cols-1 md:grid-cols-2 gap-8 items-center overflow-hidden">

      <div className="flex flex-col gap-5">
        <Badge variant="gray">Free to Start</Badge>
        <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
          Your audience is waiting. Show them what to buy.
        </h2>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button variant="primary">Create Your Page</Button>
          <Button variant="secondary">See How It Works</Button>
        </div>
      </div>

      <div className="flex justify-end">
        <img
          src="https://picsum.photos/seed/creatorcta/500/420"
          alt="Creator showcasing products"
          className="rounded-2xl object-cover w-full max-w-sm"
        />
      </div>
    </div>
  </Container>
</section>
```

---

### 8.9 Footer

**Layout:** Dark background (`bg-gray-900`). Top area: a multi-column grid — brand column (logo + tagline) on the far left, then 3 link columns (Product, Resources, Company), then a newsletter column on the far right. Bottom bar: copyright text on the left, social icon links on the right.

**Brand column:** "BioLinks" wordmark in white bold + short `text-sm text-gray-400` tagline about showcasing affiliate products.

**Link columns:** Each has a `text-sm font-semibold text-white` heading and 4–5 `text-sm text-gray-400 hover:text-white` links below. Links must be relevant to the BioLinks platform.

**Newsletter column:**
- Small heading: "Get tips on growing your affiliate income" — `text-sm font-semibold text-white`
- Below: side-by-side `<Input>` (dark-styled) + `<Button variant="primary">` compact

**Bottom bar:** Thin top border (`border-t border-gray-800`). Copyright text `text-xs text-gray-600` on left. Social icon links (`text-xs text-gray-500 hover:text-white`) on right.

```tsx
<footer className="bg-gray-900 text-gray-400">
  <Container>
    <div className="py-16 grid grid-cols-2 md:grid-cols-6 gap-10">
      <div className="col-span-2 flex flex-col gap-4">
        <span className="text-white font-bold text-lg">BioLinks</span>
        <p className="text-sm leading-relaxed">The simplest way to showcase your affiliate products and track every click from one beautiful profile page.</p>
      </div>

      {[
        { heading: "Product",   links: ["Features", "Click Tracking", "Categories", "Drag & Drop"] },
        { heading: "Resources", links: ["Blog", "Help Center", "API Docs", "Changelog"] },
        { heading: "Company",   links: ["About", "Privacy Policy", "Terms of Service", "Contact"] },
      ].map(col => (
        <div key={col.heading} className="flex flex-col gap-3">
          <h4 className="text-white font-semibold text-sm">{col.heading}</h4>
          {col.links.map(link => (
            <a key={link} href="#" className="text-sm hover:text-white transition-colors">{link}</a>
          ))}
        </div>
      ))}

      <div className="col-span-2 flex flex-col gap-3">
        <h4 className="text-white font-semibold text-sm">Get tips on growing your affiliate income</h4>
        <div className="flex gap-2">
          <Input placeholder="Your email" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-600" />
          <Button variant="primary" className="shrink-0">Subscribe</Button>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-800 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
      <p className="text-xs text-gray-600">© 2025 BioLinks. All rights reserved.</p>
      <div className="flex gap-5">
        {['X', 'In', 'Yt', 'Ig', 'Tk'].map(s => (
          <a key={s} href="#" className="text-xs text-gray-500 hover:text-white transition-colors">{s}</a>
        ))}
      </div>
    </div>
  </Container>
</footer>
```

---

## 9. Layout & Responsive Rules

**Breakpoints (Tailwind v4 defaults):**

| Prefix | Min-width |
|---|---|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |

- **Mobile-first always.** Default styles = mobile. Add `md:` / `lg:` for desktop.
- Cards always stack to 1 column on mobile.
- No fixed `height` on cards — let content define height, use `min-h-*` only when needed.
- Prevent text overflow: `break-words` on all card text.
- No horizontal scroll: no child element should exceed viewport width.
- Images must never overflow their containers — always use `overflow-hidden` on the wrapper.

---

## 10. Color Distribution

| Role | % | Tailwind classes |
|---|---|---|
| Page background | 55% | `bg-white` |
| Neutral surfaces | 25% | `bg-gray-50` · `bg-white` (cards) |
| Pastel accent fills | 15% | `bg-violet-200` · `bg-yellow-300` · `bg-green-200` |
| Deep accents | 5% | `bg-gray-900` (dark stat cards, buttons, nav, footer) |

> ⚠️ Pastel accent fills are for individual feature cards, step cards, and banner sections only. Never fill multiple consecutive full-width sections with the same accent color.

---

## 11. Images & Media

- Use real placeholders: `https://picsum.photos/seed/{keyword}/{width}/{height}`
- Never use empty colored divs as image substitutes.
- Always `object-cover` on images inside bounded containers.
- Always `rounded-xl` on images inside cards.
- Wrap product screenshots in `border border-gray-100 rounded-xl overflow-hidden`.

```tsx
<div className="rounded-xl overflow-hidden border border-gray-100">
  <img
    src="https://picsum.photos/seed/dashboard/800/500"
    alt="Dashboard preview"
    className="w-full h-full object-cover"
  />
</div>
```

---

## 12. Icons

Use **inline SVG only**. Special emoji characters (✦, 🍃) are allowed only in eyebrow badges and pill chip prefixes. No icon fonts.

```tsx
<svg
  width="20" height="20"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M5 12h14M12 5l7 7-7 7" />
</svg>
```

---

## 13. Accessibility & Motion

- All `<button>` and `<a>` must have `cursor-pointer`.
- All images must have descriptive `alt` text.
- Wrap all animated elements with `motion-reduce:transition-none`.
- Contrast: `text-white` on `bg-gray-900` ✓ · `text-gray-900` on `bg-yellow-300` ✓ · `text-gray-900` on `bg-violet-200` ✓ · `text-gray-900` on `bg-green-200` ✓

---

## 14. Code Conventions (Next.js)

- **Server Components by default.** Add `"use client"` only for interactivity or hooks.
- All reusable UI pieces live in `components/ui/`. Page-specific components in `components/`.
- Global utilities and font imports only in `app/globals.css`.
- No inline `style={{}}` props anywhere.
- No `@apply` in component files.
- No duplicate markup — if a pattern repeats twice, it becomes a component.

---

## 15. Quick Reference Cheatsheet

```
Font:              Lexend 400/500/600/700/800 (Google Fonts)
Background:        bg-white
Section tint:      bg-gray-50
Border:            border border-gray-200
Shadow:            shadow-sm (default) · shadow-md (hover/elevated)
Hover:             hover:shadow-md transition-shadow duration-200
Radius (card):     rounded-2xl
Radius (large):    rounded-3xl
Radius (btn/tag):  rounded-full
Radius (input):    rounded-xl
Container:         <Container>  →  max-w-6xl mx-auto px-6 md:px-12
Section:           py-16 md:py-24
Card grid:         grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6
Card:              <Card>  →  bg-white border border-gray-200 rounded-2xl shadow-sm
Button primary:    bg-gray-900 text-white rounded-full
Button secondary:  bg-white border border-gray-300 rounded-full
Badge:             <Badge variant="dark|yellow|green|violet|gray">
Input:             <Input>  →  rounded-xl border border-gray-300
Section header:    <SectionHeader eyebrow title description centered?>
Step cards:        bg-violet-200 (Step 1) · bg-yellow-300 (Step 2) · bg-green-200 (Step 3)
Dark accent card:  bg-gray-900 text-white (stat callout)
AI/feature block:  bg-violet-200 rounded-3xl full-bleed card
CTA banner:        bg-yellow-300 rounded-3xl full-bleed card
Footer:            bg-gray-900 text-gray-400
```