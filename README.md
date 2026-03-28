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

## � Recent Updates

- **Mar 28, 2026** - Initial project setup with Vite and React 19
- **Mar 28, 2026** - Added authentication pages (Login & Register)
- **Mar 28, 2026** - Add to cart module with qty update using useState (React Hooks)
- **Mar 28, 2026** - Updated .gitignore to ignore lock.json files
- **Mar 28, 2026** - Added nvm version info (Node.js 20.19.x)
- **Mar 28, 2026** - Sample case implementation for add to cart functionality
- **Mar 28, 2026** - Learn how state works with React
- **Mar 27, 2026** - Event handler learning & save data to local storage
- **Mar 27, 2026** - Learn event handler implementation
- **Mar 27, 2026** - Nested component & rendering list
- **Mar 28, 2026** - Initial project setup with Vite and React 19
- **Mar 28, 2026** - Added authentication pages (Login & Register)
- **Mar 28, 2026** - Implemented product listing page
- **Mar 28, 2026** - Integrated Tailwind CSS v4 and React Router

## �📄 License

This project is for learning purposes.