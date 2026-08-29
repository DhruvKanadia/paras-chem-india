---
name: Industrial Integrity
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#45464d'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#0051d5'
  on-secondary: '#ffffff'
  secondary-container: '#316bf3'
  on-secondary-container: '#fefcff'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#002114'
  on-tertiary-container: '#069669'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#003ea8'
  tertiary-fixed: '#85f8c4'
  tertiary-fixed-dim: '#68dba9'
  on-tertiary-fixed: '#002114'
  on-tertiary-fixed-variant: '#005137'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
  slate-dark: '#0F172A'
  industrial-blue: '#2563EB'
  chemical-green: '#059669'
  surface-gray: '#F8FAFC'
  border-subtle: '#E2E8F0'
typography:
  display:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-md:
    fontFamily: Hanken Grotesk
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
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.02em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 14px
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 28px
    fontWeight: '600'
    lineHeight: 36px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  margin-page: 48px
  gutter: 24px
  container-max: 1280px
---

## Brand & Style

This design system is engineered for the industrial B2B sector, specifically focusing on chemical distribution and procurement. The brand personality is **established, precise, and authoritative**, moving away from the soft aesthetics of consumer SaaS toward a structured, high-reliability interface.

The design style is **Corporate Modern with a Minimalist/Industrial edge**. It prioritizes information density and clarity over decorative flair. The aesthetic utilizes high-contrast ratios, rigid structures, and a distinct lack of excessive ornamentation to evoke a sense of operational excellence and institutional trust. Key visual markers include sharp-edged components, structured data grids, and a focus on functional transparency.

## Colors

The palette is rooted in a deep navy and crisp white foundation to establish a professional, "Blue Chip" corporate feel. 

- **Primary (Deep Navy):** Used for typography, headers, and primary navigation to ground the interface in authority.
- **Secondary (Industrial Blue):** Reserved for primary actions, links, and focused states, providing a clear path for procurement workflows.
- **Tertiary (Chemical Green):** Used specifically for status indicators (In Stock, Shipped, Approved) and "success" messaging, emphasizing growth and safety.
- **Neutral:** A range of slates is used for borders and secondary text, ensuring the interface remains high-contrast but easy to parse for long periods.

## Typography

Typography is used as a structural tool. **Hanken Grotesk** provides a sharp, contemporary neo-grotesque feel for headlines, while **Inter** ensures maximum legibility for complex data tables and body copy. 

**JetBrains Mono** is introduced as a functional accent for technical data such as SKU numbers, chemical formulas, and logistics timestamps, reinforcing the industrial and precise nature of the business. 

Maintain strict hierarchy by using the Primary Deep Navy for all headlines and the Neutral Slate for secondary body text. Avoid center-alignment; keep text left-aligned to mimic professional documentation.

## Layout & Spacing

The layout utilizes a **Fixed Grid** system for desktop to maintain a consistent, orderly presentation of data. A 12-column grid is standard, with 24px gutters.

- **Desktop (1280px+):** 12 columns, 48px page margins.
- **Tablet (768px - 1279px):** 8 columns, 32px page margins.
- **Mobile (Below 768px):** 4 columns, 16px page margins.

The spacing rhythm is based on a 4px scale (4, 8, 16, 24, 32, 48, 64). Ample whitespace should be used between major sections to prevent the interface from feeling cluttered, even when displaying dense data sets.

## Elevation & Depth

To maintain a grounded, industrial aesthetic, this design system avoids soft ambient shadows and floating layers. Depth is achieved through **Tonal Layering** and **Low-contrast Outlines**.

- **Surface Tiers:** The main background is pure white (#FFFFFF). Subtle content areas or sidebars use a light surface gray (#F8FAFC).
- **Outlines:** Use 1px solid borders (#E2E8F0) to define sections and cards. This creates a "blueprint" feel that is more robust than shadow-based elevation.
- **Active Elevation:** Only use a very tight, low-blur shadow (2px blur, 10% opacity) on interactive elements like buttons or active input fields to indicate focus without breaking the flat, structural aesthetic.

## Shapes

The shape language is strictly **Soft (4px - 8px)**. This provides just enough refinement to feel modern without losing the "solid" feel of industrial equipment. 

- **Standard Buttons/Inputs:** 4px radius.
- **Large Container/Cards:** 8px radius.
- **Status Pills:** 4px radius (avoid full pill-shaped rounds to stay consistent with the corporate tone).

Icons should follow a "Line" style with a 2px stroke width and minimal rounding on corners to match the UI.

## Components

- **Buttons:** Primary buttons use the Industrial Blue with white text. They are rectangular with a 4px corner radius. No gradients. Secondary buttons use a Slate border with no fill.
- **Data Tables:** These are the core of the experience. Use high-contrast headers in Deep Navy. Row hover states should use a subtle Surface Gray (#F8FAFC). Use JetBrains Mono for SKU and Batch numbers.
- **Input Fields:** Use 1px Slate borders. Upon focus, the border transitions to Industrial Blue with a subtle 1px inset glow. Labels are always visible above the field.
- **Cards:** Avoid heavy shadows. Define cards with a 1px #E2E8F0 border. Use 24px internal padding to maintain the "premium whitespace" narrative.
- **Status Badges:** Use the Chemical Green for "Available" or "Approved" statuses. Use a square-ish 4px radius.
- **Procurement Tracker:** A custom vertical stepper component using the 2px stroke style to show order progress from "Quote" to "Delivery."