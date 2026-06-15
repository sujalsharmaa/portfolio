# Sujal Sharma - Portfolio Website

A modern, responsive portfolio website built with Next.js 14, React 18, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, dark-themed portfolio with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Built with Next.js for optimal performance
- **Smooth Animations**: Framer Motion animations for engaging interactions
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Sections**:
  - Hero section with call-to-action
  - About me with professional background
  - Technical skills organized by category
  - Professional certifications
  - Featured projects and portfolio work
  - Open source contributions
  - Technology stack with proficiency levels
  - Contact information and social links

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **UI Library**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React

## 📋 Prerequisites

- Node.js 18+
- npm or yarn

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/sujalsharmaa/portfolio.git
cd portfolio

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm run start
# or
yarn build
yarn start
```

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation component
│   ├── Footer.tsx          # Footer component
│   └── sections/           # Page sections
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── Skills.tsx
│       ├── Certifications.tsx
│       ├── Projects.tsx
│       ├── OpenSource.tsx
│       ├── TechStack.tsx
│       └── Contact.tsx
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 📝 Customization

### Update Your Information

1. **Hero Section**: Edit `components/sections/Hero.tsx`
2. **About Section**: Edit `components/sections/About.tsx`
3. **Skills**: Edit `components/sections/Skills.tsx`
4. **Certifications**: Edit `components/sections/Certifications.tsx`
5. **Projects**: Edit `components/sections/Projects.tsx`
6. **Open Source**: Edit `components/sections/OpenSource.tsx`
7. **Tech Stack**: Edit `components/sections/TechStack.tsx`
8. **Contact**: Edit `components/sections/Contact.tsx` and `components/Footer.tsx`

## 🎨 Colors & Styling

The portfolio uses a dark theme with primary (blue) and secondary (green) accent colors. Customize in `tailwind.config.js`:

```js
colors: {
  primary: '#3b82f6',      // Blue
  secondary: '#10b981',    // Green
}
```

## 📞 Contact

- **Email**: sujalsharma151@gmail.com
- **LinkedIn**: [linkedin.com/in/sujalsharma](https://linkedin.com/in/sujalsharma)
- **GitHub**: [github.com/sujalsharmaa](https://github.com/sujalsharmaa)
- **Medium**: [medium.com/@sujalsharma151](https://medium.com/@sujalsharma151)

## 📄 License

This project is open source and available under the MIT License.

## 🙏 Acknowledgments

- Next.js documentation
- Tailwind CSS
- Framer Motion
- Lucide React Icons
