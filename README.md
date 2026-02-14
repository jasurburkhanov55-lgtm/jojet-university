# Jojet International University Website

A modern, multilingual university website built with React, TypeScript, Vite, and Tailwind CSS.

## Live Demo

**Website URL:** https://4uuhavozdlofo.ok.kimi.link

## Features

### Pages
- **Home** - Hero banner, Statistics counter, Latest News, Quick Links, Campus Gallery
- **About** - University Overview, Vision & Mission, History Timeline, Leadership Team
- **Academics** - Undergraduate/Graduate Programs, Faculties, Research Areas
- **Admissions** - Application Process, Requirements, Deadlines, Scholarships
- **Student Life** - Campus Facilities, Housing, Student Organizations, Events
- **News & Events** - News articles with categories, Upcoming events calendar
- **Contact** - Contact form, Campus locations, FAQ section

### Key Features
- **Multilingual Support** - English, Russian, and Uzbek languages
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop
- **Smooth Navigation** - All buttons and links are fully functional
- **Modern UI** - Professional academic design with blue and gold theme
- **Fast Performance** - Built with Vite for optimal loading speed
- **SEO Ready** - Proper HTML structure and meta tags

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 7
- **Styling:** Tailwind CSS 3.4
- **UI Components:** shadcn/ui (40+ pre-built components)
- **Icons:** Lucide React
- **Fonts:** Open Sans, Noto Serif

## Project Structure

```
├── public/              # Static assets (images, logo)
│   ├── logo.png
│   ├── hero-bg.jpg
│   ├── campus-1.jpg - campus-4.jpg
│   └── news-1.jpg - news-4.jpg
│
├── src/
│   ├── components/      # Reusable components
│   │   ├── ui/         # shadcn/ui components
│   │   ├── Header.tsx  # Navigation with dropdowns
│   │   └── Footer.tsx  # Footer with links
│   │
│   ├── context/         # React context
│   │   └── LanguageContext.tsx  # Language switching
│   │
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Academics.tsx
│   │   ├── Admissions.tsx
│   │   ├── StudentLife.tsx
│   │   ├── News.tsx
│   │   └── Contact.tsx
│   │
│   ├── translations/    # Language files
│   │   ├── en.json     # English
│   │   ├── ru.json     # Russian
│   │   └── uz.json     # Uzbek
│   │
│   ├── App.tsx          # Main app with routing
│   ├── App.css          # App styles
│   ├── index.css        # Global styles
│   └── main.tsx         # Entry point
│
├── index.html           # HTML template
├── package.json         # Dependencies
├── vite.config.ts       # Vite config
├── tailwind.config.js   # Tailwind config
└── tsconfig.json        # TypeScript config
```

## Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone or download the project:
```bash
cd jojet-university
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

4. Open http://localhost:5173 in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` folder.

## Customization

### Changing Colors
Edit `tailwind.config.js`:
```javascript
jojet: {
  blue: "#1b3b86",        // Primary blue
  "blue-light": "#2a4a9c",
  "blue-dark": "#142c66",
  gold: "#996600",         // Accent gold
  "gold-light": "#c9a227",
  "gold-dark": "#7a5200",
}
```

### Adding/Editing Content

**Pages:** Edit files in `src/pages/`

**Translations:** Edit files in `src/translations/`
- `en.json` - English content
- `ru.json` - Russian content
- `uz.json` - Uzbek content

**Images:** Replace files in `public/` folder

### Adding New Pages

1. Create a new file in `src/pages/` (e.g., `NewPage.tsx`)
2. Add the page component
3. Import and add to `App.tsx` routing
4. Add navigation link in `Header.tsx`

## GitHub Pages Deployment

See the detailed guide in `GITHUB_PUBLISHING_GUIDE.md` for step-by-step instructions.

Quick steps:
1. Create GitHub repository
2. Update `vite.config.ts` base URL to match repo name
3. Create `.github/workflows/deploy.yml`
4. Push to GitHub
5. Enable GitHub Pages in repository settings

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

This project is created for Jojet International University.

## Support

For issues or questions, please refer to the GitHub publishing guide or check the browser console for error messages.
