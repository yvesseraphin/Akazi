# HubSpot UI/UX Architecture & Exact Component Sizing Specification

> **Source**: Audited directly from [HubSpot.com](https://www.hubspot.com/) via real browser inspection.  
> **Purpose**: Exact design specifications, component dimensions (width, height, padding, margin, radius), and typography scales to reproduce HubSpot's structural layout and UX elegance with a custom color system.

---

## 1. Global Foundations & Dimensional Design Tokens

### 1.1 Layout Grid & Viewport Containers
| Token / Element | Dimension (px / rem) | CSS Implementation | Usage Notes |
| :--- | :--- | :--- | :--- |
| **Max Content Width** | `1280px` (`80rem`) | `max-width: 1280px; margin-inline: auto;` | Primary page wrapper for all sections |
| **Wide Container** | `1440px` (`90rem`) | `max-width: 1440px; margin-inline: auto;` | Full-bleed hero banners & mega-footers |
| **Narrow Content** | `768px` (`48rem`) | `max-width: 768px; margin-inline: auto;` | Single-column text, blogs, centered hero |
| **Desktop Page Gutter** | `32px` – `40px` | `padding-inline: 32px;` (up to `40px` on xl) | Prevents edge touching on desktop |
| **Tablet Page Gutter** | `24px` | `padding-inline: 24px;` | Viewports 768px – 1024px |
| **Mobile Page Gutter** | `16px` | `padding-inline: 16px;` | Viewports < 768px |

### 1.2 Spacing & Vertical Rhythm Scale
HubSpot strictly uses an **8px grid** (with 4px half-steps for micro-spacing):
- `space-1` (4px / 0.25rem): Badge vertical padding, micro gaps, border offsets
- `space-2` (8px / 0.5rem): Button icon gap, input label spacing, tight list items
- `space-3` (12px / 0.75rem): Input padding, dropdown item padding, card chip gap
- `space-4` (16px / 1.0rem): Card internal body padding, mobile margins, heading-to-body margin
- `space-5` (20px / 1.25rem): Card element separation, button group gap
- `space-6` (24px / 1.5rem): Standard card internal gap, hero headline bottom margin
- `space-8` (32px / 2.0rem): Card container padding, column gap for 3-col grid
- `space-10` (40px / 2.5rem): Navbar desktop padding, medium section gap
- `space-12` (48px / 3.0rem): Split hero column gap, 2-column feature grid gap
- `space-16` (64px / 4.0rem): Hero top/bottom padding, standard section gap
- `space-20` (80px / 5.0rem): Major section vertical padding (Desktop)
- `space-24` (96px – 112px / 6.0rem – 7.0rem): Large section padding (Feature showcases, Pre-footer CTA)

### 1.3 Border Radius System
| Token | Radius Value | Component Application |
| :--- | :--- | :--- |
| `radius-none` | `0px` | Full-width divider lines, flush banners |
| `radius-xs` | `4px` | Checkboxes, tooltips, code chips |
| `radius-sm` | `6px` | Small buttons, subtle tags, micro dropdown items |
| `radius-md` | `8px` | **Primary buttons**, **input fields**, navigation items, standard dropdowns |
| `radius-lg` | `12px` | Dropdown flyout menus, compact cards, modal dialogs |
| `radius-xl` | `16px` | **Main feature cards**, product summary containers, media wrappers |
| `radius-2xl` | `24px` | Hero image containers, pre-footer CTA banners, testimonial cards |
| `radius-full` | `9999px` | **Badges, pills, filter chips, circular avatars** |

### 1.4 Elevations & Box Shadows
- **Subtle Card Shadow**: `0 4px 16px rgba(0, 0, 0, 0.04)`
- **Hover / Interactive Card Shadow**: `0 12px 32px rgba(0, 0, 0, 0.08), 0 2px 6px rgba(0, 0, 0, 0.04)`
- **Flyout / Megamenu Shadow**: `0 8px 30px rgba(0, 0, 0, 0.12), 0 1px 3px rgba(0, 0, 0, 0.06)`
- **Hero Media Floating Shadow**: `0 20px 40px -15px rgba(0, 0, 0, 0.15)`
- **Transition Duration**: `150ms` – `250ms cubic-bezier(0.4, 0, 0.2, 1)`

---

## 2. Typography Scale & Structural Hierarchy

HubSpot uses a clean grotesque geometric typeface with strict proportions.

```
Desktop Typography Scale:
H1: 48px (3.0rem)  | Line Height: 1.15 | Weight: 700 | Letter Spacing: -0.02em
H2: 36px (2.25rem) | Line Height: 1.25 | Weight: 600 | Letter Spacing: -0.015em
H3: 24px (1.5rem)  | Line Height: 1.30 | Weight: 600 | Letter Spacing: -0.01em
H4: 20px (1.25rem) | Line Height: 1.40 | Weight: 600 | Letter Spacing: normal
Lead: 18px (1.125rem) | Line Height: 1.50 | Weight: 400 | Letter Spacing: normal
Body: 16px (1.0rem)   | Line Height: 1.50 | Weight: 400 | Letter Spacing: normal
Small: 14px (0.875rem)| Line Height: 1.40 | Weight: 400 | Letter Spacing: normal
Overline: 12px (0.75rem) | Line Height: 1.30 | Weight: 700 | Letter Spacing: 0.08em (Uppercase)
```

### 2.1 Detailed Typographic Matrix
| Level | Font Size (px / rem) | Line Height | Font Weight | Letter Spacing | Margin Bottom | Role / Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Title (H1)** | `48px` (`3.0rem`)<br>*(Mobile: `40px`)* | `55.2px` (`1.15`) | `700` (Bold) or `600` | `-0.02em` (`-0.96px`) | `24px` | Hero section main hook |
| **Section Title (H2)** | `32px` – `36px`<br>*(Mobile: `28px`)* | `40px` – `45px` (`1.25`)| `600` (Semi-bold) | `-0.015em` (`-0.5px`)| `16px` | Feature showcases, category headers |
| **Card Heading (H3)** | `24px` (`1.5rem`) | `31.2px` (`1.3`) | `600` (Semi-bold) | `-0.01em` | `12px` | Product cards, feature block titles |
| **Sub-Feature (H4)** | `18px` – `20px` | `25.2px` – `28px` (`1.4`)| `600` (Semi-bold) | `0` | `8px` | Mini-cards, list headers, accordions |
| **Lead Subtitle** | `18px` – `20px` | `27px` – `30px` (`1.5`)| `400` (Regular) | `0` | `24px` – `32px` | Text directly beneath H1/H2 |
| **Standard Body** | `16px` (`1.0rem`) | `24px` (`1.5`) | `400` (Regular) | `0` | `16px` | Default paragraph, descriptions |
| **Small / Fine Print**| `13px` – `14px` | `18.2px` – `19.6px` (`1.4`)| `400` / `500` | `0` | `0` | Footers, captions, helper text |
| **Overline / Eyebrow**| `12px` – `13px` | `16px` (`1.3`) | `700` (Bold) | `+0.08em` (`1.0px`)| `8px` – `12px`| All-caps tag above headings |

---

## 3. Navigation Bar Architecture

HubSpot employs a dual-tiered or sticky navigation layout designed for high conversion.

### 3.1 Bar Sizing & Dimensions
* **Total Height**:
  * **Main Header**: `80px`
  * **Utility Bar (Optional)**: `36px`
  * **Combined Sticky Height**: `80px` – `116px`
* **Container Max-Width**: `1280px`
* **Inline Padding**: `0 40px` (Desktop) / `12px 24px` (Tablet) / `12px 16px` (Mobile)
* **Position**: `sticky`, `top: 0`, `z-index: 1000`
* **Border Bottom**: `1px solid` border divider (e.g. `border-bottom: 1px solid rgba(0,0,0,0.08)`)

### 3.2 Navigation Elements & Sizing
* **Logo**:
  * Width: `120px` – `140px`
  * Height: `32px` – `38px`
  * Margin-right: `32px`
* **Nav Menu Links**:
  * Font Size: `14px` – `15px`
  * Font Weight: `500` or `600`
  * Padding: `8px 12px` (creates a comfortable click target without stretching the navbar)
  * Gap between menu items: `24px` – `32px`
  * Hover: background radius `6px` with subtle tint
* **Nav Action Area (Right Side)**:
  * Gap between actions: `12px` – `16px`
  * **"Log In" / Secondary Action**:
    * Height: `40px`
    * Padding: `8px 16px`
    * Font Size: `14px`, Font Weight: `600`
  * **"Get a Demo" / Primary CTA Button**:
    * Height: `40px`
    * Padding: `8px 20px`
    * Border Radius: `8px`
    * Font Size: `14px`, Font Weight: `600`

### 3.3 Flyout & Mega-Menu Sizing
* **Dropdown Menu Container**:
  * Minimum Width: `280px` (Simple list) up to `640px` – `720px` (Multi-column mega-menu)
  * Padding: `24px` – `32px`
  * Border Radius: `12px`
  * Box Shadow: `0 8px 30px rgba(0, 0, 0, 0.12)`
  * Top Offset from nav: `12px`
* **Dropdown Item Row**:
  * Padding: `10px 14px`
  * Border Radius: `8px`
  * Gap between icon and text: `16px`
  * Icon Container: `32px x 32px` with `6px` – `8px` radius
  * Item Title: `14px`, Font Weight `600`
  * Item Description: `13px`, Line Height `1.4`

---

## 4. Hero Section Architecture

The hero section is structured around either a **2-column split** (Headline + CTA on left, interactive illustration/app UI preview on right) or a **centered hero with floating media below**.

### 4.1 Hero Dimensional Structure
* **Total Section Height**:
  * Min-Height: `560px` – `680px` (Desktop)
* **Vertical Padding**:
  * Desktop: `padding-top: 80px`, `padding-bottom: 80px` (or `96px` top when no banner)
  * Mobile: `padding-top: 48px`, `padding-bottom: 48px`
* **Layout Structure**:
  * Split layout: CSS Grid `grid-template-columns: 1fr 1fr` or Flexbox with `gap: 48px` – `64px`
  * Centered layout: Flex column `align-items: center; text-align: center;`
* **Content Column (Text Container)**:
  * Max Width: `560px` (in 2-column mode) / `768px` (in centered mode)
  * Vertical Gap between elements: `24px`

### 4.2 Hero Interactive & Visual Elements
* **Eyebrow Tag / Announcement Pill**:
  * Height: `28px` – `32px`
  * Padding: `4px 12px` (or `6px 16px`)
  * Border Radius: `9999px` (full pill)
  * Font Size: `12px` – `13px`, Font Weight: `600`
  * Margin Bottom: `16px`
* **Hero Button Group**:
  * Display: `flex`, `align-items: center`, `flex-wrap: wrap`
  * Gap: `16px` (Desktop), `12px` (Mobile full-width stack)
  * Margin Top: `8px`
* **Hero Primary Button ("Get a demo")**:
  * Height: `52px`
  * Min-Width: `160px`
  * Padding: `14px 32px`
  * Border Radius: `8px`
  * Font Size: `16px`
  * Font Weight: `600`
* **Hero Secondary Button ("Get started free")**:
  * Height: `52px`
  * Min-Width: `160px`
  * Padding: `14px 32px`
  * Border Radius: `8px`
  * Font Size: `16px`
  * Font Weight: `600`
  * Border: `1px solid` or `2px solid`
* **Hero Visual Container (Media/App Screenshot)**:
  * Width: `100%`
  * Max-Width: `640px` (split) up to `1024px` (centered below)
  * Height: `360px` – `480px` (Aspect ratio: ~16:9 or 4:3)
  * Border Radius: `16px` – `24px`
  * Box Shadow: `0 20px 40px -15px rgba(0, 0, 0, 0.15)`
  * Border: `1px solid rgba(0, 0, 0, 0.08)`

---

## 5. Complete Button System (Variants & Sizes)

All buttons at HubSpot follow standardized height, padding, font size, and border radius formulas.

### 5.1 Size Specification
| Variant | Height | Horizontal Padding | Vertical Padding | Font Size | Font Weight | Border Radius | Gap (Icon) |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Small (`btn-sm`)** | `36px` | `16px` | `6px` | `14px` | `600` | `6px` – `8px` | `6px` |
| **Medium (`btn-md`)**| `44px` | `24px` | `10px` | `15px` | `600` | `8px` | `8px` |
| **Large (`btn-lg`)** | `52px` | `32px` | `14px` | `16px` | `600` | `8px` – `10px`| `8px` |
| **Icon-Only (`btn-icon`)**| `40px` x `40px` | `0` | `0` | – | – | `8px` or `50%`| – |

### 5.2 Style Variants
1. **Primary Button**:
   * Background: Solid accent color
   * Text: Contrasting solid text
   * Border: None (`border: 1px solid transparent`)
   * Radius: `8px`
   * Hover: Scale `transform: translateY(-1px)` with elevation shadow
2. **Secondary / Outline Button**:
   * Background: Transparent
   * Border: `1px solid` (or `2px solid`)
   * Radius: `8px`
   * Hover: Subtle 5% background tint
3. **Tertiary / Ghost Button**:
   * Background: Transparent, Border: None
   * Radius: `8px`
   * Padding: `8px 16px`
   * Hover: Light background tint
4. **Text Link Button (Inline with chevron)**:
   * Padding: `0`
   * Font Size: `15px` – `16px`
   * Font Weight: `600`
   * Icon size: `16px x 16px`
   * Gap: `8px`
   * Hover: Arrow moves `translateX(4px)` with transition `200ms ease`

---

## 6. Cards, Grids & Container Components

### 6.1 Standard Product & Feature Cards
* **Card Outer Dimensions**:
  * Width: `100%` (fluid within grid cell)
  * Internal Padding: `32px` (Desktop) / `24px` (Mobile)
  * Border Radius: `16px`
  * Border: `1px solid` (subtle border)
  * Default Shadow: `0 4px 16px rgba(0, 0, 0, 0.04)`
  * Hover Shadow: `0 12px 32px rgba(0, 0, 0, 0.08)`
  * Hover Transform: `translateY(-4px)` (transition: `250ms cubic-bezier(0.4, 0, 0.2, 1)`)
* **Card Internal Structure**:
  * Vertical Gap between card sections: `20px` – `24px`
  * Icon / Badge container: `48px x 48px`, border-radius `10px` – `12px`
  * Card Heading (H3): `22px` – `24px`, Font Weight `600`
  * Card Body Text: `15px` – `16px`, Line Height `1.5`
  * Card Action / Footer Link: Font Weight `600`, Font Size `14px` – `15px`

### 6.2 Pricing Cards
* **Card Dimensions**:
  * Padding: `40px 32px`
  * Border Radius: `20px`
  * Featured Card: Raised with `2px solid` accent border and `scale(1.03)`
* **Price Value Typography**:
  * Currency symbol: `24px`, font-weight `600`, vertical-align `super`
  * Number: `48px` – `54px`, font-weight `700`, line-height `1.1`
  * Frequency term ("/month"): `14px` – `15px`, font-weight `400`
* **Feature List**:
  * Gap between items: `14px`
  * Checkmark icon size: `20px x 20px`
  * Item text size: `15px`, line-height `1.4`

### 6.3 Standard Grid Columns
* **2-Column Grid**: `grid-template-columns: repeat(2, 1fr); gap: 48px;`
* **3-Column Grid**: `grid-template-columns: repeat(3, 1fr); gap: 32px;`
* **4-Column Grid**: `grid-template-columns: repeat(4, 1fr); gap: 24px;`
* **Responsive Switch**:
  * `< 1024px`: 4-col collapses to 2-col; 3-col collapses to 2-col
  * `< 768px`: All grids collapse to `1fr` with `gap: 24px`

---

## 7. Form Controls & Input Fields

### 7.1 Field Sizing & Styling
* **Standard Text Input (`input[type="text"]`, `input[type="email"]`, `<select>`)**:
  * Height: `48px` (Standard desktop) / `40px` (Compact navigation form)
  * Horizontal Padding: `16px`
  * Vertical Padding: `12px`
  * Font Size: `15px` – `16px` *(Note: 16px minimum prevents iOS Safari auto-zoom)*
  * Line Height: `24px`
  * Border Radius: `8px`
  * Border: `1px solid` border (e.g. `1px solid #cbd6e2`)
  * Focus State: `outline: none; border-color: currentColor; box-shadow: 0 0 0 3px rgba(..., 0.2);`
* **Textarea (Multi-line)**:
  * Min-Height: `120px`
  * Padding: `14px 16px`
  * Font Size: `15px` – `16px`
  * Border Radius: `8px`
* **Input Labels**:
  * Font Size: `14px`
  * Font Weight: `600`
  * Margin Bottom: `6px` – `8px`
  * Display: `block`
* **Helper Text & Error Messages**:
  * Font Size: `13px`
  * Margin Top: `6px`
  * Line Height: `1.4`
* **Checkboxes & Radios**:
  * Width: `18px` – `20px`
  * Height: `18px` – `20px`
  * Border Radius: `4px` (Checkbox) / `50%` (Radio)
  * Label Margin Left: `10px`

---

## 8. Micro-Components: Badges, Pills, Tabs & Accordions

### 8.1 Badges & Pill Tags
* **Dimensions**:
  * Height: `28px` – `32px`
  * Padding: `4px 12px` (Small) / `6px 16px` (Regular)
  * Border Radius: `9999px` (Full Pill)
  * Font Size: `12px` – `13px`
  * Font Weight: `600` – `700`
  * Letter Spacing: `0.02em` – `0.04em`

### 8.2 Interactive Tab Bar
* **Tab Bar Container**:
  * Height: `48px` – `56px`
  * Gap: `8px` – `12px`
  * Border Bottom: `1px solid` base divider
* **Tab Button**:
  * Padding: `12px 20px`
  * Font Size: `15px`
  * Font Weight: `600`
  * Active Indicator: `border-bottom: 3px solid currentColor; margin-bottom: -1px;`

### 8.3 Accordion / FAQ Rows
* **Row Dimensions**:
  * Padding: `24px 0` (with `1px solid` border divider)
  * Title Font Size: `18px` – `20px`
  * Title Font Weight: `600`
  * Icon Size: `20px x 20px` (Plus/Minus or Chevron)
  * Content Padding Top: `12px`
  * Content Font Size: `16px`, Line Height `1.6`

---

## 9. Social Proof, Metrics & Testimonials

### 9.1 Metrics & Stat Callouts
* **Stat Number**:
  * Font Size: `48px` – `64px`
  * Font Weight: `700` – `800`
  * Line Height: `1.1`
  * Margin Bottom: `8px`
* **Stat Description**:
  * Font Size: `15px` – `16px`
  * Font Weight: `500`
  * Line Height: `1.4`

### 9.2 Logo Clouds (Customer / Partner Logos)
* **Row Container**:
  * Height: `56px` – `72px`
  * Gap: `48px` – `64px`
  * Align Items: `center`
  * Justify Content: `center`
* **Individual Logo Image**:
  * Max Height: `32px` – `40px`
  * Max Width: `120px` – `160px`
  * Object Fit: `contain`
  * Opacity: `0.75` (Hover: `1.0` with `transition: opacity 200ms`)

### 9.3 Testimonial Cards
* **Container**:
  * Padding: `40px 48px` (Desktop) / `24px` (Mobile)
  * Border Radius: `20px`
  * Border: `1px solid`
* **Quote Text**:
  * Font Size: `20px` – `24px`
  * Font Weight: `500`
  * Line Height: `1.45`
  * Margin Bottom: `24px`
* **Author Block**:
  * Avatar Size: `52px x 52px` (Circle, `border-radius: 50%`)
  * Name: `16px`, Font Weight `600`
  * Title / Role: `14px`, Font Weight `400`
  * Gap between avatar and info: `16px`

---

## 10. Pre-Footer Call to Action (CTA) Banner

HubSpot places a large, rounded high-impact banner before the footer.
* **Banner Dimensions**:
  * Padding: `64px 48px` (Desktop) / `40px 24px` (Mobile)
  * Border Radius: `24px`
  * Max-Width: `1280px`
  * Text Alignment: `center`
* **Banner Typography**:
  * Title: `36px` – `40px`, Font Weight `700`, Line Height `1.2`, Margin Bottom `16px`
  * Subtitle: `18px`, Line Height `1.5`, Margin Bottom `32px`, Max-Width `600px`
* **Banner Buttons**:
  * Height: `52px`
  * Padding: `14px 32px`
  * Border Radius: `8px`
  * Font Size: `16px`, Font Weight `600`

---

## 11. Footer Structure

* **Vertical Spacing**:
  * Padding Top: `80px`
  * Padding Bottom: `48px`
* **Grid Layout**:
  * Desktop: Multi-column `grid-template-columns: 2fr repeat(4, 1fr); gap: 48px;`
  * Mobile: `grid-template-columns: 1fr; gap: 32px;`
* **Column Header**:
  * Font Size: `14px` – `15px`
  * Font Weight: `700`
  * Letter Spacing: `0.04em`
  * Margin Bottom: `20px`
* **Footer Link List**:
  * Display: `flex`, `flex-direction: column`, `gap: 12px`
  * Link Font Size: `14px`
  * Line Height: `1.5`
  * Hover: text underline or color shift
* **Bottom Legal / Copyright Bar**:
  * Margin Top: `64px`
  * Padding Top: `24px`
  * Border Top: `1px solid`
  * Font Size: `13px`
  * Display: `flex`, `justify-content: space-between`, `align-items: center`

---

## 12. Non-Orange Color Palette Formulation

Your defined core brand tokens:
* **White**: `#FFFFFF`
* **Black / Deep Charcoal**: `#0B0F19` (or `#111827`)
* **Primary Deep Forest Green**: `#2f5d50` *(HSL: 164°, 33%, 27%)*
* **Secondary Soft Mint**: `#89cdbe` *(HSL: 167°, 43%, 67%)*

To achieve high-converting visual hierarchy (CTA buttons, highlight badges, notification pills) **without using orange**, here are the top 3 curated color harmonies backed by color theory:

### Option 1: Warm Amber Gold *(Top Recommendation — High Contrast Luxury)*
* **Accent Color**: `#D97706` (Deep Amber Gold) / `#F59E0B` (Vibrant Golden Honey)
* **Color Theory**: Yellow-gold is adjacent to green on the color wheel with high luminance. The green + gold pairing is universally recognized in luxury, institutional, and premium design (Rolex, Starbucks Reserve, classic fintech).
* **Where to use it**:
  * Primary conversion buttons ("Book a Consultation", "Sign Up")
  * Notification badges and star ratings
  * Attention-drawing highlights inside dark green containers (`#2f5d50`)
* **Why it beats orange**: It looks organic, warm, and sophisticated rather than like a construction or discount retail alert.

### Option 2: Terracotta Rose / Crimson Coral *(Vibrant Editorial Contrast)*
* **Accent Color**: `#E11D48` (Raspberry Crimson) or `#E05D5D` (Warm Terracotta Coral)
* **Color Theory**: Sits at the split-complementary position (~340°–350°) relative to `#2f5d50` (~164°).
* **Where to use it**:
  * Eye-catching pill tags ("New", "Popular")
  * Secondary call-to-action indicators
  * Micro-accents in charts and hero graphics
* **Visual Feel**: Striking, modern Scandinavian editorial tone, youthful and high-end.

### Option 3: Royal Electric Indigo *(Ultra-Clean Tech SaaS)*
* **Accent Color**: `#4F46E5` (Royal Indigo) / `#6366F1` (Electric Iris)
* **Color Theory**: Analogous cool progression from Teal (`#89cdbe`) & Forest (`#2f5d50`) into Indigo.
* **Where to use it**:
  * Tech feature badges, interactive toggles, secondary buttons, active nav indicators.
* **Visual Feel**: Calm, authoritative, cyber-secure, and trustworthy.

### Recommended Background Neutral (Warm Linen)
To make your `#2f5d50` and `#89cdbe` look soft and high-end:
* **Section Canvas Background**: `#F8F9FA` or `#F4F6F4` (subtle mint-tinted gray)
* **Warm Sand Alternative**: `#FAF8F5` (adds warmth against deep green)
