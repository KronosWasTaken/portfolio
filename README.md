# Aaditya Raj's Portfolio

A modern, responsive portfolio website showcasing cybersecurity expertise, projects, and professional experience.

## 🚀 Features

- **Modern Design**: Built with React, TypeScript, and Tailwind CSS
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Interactive Components**: Engaging UI elements with hover effects
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Fast Performance**: Optimized with Vite for quick loading times

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **UI Components**: Shadcn/ui component library
- **Build Tool**: Vite
- **Styling**: CSS-in-JS with Tailwind CSS
- **Icons**: Lucide React, React Icons

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Shadcn/ui components
│   ├── Header.tsx      # Navigation header
│   ├── Hero.tsx        # Hero section
│   ├── About.tsx       # About section
│   ├── Experience.tsx  # Work experience
│   ├── TechStack.tsx   # Technology stack
│   ├── Projects.tsx    # Project showcase
│   ├── Certifications.tsx # Professional certifications
│   ├── Contact.tsx     # Contact information
│   └── Footer.tsx      # Site footer
├── pages/              # Page components
│   ├── Index.tsx       # Main portfolio page
│   ├── Resume.tsx      # Resume page
│   └── NotFound.tsx    # 404 error page
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── main.tsx           # Application entry point
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/KronosWasTaken/portfolio.git
```

2. Install dependencies
```bash
cd portfolio
npm install
```

3. Start development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors and Themes

The color scheme can be customized in `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      highlight: "hsl(var(--highlight))",
      "highlight-foreground": "hsl(var(--highlight-foreground))",
      // ... other custom colors
    }
  }
}
```

### Content Updates

- **Personal Information**: Update `src/components/Hero.tsx` and other components
- **Projects**: Modify `src/components/Projects.tsx`
- **Experience**: Edit `src/components/Experience.tsx`
- **Skills**: Update `src/components/TechStack.tsx`

## 📱 Responsive Design

The portfolio is fully responsive and optimized for:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (320px - 767px)

## 🔧 Performance Optimizations

- **Code Splitting**: Automatic route-based code splitting
- **Image Optimization**: Optimized images and lazy loading
- **Bundle Analysis**: Built-in bundle analyzer for optimization
- **Tree Shaking**: Unused code elimination

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

- **Email**: aaditya12raj@gmail.com
- **GitHub**: [@KronosWasTaken](https://github.com/KronosWasTaken)

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
