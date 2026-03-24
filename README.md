# Debolina Das - Portfolio Website

A modern, interactive portfolio website built with Next.js, featuring 3D animations, smooth transitions, and a comprehensive showcase of projects, experience, and achievements.


## ✨ Features

- **Interactive 3D Elements**: GitHub-style globe and card hover effects
- **Smooth Animations**: Scroll-triggered animations with staggered entrance effects
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern UI/UX**: Clean design with glass morphism and gradient effects
- **Floating Navigation**: Smooth scrolling navigation with section linking
- **Dynamic Sections**: 
  - Hero with spotlight effect
  - About (Bento Grid layout)
  - Projects with 3D tilt cards
  - Education timeline
  - Achievements & Publications
  - Languages with animated progress bars
  - Certifications with company logos
  - Work Experience with canvas reveal effects

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **3D Effects**: Three.js
- **UI Components**: Custom components with Aceternity UI
- **Icons**: React Icons
- **Language**: TypeScript

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── ui/
│   │   ├── BentoGrid.tsx
│   │   ├── FloatingNavbar.tsx
│   │   ├── Pin.tsx
│   │   └── CanvasRevealEffect.tsx
│   ├── AchievementsPublications.tsx
│   ├── Certifications.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Grid.tsx
│   ├── Hero.tsx
│   ├── Languages.tsx
│   └── RecentProjects.tsx
├── data/
│   └── index.ts
└── public/
    └── [assets]
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/debolina-d/portfolio.git
cd portfolio
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Customization

### Personal Information
Update your details in `data/index.ts`:
- Navigation items
- Projects
- Work experience
- Education
- Achievements
- Certifications
- Languages

### Styling
- Modify colors in `tailwind.config.ts`
- Update global styles in `app/globals.css`
- Customize animations in individual components

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: > 1024px

## 🎯 Key Sections

### Hero Section
- Animated spotlight effect
- Dynamic background with moving elements
- Call-to-action buttons

### Projects
- 3D tilt effect cards using PinContainer
- Grid layout (1/2/3 columns responsive)
- Full project titles with descriptions

### Experience
- Canvas reveal effect on hover
- Floating animations
- Color-coded cards for different roles

### Certifications
- Company logos with hover effects
- Scroll-triggered animations
- Responsive grid layout

## 🔧 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```


**Debolina Das**
- AI/ML Engineer & Full-Stack Developer
- Email: diyalinad13@gmail.com
- GitHub: [@debolina-d](https://github.com/debolina-d)
- LinkedIn: [debolina-das-tech13](https://linkedin.com/in/debolina-das-tech13)
