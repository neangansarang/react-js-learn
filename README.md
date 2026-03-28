# React Beginner App

A React learning project built with Vite, React Router, and Tailwind CSS. This project demonstrates fundamental React concepts including components, routing, and modern styling approaches.

## 🚀 Tech Stack

- **React 19** - UI library
- **Vite 7** - Fast build tool and dev server
- **React Router DOM 7** - Client-side routing
- **Tailwind CSS 4** - Utility-first CSS framework
- **ESLint** - Code linting and best practices

## 📁 Project Structure

```
react-js-learn/
├── public/
│   └── images/              # Static image assets
├── src/
│   ├── components/
│   │   ├── Elements/        # UI elements
│   │   ├── Fragments/       # Fragment components
│   │   ├── Layouts/         # Layout components (AuthLayout)
│   │   └── pages/           # Page components
│   │       ├── login.jsx    # Login page
│   │       ├── register.jsx # Register page
│   │       └── products.jsx # Products page
│   ├── assets/              # Imported assets
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   ├── index.css            # Global styles
│   └── main.jsx             # Entry point
└── index.html               # HTML template
```

## 🛠️ Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run ESLint
npm run lint

# Preview production build
npm run preview
```

## 📦 Features

- **Authentication Pages**: Login and Register forms with layout
- **Product Page**: Product listing demonstration
- **Responsive Design**: Built with Tailwind CSS utilities
- **Client-side Routing**: Navigation using React Router
- **Hot Module Replacement**: Fast refresh during development

## 🎯 Learning Topics

This project covers:
- React components and props
- React Router for navigation
- Tailwind CSS utility classes
- Component composition
- Layout patterns
- Vite build configuration

## 🚦 Getting Started

### Prerequisites

- Node.js 20.19.x or higher
- nvm (Node Version Manager) recommended

```bash
nvm use 20.19
```

### Installation

1. Clone or navigate to the project directory
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser to `http://localhost:5173`

## 📝 Notes

- The main app currently renders the `RegisterPage` component
- Uncomment `LoginPage` in `App.jsx` to switch between pages
- Tailwind CSS v4 uses the new `@tailwindcss/vite` plugin for faster builds

## 📄 Recent Updates

### March 27, 2026 - Foundation & Basics
- **Nested Component & Rendering List** - Learning component composition and list rendering
- **Event Handler Implementation** - Understanding React event handling
- **Event Handler & Local Storage** - Saving data to browser's local storage

### March 28, 2026 - Project Setup & Features
- **Initial Project Setup** - Vite 7 with React 19 and Tailwind CSS v4
- **Authentication Pages** - Login & Register forms with AuthLayout
- **React Router Integration** - Client-side routing with React Router DOM 7
- **Product Listing Page** - Product display with image assets
- **Add to Cart Module** - Cart functionality with quantity update using useState (React Hooks)
- **State Management Learning** - Understanding how state works in React
- **Sample Case Implementation** - Practical add to cart functionality
- **Configuration Updates** - Updated .gitignore to ignore lock.json files
- **Node Version Info** - Added nvm version reference (Node.js 20.19.x)
- **Documentation Cleanup** - Replaced placeholder characters in README

## 📄 License

This project is for learning purposes.
