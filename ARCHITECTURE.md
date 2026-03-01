# Ashik Vision Portfolio - Project Documentation

## 📁 Project Structure

```
ashikinvision/
├── public/                     # Static assets (served as-is)
│   ├── downloads/              # Downloadable files
│   ├── images/                 # Static images
│   └── projects/               # Project images
│
├── src/
│   ├── assets/                 # Imported assets (processed by Vite)
│   │   └── images/
│   │
│   ├── components/             # Reusable React components
│   │   ├── ui/                 # Design system components
│   │   │   ├── Badge.tsx       # Playful label/tag component
│   │   │   ├── Button.tsx      # Multi-variant button component
│   │   │   ├── Card.tsx        # Content container component
│   │   │   ├── OptimizedImage.tsx # Lazy-loading image component
│   │   │   ├── Section.tsx     # Page section wrapper
│   │   │   └── index.ts        # Barrel export
│   │   │
│   │   ├── Header.tsx          # Site header/navigation
│   │   ├── Footer.tsx          # Site footer
│   │   ├── Hero.tsx            # Home page hero section
│   │   ├── ProjectCard.tsx     # Project preview card
│   │   ├── NextProject.tsx     # Next project navigation
│   │   ├── InfiniteTicker.tsx  # Scrolling text ticker
│   │   └── ThemeToggle.tsx     # Dark/light mode toggle
│   │
│   ├── context/                # React context providers
│   │   └── ThemeContext.tsx    # Theme state management
│   │
│   ├── data/                   # Static data files
│   │   ├── projects.ts         # Project type definitions
│   │   ├── graphicProjects.ts  # Graphic design projects
│   │   └── uiUxProjects.ts     # UI/UX projects
│   │
│   ├── hooks/                  # Custom React hooks
│   │   ├── useSound.ts         # Audio feedback hook
│   │   ├── useLazyLoad.ts      # Intersection Observer hook
│   │   ├── useDebounce.ts      # Debounce utilities
│   │   └── index.ts            # Barrel export
│   │
│   ├── pages/                  # Page components
│   │   ├── Home.tsx            # Landing page
│   │   ├── About.tsx           # About page
│   │   ├── Contact.tsx         # Contact page
│   │   ├── Work.tsx            # Work overview
│   │   ├── GraphicDesign.tsx   # Graphic design portfolio
│   │   ├── UiUxDesign.tsx      # UI/UX portfolio
│   │   └── CaseStudy.tsx       # Individual case study
│   │
│   ├── styles/                 # Global styles
│   │   ├── design-tokens.css   # Design system variables
│   │   └── utilities.css       # Utility classes
│   │
│   ├── App.tsx                 # Root component with routing
│   ├── App.css                 # App-level styles
│   ├── main.tsx                # Entry point
│   ├── index.css               # Global styles & design system
│   ├── constants.ts            # App-wide constants
│   └── vite-env.d.ts           # TypeScript declarations
│
├── index.html                  # HTML template
├── vite.config.ts              # Vite configuration
├── tsconfig.json               # TypeScript config
├── tsconfig.app.json           # App TypeScript config
└── package.json                # Dependencies & scripts
```

---

## 🎨 Design System

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `--lime` | `#D4FF50` | Primary accent, hero backgrounds |
| `--pink` | `#FFAFC5` | Secondary accent, highlights |
| `--sky` | `#A8D8FF` | Tertiary accent |
| `--charcoal` | `#2C2E2A` | Primary text, borders |
| `--cream` | `#F9F7F3` | Page backgrounds |
| `--white` | `#FFFFFF` | Card backgrounds, text on dark |

### Typography

- **Font Family**: Inter (Google Fonts)
- **Display**: `clamp(4rem, 10vw, 10rem)` - 64-160px
- **Hero**: `clamp(3rem, 8vw, 7rem)` - 48-112px
- **Title**: `clamp(2rem, 5vw, 4rem)` - 32-64px
- **Body**: `1rem` - 16px

### Spacing (8px Grid)

`--space-1` (4px) through `--space-32` (128px)

### Motion

- **ease-out-expo**: `cubic-bezier(0.16, 1, 0.3, 1)` - Smooth deceleration
- **ease-elastic**: `cubic-bezier(0.68, -0.6, 0.32, 1.6)` - Bouncy
- **ease-bounce**: `cubic-bezier(0.34, 1.56, 0.64, 1)` - Playful overshoot
- **ease-smooth**: `cubic-bezier(0.25, 0.1, 0.25, 1)` - Standard ease

