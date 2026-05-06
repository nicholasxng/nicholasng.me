---
name: Amber Tech Narrative
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#504535'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#827562'
  outline-variant: '#d5c4af'
  surface-tint: '#7e5700'
  primary: '#7e5700'
  on-primary: '#ffffff'
  primary-container: '#dfa129'
  on-primary-container: '#573b00'
  inverse-primary: '#fdbb42'
  secondary: '#5e5e5e'
  on-secondary: '#ffffff'
  secondary-container: '#e2e2e2'
  on-secondary-container: '#646464'
  tertiary: '#5f5e59'
  on-tertiary: '#ffffff'
  tertiary-container: '#aeaca6'
  on-tertiary-container: '#41403c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdeac'
  primary-fixed-dim: '#fdbb42'
  on-primary-fixed: '#281900'
  on-primary-fixed-variant: '#604100'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c6'
  on-secondary-fixed: '#1b1b1b'
  on-secondary-fixed-variant: '#474747'
  tertiary-fixed: '#e5e2db'
  tertiary-fixed-dim: '#c9c6c0'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#474742'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  headline-xl:
    fontFamily: Epilogue
    fontSize: 4.5rem
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Epilogue
    fontSize: 3rem
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Epilogue
    fontSize: 2rem
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 1.25rem
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 1rem
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: Space Grotesk
    fontSize: 0.875rem
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.1em
  button:
    fontFamily: Space Grotesk
    fontSize: 1rem
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.02em
spacing:
  container-max: 1280px
  gutter: 2rem
  section-gap: 8rem
  stack-sm: 0.5rem
  stack-md: 1.5rem
  stack-lg: 3rem
---

## Brand & Style

The design system evolves the high-energy, personal brand of a technical leader into a sophisticated, editorial-inspired digital experience. It maintains the original "Bold & High-Contrast" spirit but shifts from a raw, DIY aesthetic to a refined "Modern Minimalist" approach with Neo-Brutalist undertones.

The target audience consists of recruiters, fellow tech executives, and collaborators who value clarity, directness, and personality. By introducing more intentional whitespace and a structured typography scale, the UI evokes a sense of organized expertise and approachable authority. The visual mood is professional yet energetic, utilizing sharp lines and a "less but better" philosophy to let the content and professional photography lead the narrative.

## Colors

This design system utilizes a high-contrast palette anchored by the signature Amber (#DFA129). To modernize the experience, we move away from using the primary yellow as a full-page background and instead utilize it for high-impact section blocks, accents, and interactive elements.

- **Primary:** The core brand energy, used for key calls-to-action and thematic section backgrounds.
- **Secondary:** Pure black for maximum legibility in typography and structural borders.
- **Tertiary:** A soft, warm neutral introduced to provide visual relief and improve readability in long-form text sections.
- **Neutral:** A deep charcoal used for secondary text and UI elements to soften the harshness of pure black where necessary.

## Typography

The typography scale is the primary driver of the system's modernization. We replace the generic Helvetica with a pairing of three distinct fonts:

- **Epilogue (Headlines):** A geometric sans with an editorial feel, providing the "bold" energy required for the brand. It is used in heavy weights with tight letter spacing for impact.
- **Work Sans (Body):** Selected for its exceptional legibility and professional, grounded nature. It handles long-form biographical text with ease.
- **Space Grotesk (UI/Labels):** Adds a technical, futuristic edge to small metadata, dates, and navigation elements, reflecting the "Technical Program Manager" role.

Whitespace between typographic elements should be generous to allow the information-heavy resume sections to breathe.

## Layout & Spacing

The design system employs a **fixed grid** approach for content containment while allowing background colors to bleed edge-to-edge. A 12-column grid is used for the desktop experience, with a focus on asymmetrical layouts that mirror the original portfolio's dynamic feel.

- **Sectioning:** Vertical rhythm is established through significant gaps (8rem+) between major content blocks to create a "gallery" feel.
- **Asymmetry:** Text and imagery should often be offset (e.g., text occupying 5 columns, image occupying 7) to maintain visual interest.
- **Margins:** A minimum safe margin of 2rem is maintained on mobile, scaling up to center the container on larger screens.

## Elevation & Depth

In alignment with the Neo-Brutalist and Modern Minimalist influences, the design system avoids shadows and blurs. Depth is communicated strictly through **Tonal Layers** and **Bold Borders**.

- **Surfaces:** Different content sections use solid background colors (#DFA129, #000000, or #FFFFFF) to create a clear "stacked" appearance.
- **Borders:** Thin (1px) or Thick (4px) black borders are used to define containers and buttons, providing a tactile, "printed" quality.
- **Interaction:** Depth change is signaled through color inversion (e.g., a black button turning primary yellow on hover) rather than physical elevation.

## Shapes

The shape language is strictly **Sharp (0px)**. The absence of rounded corners emphasizes the technical, precise nature of the brand. This applies to buttons, input fields, image containers, and section dividers.

To break the rigidity of the sharp grid, professional photography should use clean rectangular crops, while playful illustrations can be treated as floating elements without containers. Horizontal dividers (1px black lines) are used frequently to separate chronological list items.

## Components

- **Buttons:** Solid black background with white or primary yellow text. Sharp corners. Hover state involves a 100% color fill change or a "thick border" offset effect.
- **Input Fields:** Minimalist design featuring a bottom-border only (2px black). Labels use the `label-caps` typography style.
- **Experience Cards:** Non-elevated containers separated by horizontal rules. The "Company Name" uses `headline-md` while the "Duration" uses `label-caps`.
- **Chips/Tags:** Small rectangular blocks with 1px black borders. Used for technical skills or tools.
- **Navigation:** Clear, uppercase links in `label-caps`. The active state is indicated by a solid underline or a background highlight in the primary color.
- **Contact Form:** High-contrast layout with intentional spacing between label and input to emphasize the "clean grid" philosophy.