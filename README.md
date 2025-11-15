# jaimexu.dev

Personal portfolio website built with TypeScript, React, Tailwind CSS, and EmailJS. Viewable at [jaimexu.dev](https://jaimexu.dev)

## Features

- **Responsive Design**: Fully responsive layout that works on all device sizes
- **Modern UI**: Clean, modern interface with animated background elements
- **Contact Form**: Integrated contact form using EmailJS for email delivery
- **Smooth Scrolling**: Smooth section navigation with scroll animations
- **Accessibility**: Built with accessibility in mind, including ARIA labels and keyboard navigation
- **SEO Optimized**: Comprehensive meta tags for better search engine visibility

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **EmailJS** - Email service integration
- **Framer Motion** - Animation library
- **Font Awesome** - Icon library

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## Setup Instructions

1. **Clone the repository**

   ```bash
   git clone https://github.com/jaimexu8/jaimexu.dev.git
   cd jaimexu.dev
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**

   - Copy `.env.example` to `.env`:
     ```bash
     cp .env.example .env
     ```
   - Fill in your EmailJS credentials:
     - Get your EmailJS credentials from [EmailJS Dashboard](https://dashboard.emailjs.com/)
     - Add your service ID, template ID, and public key to `.env`

4. **Start the development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

### Project Structure

```
src/
├── components/          # React components
│   ├── BackgroundCircles.tsx
│   ├── ContactForm.tsx
│   ├── ErrorBoundary.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ProjectCard.tsx
│   ├── Projects.tsx
│   └── tracing-beam.tsx
├── constants/           # Constants and data
│   └── index.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── utils/              # Utility functions
│   └── cn.ts
├── assets/             # Static assets (images)
├── App.tsx             # Main app component
├── index.tsx           # Entry point
└── index.css           # Global styles
```

## Environment Variables

The following environment variables are required:

- `VITE_EMAILJS_SERVICE_ID` - Your EmailJS service ID
- `VITE_EMAILJS_TEMPLATE_ID` - Your EmailJS template ID
- `VITE_EMAILJS_PUBLIC_KEY` - Your EmailJS public key

See `.env.example` for the expected format.

## Deployment

### GitHub Pages

The project is configured for deployment to GitHub Pages:

1. **Build the project**

   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**
   ```bash
   npm run deploy
   ```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contact

- **Website**: [jaimexu.dev](https://jaimexu.dev)
- **Email**: jaimexu8@gmail.com
- **GitHub**: [@jaimexu8](https://github.com/jaimexu8)
- **LinkedIn**: [jaimexu8](https://linkedin.com/in/jaimexu8)