### Neo-Brutalism Style

- **Borders**: 2px solid charcoal
- **Shadows**: Hard offset shadows (4-8px)
- **Rounded**: Large border-radius (16-24px)
- **Colors**: High contrast, vibrant accents

---

## 🚀 Performance Optimizations

### Implemented

1. **Code Splitting**
   - Lazy loading pages with `React.lazy()`
   - Vendor chunk separation (react, framer-motion, router)

2. **Image Optimization**
   - `OptimizedImage` component with lazy loading
   - Skeleton loading states
   - Blur-up placeholders

3. **Font Loading**
   - `preconnect` to Google Fonts
   - `display=swap` for FOIT prevention

4. **CSS**
   - CSS code splitting
   - Design tokens for consistency
   - Utility classes for common patterns

5. **JavaScript**
   - Audio context lazy initialization
   - Debounced event handlers
   - Intersection Observer for visibility

### Build Optimizations

```bash
npm run build
```

- Target: `esnext` for modern browsers
- Minification: `esbuild`
- Chunk naming for cache optimization
- Source maps disabled in production

---

## 🧩 Component Usage

### Badge

```tsx
import { Badge } from '@/components/ui';

<Badge variant="default" size="md" rotate>
  Featured
</Badge>
```

### Button

```tsx
import { Button } from '@/components/ui';

// As button
<Button variant="primary" size="md" icon={<ArrowIcon />}>
  Get Started
</Button>

// As link
<Button as="link" to="/about" variant="secondary">
  Learn More
</Button>

// As external link
<Button as="a" href="https://example.com" target="_blank">
  Visit Site
</Button>
```

### Card

```tsx
import { Card } from '@/components/ui';

<Card variant="elevated" padding="lg" hover>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Actions</Card.Footer>
</Card>
```

### Section

```tsx
import { Section } from '@/components/ui';

<Section background="hero" spacing="lg">
  <Section.Header 
    badge="About"
    title="Our Story"
    subtitle="Learn about our journey"
    align="center"
  />
  {/* Content */}
</Section>
```

### OptimizedImage

```tsx
import { OptimizedImage } from '@/components/ui';

<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero image"
  aspectRatio={16/9}
  eager // For above-the-fold images
/>
```

---

## 🎣 Custom Hooks

### useSound

```tsx
import { useSound } from '@/hooks';

const { playHover, playClick, playSuccess } = useSound();

<button 
  onMouseEnter={playHover}
  onClick={playClick}
>
  Click Me
</button>
```

### useLazyLoad

```tsx
import { useLazyLoad } from '@/hooks';

const { ref, isInView, hasLoaded } = useLazyLoad({
  threshold: 0.1,
  rootMargin: '50px',
  triggerOnce: true,
});

<div ref={ref}>
  {isInView && <HeavyComponent />}
</div>
```

### useDebounce

```tsx
import { useDebounce, useDebouncedCallback } from '@/hooks';

// Debounced value
const debouncedSearch = useDebounce(searchTerm, 300);

// Debounced callback
const handleResize = useDebouncedCallback(() => {
  // Handle resize
}, 100);
```

---

## 📦 Path Aliases

| Alias | Path |
|-------|------|
| `@/*` | `src/*` |
| `@components/*` | `src/components/*` |
| `@pages/*` | `src/pages/*` |
| `@hooks/*` | `src/hooks/*` |
| `@data/*` | `src/data/*` |
| `@styles/*` | `src/styles/*` |
| `@assets/*` | `src/assets/*` |

---

## 🛠️ Scripts

```bash
npm run dev      # Start development server
npm run build    # Production build
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width |
|------------|-------|
| `sm` | 640px |
| `md` | 768px |
| `lg` | 1024px |
| `xl` | 1280px |
| `2xl` | 1536px |

---

## 🌙 Theme Support

The app supports light and dark modes via the `ThemeContext`:

```tsx
import { useTheme } from '@/context/ThemeContext';

const { theme, toggleTheme } = useTheme();
```

Theme is persisted to `localStorage` and applied via `data-theme` attribute on `<html>`.
