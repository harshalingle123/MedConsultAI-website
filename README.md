# MedConverse AI Website

A modern, animated healthcare AI landing page.

## Folder Structure

```
Website/
├── index.html              # Main landing page (Convert Conversations Into Care)
├── steps.html              # "How It Works" - 4 Simple Steps page
├── about-us.html           # About Us page
├── case-studies.html       # Case Studies page
├── faq.html                # FAQ page
├── integrations.html       # Integrations page
├── resources.html          # Resources page
├── instruction.md          # Project development instructions
├── README.md               # This file - project documentation
├── .gitignore              # Git ignore file
├── .htaccess               # Apache URL rewriting for clean URLs
│
├── css/                    # Stylesheets
│   ├── styles.css          # Home page stylesheet with animations
│   ├── steps.css           # Steps page stylesheet
│   ├── about-page.css      # About page styles
│   ├── case-studies.css    # Case studies styles
│   ├── faq-page.css        # FAQ page styles
│   ├── integrations-page.css  # Integrations page styles
│   └── resources-page.css  # Resources page styles
│
├── js/                     # JavaScript files
│   ├── main.js             # Home page scripts (smooth scroll)
│   └── steps.js            # Steps page animations & interactions
│
├── assets/                 # Static assets
│   ├── images/             # Images and graphics
│   │   ├── home.png        # Home page reference design
│   │   ├── Image1.png      # Steps page reference design
│   │   ├── image-2.png     # Additional reference images
│   │   ├── image-3.png
│   │   ├── image-4.png
│   │   ├── image-5.png
│   │   └── image-6.png
│   └── fonts/              # Custom fonts (reserved for future use)
│
└── .claude/                # Claude Code configuration (hidden)
    └── skills/             # Custom skills for this project
```

## Pages

### Home Page (`index.html`)
- Hero section with animated dashboard preview
- Convert Conversations Into Care headline
- HIPAA compliance badges
- Real-time analytics visualization with animated dashboard
- Interactive stat cards
- Trust section with client logos
- Features showcase with 5 feature cards

### How It Works (`steps.html`)
- Clean 4-step process visualization matching Image1.png design
- Light blue rounded background section (#EEF5FF)
- Numbered step circles with large icons (88x88px)
- Simple step descriptions without mock cards
- Horizontal stats bar with 4 metrics (+85%, -70%, +40%, 4.9/5)
- Blue gradient CTA section with trial info
- Smooth scroll animations and transitions

### About Us (`about-us.html`)
- Company information and mission
- Team introduction
- Company values and culture

### Case Studies (`case-studies.html`)
- Customer success stories
- Real-world implementation examples
- ROI and metrics

### FAQ (`faq.html`)
- Frequently asked questions
- Product information
- Troubleshooting guides

### Integrations (`integrations.html`)
- Third-party integrations
- API documentation
- Integration guides

### Resources (`resources.html`)
- Blog posts
- Whitepapers
- Documentation links

## Features

- Fully responsive design (desktop, tablet, mobile)
- Professional typography (DM Sans for steps page, Inter for home page)
- Animated dashboard preview with scale effects
- HIPAA compliance badges with icons
- Real-time analytics visualization in dashboard
- Interactive stat cards with hover effects and animations
- Animated number counters using Intersection Observer
- Modern gradient CTA sections with pulse effects
- Smooth page transitions and scroll animations
- Light blue background section for "How It Works"
- Horizontal stats bar with dividers
- Step-by-step flow with arrow connectors
- Professional color scheme (Blue, Purple, Green, Orange)

## Technologies

- HTML5 (semantic markup)
- CSS3 (animations, transitions, keyframes, flexbox, grid)
- JavaScript (ES6+)
- Google Fonts (Inter for home, DM Sans for steps page)
- Intersection Observer API for scroll-triggered animations
- SVG icons (custom-designed for each step)
- CSS custom properties (variables) for theming
- Responsive design with media queries

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Design Notes

### Steps Page Design Philosophy
The "How It Works" page (`steps.html`) was designed to match the reference design in `Image1.png`:

- **Clean Layout**: Light blue (#EEF5FF) rounded background creates visual separation
- **Simplified Icons**: Large 88x88px icons with colored backgrounds (blue, purple, green, orange)
- **No Mock Cards**: Removed complex chat/calendar mockups for cleaner presentation
- **Horizontal Stats**: Changed from grid layout to single horizontal bar with dividers
- **Arrow Connectors**: Dashed arrows between steps aligned to icon centers
- **Professional Typography**: DM Sans font family for consistency
- **Responsive**: Scales down to 2-column then single-column on smaller screens

### Color Palette
- **Blue**: #2668FF (Primary, CTA backgrounds)
- **Purple**: #8B6CFF (Step 2)
- **Green**: #20C38F (Step 3, success states)
- **Orange**: #F7A61D (Step 4)
- **Background**: #EEF5FF (Steps section)
- **Text**: #0F1C36 (Primary text)
- **Text Light**: #5A6B8C (Secondary text)

## Navigation & URLs

All pages are linked with `.html` extensions for maximum compatibility with local development servers:

- Home: `index.html`
- How It Works: `steps.html`
- About: `about-us.html`
- Case Studies: `case-studies.html`
- FAQ: `faq.html`
- Integrations: `integrations.html`
- Resources: `resources.html`

### Optional: Clean URLs for Production

The included `.htaccess` file can provide clean URLs (without `.html`) when deployed to an Apache server:
- Automatically adds `.html` extension when serving pages
- Redirects `.html` URLs to clean URLs (301 permanent redirect)
- Prevents directory browsing
- Sets UTF-8 as default charset

**This is optional** - the site works perfectly with `.html` extensions in URLs.

## Getting Started

### Local Development
1. Open `index.html` in your web browser, or
2. Use a local development server:
   - **Live Server** (VS Code extension) - recommended
   - `python -m http.server 8000` (Python 3)
   - `php -S localhost:8000` (PHP)

### Production Deployment
Upload all files to your web server. The `.htaccess` file will provide clean URLs if using Apache.

## Future Enhancements

- Additional pages (About, Features detailed, Pricing, Contact)
- Form validation for CTA buttons
- Backend API integration
- User authentication
- Admin dashboard
- Analytics tracking
