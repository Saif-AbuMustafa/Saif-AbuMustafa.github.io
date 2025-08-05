# AI KEYS - Developer Guide

## 🗺️ Project Structure Map

### Core Application Files
```
src/
├── App.tsx                 # Main app with routing setup
├── main.tsx               # Application entry point
├── index.css              # Global styles & design system
└── vite-env.d.ts          # TypeScript environment definitions
```

### Pages (Main Content)
```
src/pages/
├── Index.tsx              # Homepage (redirects to Home.tsx)
├── Home.tsx               # Landing page with hero section
├── About.tsx              # Company information
├── Services.tsx           # Service overview page
├── Technology.tsx         # Technology stack details
├── Token.tsx              # AI KEYS token information
├── Wallet.tsx             # Wallet features
├── Travel.tsx             # Travel planning services
├── Logistics.tsx          # Logistics solutions
├── Education.tsx          # Educational services
├── Careers.tsx            # Job listings
├── Investors.tsx          # Investor relations
├── Contact.tsx            # Contact form and info
└── NotFound.tsx           # 404 error page
```

### Components
```
src/components/
├── layout/
│   ├── Navigation.tsx     # Main navigation bar
│   └── PageHeader.tsx     # Reusable page header component
├── ui/                    # Shadcn UI components (buttons, cards, etc.)
├── Footer.tsx             # Site footer
├── LanguageSwitcher.tsx   # Language selection
└── TokenDisplay.tsx       # Live token price display
```

### Services & Utilities
```
src/services/
└── tokenApi.ts            # Token price API integration

src/lib/
└── utils.ts               # Utility functions

src/hooks/
├── use-mobile.tsx         # Mobile detection hook
└── use-toast.ts           # Toast notifications

src/i18n/
└── index.ts               # Internationalization setup
```

## 🎨 Design System

### Color System (index.css)
- **Primary Colors**: `--primary`, `--primary-foreground`
- **Secondary Colors**: `--secondary`, `--secondary-foreground`
- **Fintech Blue**: `--fintech-blue` (brand color)
- **Gradients**: `--gradient-primary`, `--gradient-secondary`
- **Background**: `--background`, `--foreground`
- **Cards**: `--card`, `--card-foreground`

### Key Design Tokens
```css
/* Always use these instead of hardcoded colors */
bg-primary            /* Main brand background */
text-primary          /* Main brand text */
bg-gradient-primary   /* Primary gradient */
border-border         /* Consistent borders */
```

## 📝 How to Edit Different Sections

### 1. Homepage Content (src/pages/Home.tsx)
**Hero Section**:
- Line 42-65: Main headline and description
- Line 67-75: Call-to-action buttons

**Statistics**:
- Line 25-30: Update stats array with new numbers

**Services**:
- Line 32-47: Modify services array for new offerings

**Features**:
- Line 49-66: Add/edit feature highlights

### 2. Navigation Menu (src/components/layout/Navigation.tsx)
**Add New Menu Item**:
- Line 41-100: Add to `mainNavItems` array
- Include `label`, `href`, and optional `items` for dropdowns

**Dropdown Menus**:
- Services dropdown: Lines 47-58
- Company dropdown: Lines 59-70

### 3. Token Information (src/pages/Token.tsx)
**Live Price Display**:
- Uses `src/services/tokenApi.ts` for real-time data
- Contract address: `CSe37XvZTHGiS8UK3WoMy2xtDxwrjPA9RZ9RAbJZDYdK`

**Tokenomics**:
- Line 79-90: Update token distribution

**Platform Links**:
- Line 45-65 in `tokenApi.ts`: Add new trading platforms

### 4. Company Information (src/pages/About.tsx)
**Company Stats**:
- Line 25-30: Update key metrics

**Team Members**:
- Line 40-55: Add/edit leadership profiles

**Company Milestones**:
- Line 32-38: Add new achievements

### 5. Contact Information (src/pages/Contact.tsx)
**Contact Methods**:
- Line 58-75: Update email, phone, etc.

**Office Locations**:
- Line 77-89: Add new office addresses

## 🔧 Common Editing Tasks

### Adding a New Page
1. Create new file in `src/pages/`
2. Add route in `src/App.tsx` (line 40-55)
3. Add navigation link in `Navigation.tsx`

### Updating Styles
1. **Global styles**: Edit `src/index.css`
2. **Component styles**: Use Tailwind classes with design tokens
3. **New colors**: Add to CSS variables in `index.css`

### Adding New Features
1. Create component in `src/components/`
2. Add any required hooks in `src/hooks/`
3. Update relevant page to include new component

### Updating Token Information
1. **Price API**: Modify `src/services/tokenApi.ts`
2. **Display**: Edit `src/components/TokenDisplay.tsx`
3. **Contract**: Update contract address in tokenApi.ts

## 🚀 Development Workflow

### Local Development
```bash
npm install          # Install dependencies
npm run dev         # Start development server
npm run build       # Build for production
npm run preview     # Preview production build
```

### Making Changes
1. **Small UI changes**: Use Lovable's Visual Edit mode
2. **Code changes**: Edit files directly or use Lovable chat
3. **New features**: Break into small steps, test incrementally

### Best Practices
- Always use design system tokens (no hardcoded colors)
- Keep components small and focused
- Test on mobile and desktop
- Use TypeScript for type safety

## 📱 Responsive Design

### Breakpoints
- **Mobile**: Default (< 640px)
- **Tablet**: `sm:` (640px+)
- **Desktop**: `lg:` (1024px+)
- **Large**: `xl:` (1280px+)

### Key Responsive Patterns
```tsx
// Mobile-first approach
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  
// Hide on mobile, show on desktop
<div className="hidden lg:block">

// Different padding for mobile/desktop
<div className="px-4 lg:px-8">
```

## 🔄 Live Data Integration

### Token Price API
- **Service**: `src/services/tokenApi.ts`
- **APIs Used**: Jupiter, Birdeye (fallback to mock data)
- **Update Frequency**: Every 60 seconds
- **Contract**: CSe37XvZTHGiS8UK3WoMy2xtDxwrjPA9RZ9RAbJZDYdK

### Adding New APIs
1. Create service file in `src/services/`
2. Use React Query for caching
3. Add error handling and fallbacks

## 🌐 Internationalization

### Adding New Languages
1. Update `src/i18n/index.ts`
2. Add translation files
3. Use `useTranslation()` hook in components

### Current Setup
- **Primary**: English
- **Secondary**: Arabic (RTL support)
- **Switcher**: `src/components/LanguageSwitcher.tsx`

## 🎯 Key Files for Quick Edits

| What to Change | File to Edit |
|----------------|-------------|
| Homepage content | `src/pages/Home.tsx` |
| Navigation menu | `src/components/layout/Navigation.tsx` |
| Company info | `src/pages/About.tsx` |
| Token data | `src/pages/Token.tsx` |
| Contact details | `src/pages/Contact.tsx` |
| Colors/theme | `src/index.css` |
| Footer | `src/components/Footer.tsx` |

## 🚨 Important Notes

### Security
- No sensitive data in frontend code
- API keys should be backend-only
- All external links open in new tabs

### Performance
- Images optimized and lazy-loaded
- Code splitting by pages
- Minimal bundle size

### SEO
- Semantic HTML structure
- Meta tags in `index.html`
- Proper heading hierarchy

## 📞 Support

For technical questions or complex changes, refer to:
- Lovable documentation: https://docs.lovable.dev/
- React documentation: https://react.dev/
- Tailwind CSS: https://tailwindcss.com/docs

---

**Last Updated**: January 2025
**Version**: 1.0.0