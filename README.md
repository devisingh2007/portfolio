<div align="center">

# ⚡ Devisingh Rajput — Developer Portfolio

### Modern · Animated · Responsive · SEO-Optimized

[![Live Demo](https://img.shields.io/badge/🌐_Live_Demo-devisingh--portfolio.netlify.app-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://devisingh-portfolio.netlify.app/)
[![GitHub](https://img.shields.io/badge/GitHub-devisingh2007-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/devisingh2007)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Devisingh_Rajput-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/devisingh-rajput)

<br/>

A high-performance, fully responsive developer portfolio built with **React 19**, **Tailwind CSS**, and **Framer Motion** — featuring premium glassmorphism UI, smooth scroll animations, dark/light theme support, and optimized SEO with structured data.

<br/>

![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-0055FF?style=flat-square&logo=framer&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_7-646CFF?style=flat-square&logo=vite&logoColor=white)
![Netlify](https://img.shields.io/badge/Netlify-00C7B7?style=flat-square&logo=netlify&logoColor=white)

</div>

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🎨 **Glassmorphism UI** | Premium frosted-glass panels, gradient accents, and depth effects throughout |
| 🌗 **Dark / Light Mode** | Theme toggle with CSS custom properties — instant, flicker-free switching |
| 🎬 **Scroll Animations** | Framer Motion `whileInView` reveals, staggered lists, and spring physics |
| 🧩 **Modular Sections** | Hero, About, Skills, Journey, Projects, Figma, Hackathons, Awards, Contact |
| 📱 **Fully Responsive** | Mobile-first design with adaptive layouts from `320px` to `4K` screens |
| 🔍 **SEO Optimized** | OpenGraph, Twitter Cards, JSON-LD structured data, canonical URLs, sitemap |
| 🚀 **Preloader** | Animated branded loading screen with smooth transition into content |
| 🌌 **Particle Background** | Interactive tsParticles canvas behind the hero section |
| 📊 **GitHub Stats** | Live GitHub contribution calendar and activity integration |
| 📜 **Resume Section** | Embedded PDF resume viewer with download capability |
| 🏆 **Hackathon Showcase** | Certificate thumbnails with badges and document viewer links |
| 📬 **Contact Form** | Fully styled contact section with email, phone, and address details |

---

## 🛠️ Tech Stack

### Frontend
| Technology | Purpose |
|-----------|---------|
| [React 19](https://react.dev/) | Component-based UI framework |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first CSS styling |
| [Framer Motion 12](https://www.framer.com/motion/) | Declarative animations & transitions |
| [React Icons](https://react-icons.github.io/) | Icon library (Font Awesome, Simple Icons, etc.) |
| [React Scroll](https://www.npmjs.com/package/react-scroll) | Smooth scroll navigation |
| [tsParticles](https://particles.js.org/) | Interactive particle backgrounds |
| [Lucide React](https://lucide.dev/) | Modern icon set |
| [react-github-calendar](https://grubersjoe.github.io/react-github-calendar/) | GitHub contribution heatmap |

### Development & Build
| Tool | Purpose |
|------|---------|
| [Vite 7](https://vitejs.dev/) | Lightning-fast build tool & dev server |
| [ESLint 9](https://eslint.org/) | Code linting & quality enforcement |
| [PostCSS](https://postcss.org/) | CSS processing pipeline |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | Vendor prefix automation |

### Deployment & SEO
| Service | Purpose |
|---------|---------|
| [Netlify](https://www.netlify.com/) | Hosting, CI/CD, and CDN |
| Google Search Console | Search indexing & verification |
| Sitemap + Robots.txt | Crawler guidance & page discovery |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── certificates/           # PDF certificates (internships, etc.)
│   ├── profile-og.jpg          # OpenGraph social preview image
│   ├── robots.txt              # Search engine crawler rules
│   ├── sitemap.xml             # XML sitemap for SEO
│   ├── _redirects              # Netlify SPA redirect rules
│   └── googlecaa0...html       # Google Search Console verification
│
├── src/
│   ├── assets/
│   │   ├── certificates/       # Hackathon certificate images
│   │   ├── projects/           # Project preview screenshots
│   │   └── profile.jpg         # Profile photo
│   │
│   ├── components/
│   │   ├── Navbar.jsx          # Fixed navigation bar with theme toggle
│   │   ├── Footer.jsx          # Site footer with credits
│   │   ├── Preloader.jsx       # Branded loading animation
│   │   ├── ScrollProgress.jsx  # Scroll progress indicator bar
│   │   ├── ParticlesBackground.jsx  # tsParticles canvas
│   │   ├── ThemeToggle.jsx     # Dark/Light mode switch
│   │   ├── GitHubStats.jsx     # GitHub contribution calendar
│   │   ├── SkillPyramid.jsx    # Triangular skill layout
│   │   ├── SkillWheel.jsx      # Circular skill visualization
│   │   ├── SkillSphere.jsx     # 3D skill sphere component
│   │   ├── SectionWrapper.jsx  # Reusable section container
│   │   ├── Skeleton.jsx        # Loading skeleton placeholder
│   │   ├── CertificateThumbnail.jsx  # Certificate preview card
│   │   └── ui/                 # Shared UI primitives
│   │
│   ├── data/
│   │   └── data.jsx            # Centralized data (projects, skills, etc.)
│   │
│   ├── sections/
│   │   ├── Hero.jsx            # Landing hero with CTA buttons
│   │   ├── About.jsx           # Bio and profile information
│   │   ├── Skills.jsx          # Technical skills showcase
│   │   ├── Experience.jsx      # Education & internship timeline
│   │   ├── Projects.jsx        # Project gallery with filters
│   │   ├── Figma.jsx           # Figma design showcase
│   │   ├── Hackathons.jsx      # Hackathon participation cards
│   │   ├── Achievements.jsx    # Awards and recognitions
│   │   └── Contact.jsx         # Contact form and details
│   │
│   ├── lib/                    # Utility functions
│   ├── App.jsx                 # Root application component
│   ├── main.jsx                # React DOM entry point
│   ├── index.css               # Global design system & CSS variables
│   └── App.css                 # App-level styles
│
├── index.html                  # HTML entry with SEO meta tags & JSON-LD
├── tailwind.config.js          # Tailwind CSS configuration
├── vite.config.js              # Vite build configuration
├── postcss.config.js           # PostCSS plugins
├── eslint.config.js            # ESLint rules
├── package.json                # Dependencies & scripts
└── README.md                   # You are here!
```

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** `v18+`
- **npm** `v9+` (or yarn/pnpm)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/devisingh2007/Portfolio.git

# 2. Navigate to the project
cd Portfolio

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

The app will be available at **`http://localhost:5173`**

### Build for Production

```bash
# Create optimized production build
npm run build

# Preview the production build locally
npm run preview
```

---

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server with HMR |
| `npm run build` | Create optimized production build in `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across the codebase |

---

## 🌐 Deployment

This portfolio is deployed on **Netlify** with continuous deployment from the `main` branch.

| Setting | Value |
|---------|-------|
| **Build Command** | `npm run build` |
| **Publish Directory** | `dist` |
| **Node Version** | `18+` |
| **Live URL** | [devisingh-portfolio.netlify.app](https://devisingh-portfolio.netlify.app/) |

The `public/_redirects` file handles SPA routing:
```
/*    /index.html   200
```

---

## 🎨 Customization

All portfolio content is managed from a single data file:

**`src/data/data.jsx`** — Edit this file to update:

- 🧑 Hero section content & profile info
- 💼 Work experience & education timeline entries
- 🛠️ Skills categories and individual skill items
- 📂 Project cards with links, tech tags, and images
- 🏆 Hackathon entries with certificates
- 🏅 Achievements & awards
- 📬 Contact information
- 🔗 Social media links

Theme colors and design tokens are controlled via **CSS custom properties** in `src/index.css`.

---

## 🔍 SEO Configuration

| Feature | Implementation |
|---------|----------------|
| **Meta Tags** | Title, description, keywords, author in `index.html` |
| **Open Graph** | Full OG tags for Facebook, LinkedIn sharing |
| **Twitter Cards** | `summary_large_image` card with preview |
| **JSON-LD** | `Person` structured data schema |
| **Canonical URL** | Self-referencing canonical tag |
| **Sitemap** | `public/sitemap.xml` for search crawlers |
| **Robots.txt** | `public/robots.txt` with sitemap reference |
| **Google Verification** | Search Console HTML verification file |

---

## 🤝 Connect

<div align="center">

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/devisingh2007)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/devisingh-rajput)
[![Twitter](https://img.shields.io/badge/X_(Twitter)-000000?style=for-the-badge&logo=x&logoColor=white)](https://x.com/Devisingh_CG)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/devisingh_0_2/)
[![YouTube](https://img.shields.io/badge/YouTube-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://www.youtube.com/@DevisinghRajput-h5x)
[![LeetCode](https://img.shields.io/badge/LeetCode-FFA116?style=for-the-badge&logo=leetcode&logoColor=black)](https://leetcode.com/u/Devisingh_Jawansingh_rajput/)
[![Email](https://img.shields.io/badge/Email-EA4335?style=for-the-badge&logo=gmail&logoColor=white)](mailto:devisinghrajput.cg@gmail.com)

</div>

---

<div align="center">

**⭐ If you found this project helpful, consider giving it a star!**

<br/>

Built with ❤️ by **Devisingh Rajput**

<sub>© 2026 Devisingh Rajput. All rights reserved.</sub>

</div>
