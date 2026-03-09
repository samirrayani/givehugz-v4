# GiveHugz v4 — Design System

## Soul Brief
There is a specific kind of comfort that only comes from pressure — the weight of a hand on your shoulder, the full-body release of being held. GiveHugz makes that feeling portable. These aren't stuffed animals. They're the physical shape of being held by someone who isn't going anywhere. The brand lives at the intersection of two truths most people feel but rarely say out loud: anxiety is a physical experience, and relief is also physical.

## Story Arc
1. **Recognition** — "You know that feeling." The tension, the shortened breath. The visitor feels seen.
2. **Revelation** — "There's a reason weight helps." Deep pressure therapy, swaddling, the physics of calm.
3. **Meeting** — "They have names. They're waiting." Products as introductions, not transactions.
4. **Trust** — "50,000 people sleep better tonight." Quiet confidence of social proof and press.
5. **Purpose** — "Every Hugz holds something bigger." Mental health mission, Inspiring Children Foundation.
6. **Invitation** — "Take one home." The gentlest possible conversion.

## Signature Moment
**"50,000+ people sleep better tonight."** — The oversized serif testimonial section. The social proof becomes the most visually dramatic section on the page, set in 5xl-7xl Petrona with a staggered 7/5 grid (one large testimonial, three smaller). A designer would screenshot this because it treats social proof as art, not a widget.

## Anti-Pattern Notes
This site could have been a pastel-colored toy store with a product grid hero, 3-column feature cards, and a "Shop Now" banner. It is not. The hero opens with an organic mesh gradient and poetic copy about the physical sensation of being held. Products are "met," not "shopped." The mission section is the most visually dramatic section (deep teal with wave SVG transitions). The middle of the page is the most interesting part, not the least.

## Color Palette
- **Primary teal**: `#108474` — CTAs, accents, star ratings, stat numbers (5% surgical accent)
- **Teal light**: `#1a9e8b` — Hover states
- **Teal dark**: `#0a6358` — Active/pressed states
- **Deep teal**: `#024a4a` — Dark sections (stats, mission), footer, headline text
- **Cream**: `#fff8e1` — Primary warm background (hero, origin story, newsletter, best sellers)
- **Soft pink**: `#ffcfc7` — Gift section background, secondary testimonials, accent touches
- **Mint**: `#edf5f5` — Featured products section, wholesale cards
- **Coral**: `#ff2626` — Sale badges only (used sparingly)
- **Dark text**: `#121212` — Body text base
- Palette derived from logo teal heart. Cream warmth counterbalances the cool teal.

## Typography
- **Headlines**: Petrona (serif) — weights 400-700, italic for emotional emphasis words
  - Hero: 5xl-7xl (responsive), leading-[1.05]
  - Section heads: 3xl-5xl
  - Stat numbers: 5xl-7xl
- **Body**: Poppins (sans-serif) — weights 300-700
  - Body text: base-lg, leading-relaxed
  - Minimum: 14px (xs for labels), 16px for body content
  - Line-height: 1.5-1.75 (relaxed)
- **Labels/Overlines**: Poppins, 10px, font-semibold, uppercase, tracking-[0.3em], text-teal/60
- All headings use font-petrona, all body uses font-poppins

## SVG Elements
- **HeartIcon**: Teal heart with face (eyes + smile) — favicon, logo, section decorations, empty states
- **WavePattern**: Organic SVG waves for section transitions (cream→deep-teal, deep-teal→mint). Fluid via preserveAspectRatio="none"
- **PawPrint**: Low-opacity (3%) paw print pattern — decorative background in origin story
- **HugArms**: Curved lines suggesting embrace — mission section decoration at 4% opacity
- **OrganicBlobs**: CSS-animated blob shapes using border-radius morphing — hero background

## Spacing Tokens
- Section padding: `py-24 lg:py-32` (primary), `py-20 lg:py-28` (secondary), `py-16 lg:py-24` (compact)
- Container: `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8`
- Overline to heading: `mb-4` to `mb-6`
- Heading to body: `mb-6` to `mb-8`
- Section heading to content: `mb-12 lg:mb-16`

## Section Rhythm (Homepage)
1. **Hero** (full-height, mesh gradient, organic blobs) — Beat 1: Recognition
2. **Press Marquee** (thin, animated, white/50 bg) — trust breathing room
3. **Origin Story** (cream, centered editorial, max-w-3xl) — Beat 2: Revelation
4. **Stats Break** (deep teal, wave transitions, oversized numbers) — visual punctuation
5. **Why Weighted** (white, sticky left + card grid right, 5/7 split) — editorial depth
6. **Mission** (deep teal, wave dividers, dramatic) — Beat 5: Purpose
7. **Featured Products** (mint, bento grid, first product featured) — Beat 3: Meeting
8. **Testimonials** (white, staggered 7/5 grid) — Beat 4: Trust (SIGNATURE MOMENT)
9. **Gift CTA** (soft pink/20, centered) — Beat 6: Invitation
10. **Newsletter** (cream, minimal) — lead capture

No two consecutive sections share a background. Dark sections (stats, mission) anchor the middle.

## Layout Patterns
- **Mesh gradient hero**: CSS radial-gradient layers + animated organic blobs (blob-morph keyframe)
- **Sticky editorial**: Left column sticky on scroll, right column scrolls (WhyWeighted)
- **Staggered testimonial grid**: 7/5 column split (one large, three stacked small)
- **Bento product grid**: First product spans col-span-2 row-span-2
- **Wave SVG transitions**: Between dramatic color shifts (white→deep-teal, deep-teal→mint)
- **Floating animation**: Hero product visual with 6s ease-in-out float cycle

## Motion
- Framer Motion scroll-triggered animations (useInView with once: true)
- Entry: opacity 0→1, y 20-40→0, stagger 0.08-0.15s per item
- Hero: sequential reveal (label → heading → body → CTAs → social proof → product visual)
- Blob morph: 15-25s CSS keyframe cycles (border-radius morphing)
- Float: 6s ease-in-out translateY cycle on hero product
- Marquee: 30s linear infinite for press logos
- Hover: scale-105 on product images (700ms), shadow elevation on cards
- Respects prefers-reduced-motion: YES (framer-motion handles this natively)

## Photography Direction
- Warm, soft-lit lifestyle shots (bedroom, couch, morning light)
- Products photographed being held, not just sitting on shelves
- Amber/honey color temperature in photography
- Mix of studio (white bg for PDP) and lifestyle (for sections)

## CTA Style
- Primary: `bg-teal text-white rounded-full px-8 py-4 font-semibold shadow-lg shadow-teal/20`
- Secondary: `border-2 border-deep-teal/15 rounded-full px-8 py-4`
- Ghost: text-teal with arrow icon, `hover:text-teal-light`
- All CTAs use rounded-full, Poppins font, 44px+ touch target height
