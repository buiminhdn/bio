# BioLinks — Link-in-Bio & Affiliate Product Showcase

A modern link-in-bio platform that lets users create a personal profile page to showcase affiliate products. Each user gets a public profile at `yourdomain.com/{username}` — clean, fast, and optimized for clicks.

---

## Tech Stack

| Layer       | Technology                          |
| ----------- | ----------------------------------- |
| Frontend    | Next.js (App Router) + TailwindCSS  |
| Backend     | Supabase (Auth + Postgres + Edge Functions) |
| Storage     | Cloudflare R2 (images)              |
| Deployment  | Vercel                              |

---

## Core Features

- **Google Authentication** — One-click sign-in via Supabase Auth.
- **User Profile Page** — Avatar, display name, bio, and social links.
- **Product Showcase** — Curated list of affiliate products with title, thumbnail, affiliate URL, and category.
- **Category Filtering** — Visitors can filter products by category on a profile page.
- **Drag & Drop Ordering** — Users reorder their products via drag and drop; order is persisted.
- **Click Tracking** — Every outbound click is stored as a discrete event for analytics-ready querying.

---

## Architecture

```
┌────────────┐      ┌──────────────┐      ┌──────────────┐
│   Vercel   │◄────►│   Supabase   │      │ Cloudflare   │
│  (Next.js) │      │  Auth + DB   │      │     R2       │
│  Frontend  │      │  Edge Fns    │      │   (Images)   │
└────────────┘      └──────────────┘      └──────────────┘
```

### Why Supabase?

Supabase provides a unified layer for authentication, database, and serverless functions. It removes the need to stand up a separate backend while offering Postgres-level power—row-level security, full-text search, and real-time subscriptions—out of the box.

### Why Cloudflare R2 instead of Supabase Storage?

- **Zero egress fees** — R2 does not charge for bandwidth. For a product showcase with heavy image traffic, this is a significant cost advantage.
- **Global CDN** — Images are served from Cloudflare's edge, reducing latency worldwide.
- **Decoupled storage** — Separating image storage from the database layer keeps concerns clean and avoids coupling upload/download throughput to database performance.

### Separation of Concerns

| Concern        | Owner           |
| -------------- | --------------- |
| Routing & UI   | Next.js (Vercel) |
| Auth & Data    | Supabase         |
| Image Delivery | Cloudflare R2    |

---

## Database Design

### Tables

```sql
-- Authenticated users
CREATE TABLE users (
  id            UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email         TEXT UNIQUE NOT NULL,
  username      TEXT UNIQUE NOT NULL,
  display_name  TEXT,
  bio           TEXT,
  avatar_url    TEXT,
  created_at    TIMESTAMPTZ DEFAULT now(),
  updated_at    TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX idx_users_username ON users (username);

-- Social links attached to a user profile
CREATE TABLE social_links (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID REFERENCES users(id) ON DELETE CASCADE,
  platform   TEXT NOT NULL,        -- e.g. "twitter", "instagram"
  url        TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX idx_social_links_user ON social_links (user_id);

-- Product categories (global or per-user)
CREATE TABLE categories (
  id         UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id    UUID REFERENCES users(id) ON DELETE CASCADE,
  name       TEXT NOT NULL,
  slug       TEXT NOT NULL,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX idx_categories_user ON categories (user_id);

-- Affiliate products
CREATE TABLE products (
  id             UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id        UUID REFERENCES users(id) ON DELETE CASCADE,
  category_id    UUID REFERENCES categories(id) ON DELETE SET NULL,
  title          TEXT NOT NULL,
  thumbnail_url  TEXT,
  affiliate_url  TEXT NOT NULL,
  sort_order     INT DEFAULT 0,
  created_at     TIMESTAMPTZ DEFAULT now(),
  updated_at     TIMESTAMPTZ DEFAULT now()
);
CREATE INDEX idx_products_user       ON products (user_id);
CREATE INDEX idx_products_category   ON products (category_id);

-- Click events (one row per click)
CREATE TABLE product_clicks (
  id          UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id  UUID REFERENCES products(id) ON DELETE CASCADE,
  clicked_at  TIMESTAMPTZ DEFAULT now(),
  ip_address  INET,
  user_agent  TEXT,
  referer     TEXT
);
CREATE INDEX idx_clicks_product ON product_clicks (product_id);
CREATE INDEX idx_clicks_time    ON product_clicks (clicked_at);
```

### Design Decisions

**Why event-based click tracking?**
Storing each click as its own row (instead of incrementing a counter) enables time-series analysis: clicks per hour, per day, referer breakdowns, and bot detection. A simple counter would lose this granularity permanently.

**Why are `username`, `user_id`, `product_id`, and `clicked_at` indexed?**
These columns appear in WHERE and JOIN clauses on every public page load and analytics query. Indexes keep those reads O(log n) instead of full table scans.

