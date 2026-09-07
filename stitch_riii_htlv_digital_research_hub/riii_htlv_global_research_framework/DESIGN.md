---
name: RIII-HTLV Global Research Framework
colors:
  surface: '#f8f9fb'
  surface-dim: '#d9dadc'
  surface-bright: '#f8f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f4f6'
  surface-container: '#edeef0'
  surface-container-high: '#e7e8ea'
  surface-container-highest: '#e1e2e4'
  on-surface: '#191c1e'
  on-surface-variant: '#564242'
  inverse-surface: '#2e3132'
  inverse-on-surface: '#f0f1f3'
  outline: '#897172'
  outline-variant: '#dcc0c0'
  surface-tint: '#a13c46'
  primary: '#5b0617'
  on-primary: '#ffffff'
  primary-container: '#7a1f2b'
  on-primary-container: '#ff8b92'
  inverse-primary: '#ffb3b5'
  secondary: '#555f6f'
  on-secondary: '#ffffff'
  secondary-container: '#d6e0f3'
  on-secondary-container: '#596373'
  tertiary: '#222c39'
  on-tertiary: '#ffffff'
  tertiary-container: '#38424f'
  on-tertiary-container: '#a4aebe'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdada'
  primary-fixed-dim: '#ffb3b5'
  on-primary-fixed: '#40000c'
  on-primary-fixed-variant: '#822530'
  secondary-fixed: '#d9e3f6'
  secondary-fixed-dim: '#bdc7d9'
  on-secondary-fixed: '#121c2a'
  on-secondary-fixed-variant: '#3d4756'
  tertiary-fixed: '#d9e3f4'
  tertiary-fixed-dim: '#bdc7d8'
  on-tertiary-fixed: '#121c28'
  on-tertiary-fixed-variant: '#3e4755'
  background: '#f8f9fb'
  on-background: '#191c1e'
  surface-variant: '#e1e2e4'
typography:
  display:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 80px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 40px
---

## Brand & Style

The design system is anchored in a **Modern Academic Minimalism** style. It prioritizes intellectual authority and global collaboration over clinical or pharmaceutical aesthetics. The visual narrative shifts away from "healthcare delivery" toward "scientific discovery and international networking."

The personality is sophisticated, institutional, and precise. It utilizes generous white space to allow complex research data to breathe, while employing high-quality typography to establish a clear information hierarchy. The interface avoids decorative trends in favor of structural integrity, reflecting the reliability of the International Research and Innovation Network on HTLV.

**Visual Principles:**
- **Clarity over Decoration:** Every element must serve a functional purpose in the dissemination of research.
- **Institutional Weight:** Large, purposeful margins and structured grids evoke the permanence of a global research body.
- **Collaborative Humanism:** Through realistic photography and approachable sans-serif type, the system emphasizes the people behind the science.

## Colors

The palette is professional and authoritative, centered around a deep Burgundy that conveys prestige and academic heritage.

- **Primary (#7A1F2B):** Used for key branding elements, primary actions, and signaling high-level navigation. It provides a scholarly "red ink" authority without the clinical feel of medical blue.
- **Text & UI Core (#1F2937):** A deep charcoal used for primary headings and body text to ensure maximum readability and a modern edge compared to pure black.
- **Surface Neutrals (#F3F4F6):** A light gray reserved for section backgrounds, content wells, and subtle UI divisions.
- **Background (#FFFFFF):** Pure white serves as the primary canvas, maximizing the "Lab-clean" aesthetic and ensuring high contrast for text-heavy research papers.

## Typography

This design system utilizes **Inter** exclusively to maintain a systematic, utilitarian, and highly legible appearance across all platforms. Inter’s tall x-height and neutral character make it ideal for long-form research papers and dense data tables.

**Usage Guidelines:**
- **Headlines:** Use Semi-Bold (600) or Bold (700) weights with slight negative letter-spacing for a tight, professional look.
- **Body Text:** Use Regular (400) for standard reading. Line heights are kept generous (1.5x) to prevent eye fatigue during technical reading.
- **Labels:** Use Medium (500) or Semi-Bold (600). Small labels (Caps) are used for categories, metadata, and overlines to add an editorial feel.

## Layout & Spacing

The layout philosophy follows a **Fixed Grid** model for desktop to maintain the structured feel of a printed academic journal, transitioning to a fluid model for mobile.

- **Grid:** A 12-column grid is used for desktop (1280px max-width). Components should generally span 4, 6, 8, or 12 columns to maintain symmetry.
- **Sectioning:** Large vertical gaps (80px+) are used between major content blocks to signify shifts in topic and reduce cognitive load.
- **Padding:** Content cards and containers should utilize internal padding of at least 32px to reinforce the "premium" institutional feel.
- **Responsive Behavior:** On tablet, margins reduce to 24px. On mobile, the grid collapses to a single column with 16px side margins.

## Elevation & Depth

To maintain a modern, flat institutional aesthetic, this design system avoids heavy shadows. Instead, it uses **Tonal Layers** and **Subtle Ambient Shadows** to define hierarchy.

- **Level 0 (Background):** Pure white (#FFFFFF) or light gray (#F3F4F6) for the main page surface.
- **Level 1 (Cards/Containers):** White surfaces resting on gray backgrounds use a very soft, diffused shadow (0px 4px 20px, 4% opacity black) to suggest a slight lift.
- **Level 2 (Interactive):** Hover states on cards increase shadow slightly or add a 1px border in the Primary Burgundy color to indicate interactivity.
- **Outlines:** Subtle 1px borders in #E5E7EB are used for input fields and list dividers to maintain structure without adding visual weight.

## Shapes

The shape language is defined by **Large Border Radii** for containers, contrasting with sharper internal elements. This creates a balance between "Modern/Approachable" and "Structured/Professional."

- **Cards & Major Sections:** Use `rounded-xl` (1.5rem/24px) to create a soft, contemporary framing for research content.
- **Buttons & Inputs:** Use `rounded-lg` (1rem/16px) for a consistent, refined look.
- **Interactive Tags/Chips:** Use a full pill-shape for categorization.
- **Imagery:** Photos should also utilize the `rounded-xl` radius to match the container language.

## Components

**Buttons:**
- **Primary:** Solid Burgundy (#7A1F2B) with white text. No gradients.
- **Secondary:** Ghost style with a Burgundy border and text. 
- **Sizing:** Large touch targets (min 48px height) with horizontal padding of 24px.

**Cards:**
- White background with a 1px #E5E7EB border.
- Used for research abstracts, news items, and member profiles.
- Images within cards should be top-aligned and bleed to the edges of the top corners.

**Inputs & Forms:**
- Labels are always top-aligned in `label-md` weight.
- Input fields use a light gray background (#F9FAFB) and turn white on focus with a 2px Burgundy bottom border or outline.

**Chips & Badges:**
- Used for "Publication Year," "Region," or "Research Area."
- Small, uppercase text with a light tint of the primary color background (e.g., 10% opacity Burgundy).

**Imagery Guidelines:**
- Use high-resolution, realistic photography of diverse researchers in collaborative settings.
- Avoid "Blue-tinted" hospital stock photos. Focus on natural lighting and warm laboratory environments.
- Black and white photography can be used for "History" or "Legacy" sections to add an editorial touch.