# Aaditya Raj — Cybersecurity Portfolio

A state-of-the-art, high-performance portfolio website engineered for speed and a premium user experience. Built with **Svelte 5 (Runes)**, **Tailwind CSS 4**, and **Vite 8**.

![Svelte](https://img.shields.io/badge/Svelte_5-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite_8-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 🛠️ Technology Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/) (Svelte 5 with Runes)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Icons**: [unplugin-icons](https://github.com/unplugin/unplugin-icons) (Iconify Lucide & Simple Icons)
- **State Management**: Svelte 5 Native Runes ($state, $derived)
- **Typography**: Inter Variable & Outfit Variable via Fontsource

## 📂 Project Structure

```text
src/
├── lib/
│   ├── actions/      # Performance-optimized Svelte actions (reveal, clickOutside)
│   ├── components/   # UI System (LiquidProgress, ParticleBackground, Shadcn-like components)
│   ├── data/         # Centralized portfolio content and experience data
│   └── utils.ts      # Tailwind merging and utility logic
├── routes/
│   ├── resume/       # Comprehensive professional resume page
│   ├── +layout.svelte # Global providers and ModeWatcher
│   └── +page.svelte  # Section-based landing page with lazy mounting
static/               # Optimized assets, logos, and CV PDF
```

## 🛠️ Development

### Setup
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

### Build & Validate
```bash
# Production build
pnpm build

# Preview production build locally
pnpm preview
```

## 📄 License
MIT License

## 📬 Contact
- **Email**: aaditya12raj@gmail.com
- **LinkedIn**: [Aaditya Raj](https://linkedin.com/in/aaditya-raj-390113324)
- **GitHub**: [@KronosWasTaken](https://github.com/KronosWasTaken)