**Why no `price` column?**
Affiliate product prices change frequently on the merchant's side. Displaying a stale price damages trust and may violate affiliate program terms. The platform links out to the merchant, where the visitor sees the live price.

---

## API Design

### Public Endpoints

| Method | Route               | Description                          |
| ------ | ------------------- | ------------------------------------ |
| GET    | `/u/{username}`     | Fetch a user's public profile + products |
| GET    | `/r/{productId}`    | Track click, then redirect to affiliate URL |

### Authenticated Endpoints

| Method | Route               | Description                          |
| ------ | ------------------- | ------------------------------------ |
| POST   | `/products`         | Create a new product                 |
| PATCH  | `/products/{id}`    | Update a product                     |
| DELETE | `/products/{id}`    | Delete a product                     |
| PATCH  | `/products/reorder` | Update sort order (drag & drop)      |
| POST   | `/click/{productId}`| Record a click event                 |

### Redirect Tracking Flow

```
Visitor clicks product link
         │
         ▼
  GET /r/{productId}
         │
         ▼
  Server logs click event
  (product_clicks table)
         │
         ▼
  302 Redirect → affiliate_url
```

The redirect route is intentionally server-side. This ensures every click is recorded even if the visitor has JavaScript disabled or an ad-blocker running.

---

## Folder Structure

```
bio/
├── app/
│   ├── (auth)/
│   │   ├── login/
│   │   │   └── page.tsx
│   │   └── callback/
│   │       └── route.ts          # Supabase OAuth callback
│   ├── (dashboard)/
│   │   ├── layout.tsx            # Authenticated layout
│   │   ├── dashboard/
│   │   │   └── page.tsx
│   │   └── products/
│   │       └── page.tsx
│   ├── r/
│   │   └── [productId]/
│   │       └── route.ts          # Click tracking + redirect
│   ├── [username]/
│   │   └── page.tsx              # Public profile page
│   ├── layout.tsx
│   └── page.tsx                  # Landing page
├── components/
│   ├── ui/                       # Generic UI primitives
│   ├── profile/                  # Profile-related components
│   └── product/                  # Product card, list, drag handle
├── lib/
│   ├── supabase/
│   │   ├── client.ts             # Browser client
│   │   ├── server.ts             # Server client
│   │   └── middleware.ts         # Auth middleware
│   └── r2.ts                     # Cloudflare R2 upload helpers
├── services/
│   ├── user.service.ts
│   ├── product.service.ts
│   └── click.service.ts
├── types/
│   ├── user.ts
│   ├── product.ts
│   └── database.ts               # Supabase generated types
├── public/
├── tailwind.config.ts
├── next.config.ts
└── package.json
```

---

## Performance Considerations

### Caching

- **Static profile pages** — Public profile routes use ISR (Incremental Static Regeneration) with a short revalidation window. Most visitors hit cached HTML from the Vercel CDN.
- **Cloudflare R2 + CDN** — Product thumbnails are served via Cloudflare's edge network with aggressive cache headers.

### Image Optimization

- Images are converted to **WebP** and resized on upload (before storing in R2), not on demand.
- Next.js `<Image>` component handles responsive `srcSet` for any remaining optimization.

### Query Design

- Public profile pages are loaded with a **single query** that joins `users`, `products`, and `categories`—no N+1 problem.
- Click counts for the dashboard are pre-aggregated via a Postgres materialized view, avoiding expensive `COUNT(*)` queries on each page load.

---

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Fill in SUPABASE_URL, SUPABASE_ANON_KEY, R2_* credentials

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Environment Variables

| Variable                   | Description                     |
| -------------------------- | ------------------------------- |
| `NEXT_PUBLIC_SUPABASE_URL` | Supabase project URL            |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Supabase anonymous key     |
| `SUPABASE_SERVICE_ROLE_KEY`| Supabase service role key       |
| `R2_ACCOUNT_ID`            | Cloudflare account ID           |
| `R2_ACCESS_KEY_ID`         | R2 access key                   |
| `R2_SECRET_ACCESS_KEY`     | R2 secret key                   |
| `R2_BUCKET_NAME`           | R2 bucket name                  |
| `R2_PUBLIC_URL`            | Public URL for the R2 bucket    |

---

## Future Improvements

- **Analytics Dashboard** — Visual charts for click trends, top products, and referer sources.
- **Custom Themes** — Let users pick color schemes, fonts, and layout styles for their profile.
- **AI-Generated Descriptions** — Auto-generate product blurbs from a title and URL using an LLM.
- **Short Links** — Branded short URLs (e.g., `bio.link/abc`) for sharing individual products.
- **Multi-language Support** — i18n for profile pages and the dashboard.

---

## License

MIT
