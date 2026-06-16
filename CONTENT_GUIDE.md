# Content Management Guide

This guide explains exactly where to make content changes without searching through the codebase.

---

## Team Members

**File:** `lib/data.ts`

Each team member is an object in the `teamMembers` array. Update these fields:

```ts
{
  name: "Jane Smith",                     // Display name
  role: "Co-Founder & Product Lead",      // Title shown on card
  description: "Short bio goes here.",    // 1–2 sentence description
  initials: "JS",                         // Used as fallback (not shown in current UI)
  socialLinks: {
    linkedin: "https://linkedin.com/in/janesmith",  // Set to "#" if not ready
    github: "https://github.com/janesmith",         // Remove the key to hide the icon
    twitter: "https://x.com/janesmith",             // Optional — omit to hide
  },
}
```

To hide a social link icon: remove the key entirely (e.g. delete `twitter: "..."` from the object).  
To add a social link: add the key with the full URL.

**Profile photos** are currently shown as colored placeholder areas. To add real photos:
1. Add images to `/public/images/team/` (e.g. `member-1.jpg`)
2. In `app/team/page.tsx`, replace the placeholder `<div>` in the card with `<Image src="/images/team/member-1.jpg" alt="Jane Smith" ... />` from `next/image`

---

## Product Content

### Homepage teaser (`components/sections/Product.tsx`)

Update the `SectionHeading` props — `title` and `description` — to reflect the product's current stage.

### Full product page (`app/product/page.tsx`)

**Overview section:** Edit the `<dd>` text inside the `<dl>` block near the top:
- Product Name (line ~62)
- Problem (line ~84)
- Solution (line ~93)

**Status badge:** Change `"Early Development"` (line ~73) to the current stage.

**Screenshots:** Drop images into `/public/images/product/` using these filenames:
- `screenshot-1.png`
- `screenshot-2.png`
- `screenshot-3.png`

Then replace each placeholder `<li>` in the screenshots section with:
```tsx
<li key={s.id}>
  <Image
    src={`/images/product/${s.filename}`}
    alt={s.label}
    width={1280}
    height={720}
    className="rounded-2xl border border-border w-full"
  />
</li>
```

**Journey timeline:** The `journeySteps` array (line ~45) controls the four milestones. Change `status` to:
- `"done"` — completed (teal circle with checkmark)
- `"active"` — current stage (indigo circle with "Current" badge)
- `"upcoming"` — not started yet (grey circle)

---

## Theme Colors

**File:** `app/globals.css`

All colors are defined in the `@theme inline { }` block at the top. The values there are the **light mode** defaults.

```css
@theme inline {
  --color-primary: #4338ca;   /* Indigo — buttons, links, accents */
  --color-accent: #0d9488;    /* Teal — secondary accents, status indicators */
  --color-canvas: #fafaf9;    /* Page background */
  --color-surface: #ffffff;   /* Card/panel background */
  --color-ink: #1c1917;       /* Primary text */
  --color-ink-muted: #78716c; /* Secondary text, descriptions */
}
```

**Dark mode overrides** are in the `[data-theme="dark"] { }` block below. Edit both blocks together to keep them in sync.

Changing a color here affects every component that uses the corresponding utility class (e.g. `text-primary`, `bg-canvas`).

---

## Homepage Section Text

Each section lives in its own file under `components/sections/`:

| Section | File | What to edit |
|---|---|---|
| Hero headline | `components/sections/Hero.tsx` | `<h1>` content (~line 62) |
| Hero description | `components/sections/Hero.tsx` | `<p>` below the heading (~line 76) |
| About story | `components/sections/About.tsx` | Paragraphs in the left column |
| Philosophy pillars | `lib/data.ts` | `philosophyPillars` array — title and description |
| Contact intro | `components/sections/Contact.tsx` | `<h2>` and `<p>` in the gradient panel |
| Contact categories | `components/sections/Contact.tsx` | `contactCategories` array at the top |

---

## Navigation Links

**Header:** `components/layout/Header.tsx` — update the `navLinks` array (line ~8):
```ts
const navLinks = [
  { label: "About", href: "/#about" },
  { label: "Approach", href: "/#philosophy" },
  { label: "Work", href: "/product" },
  { label: "Team", href: "/team" },
];
```

**Footer:** `components/layout/Footer.tsx` — update the `footerLinks` array (line ~3). Same format.

To add a new page to nav: add an entry to both arrays and create the corresponding page in `app/your-page/page.tsx`.

---

## Contact Email

**File:** `components/sections/Contact.tsx`

Update the `CONTACT_EMAIL` constant at the top of the file:
```ts
const CONTACT_EMAIL = "access.code.2082@gmail.com";
```
