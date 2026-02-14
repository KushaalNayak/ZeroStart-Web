# ZeroStart.dev - Official Website

> **Start. Build. Deploy. In Seconds.**

The official landing page for ZeroStart CLI - The ultimate CLI tool for beginner web developers.

## 🌟 Features

- **Beautiful Landing Page** with animated Orb component using WebGL
- **Comprehensive Commands Page** showcasing all 31 CLI commands
- **Responsive Design** optimized for all devices
- **Modern Tech Stack** with React, TypeScript, Vite, and Tailwind CSS
- **Smooth Animations** powered by Framer Motion
- **Interactive UI** with hover effects and micro-animations

## 🚀 Quick Start

### Prerequisites

- Node.js 18 or newer
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/ZeroStart.dev.git

# Navigate to project directory
cd ZeroStart.dev

# Install dependencies
npm install

# Start development server
npm run dev
```

The site will be available at `http://localhost:5173`

## 📦 Tech Stack

- **Framework**: React 19 with TypeScript
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion 12
- **Icons**: Lucide React
- **WebGL**: OGL (for Orb component)
- **Routing**: React Router DOM 6

## 🎨 Project Structure

```
ZeroStart.dev/
├── src/
│   ├── components/
│   │   ├── Orb.tsx          # WebGL animated orb component
│   │   └── Orb.css          # Orb styles
│   ├── pages/
│   │   ├── Home.tsx         # Landing page
│   │   └── Commands.tsx     # Commands reference page
│   ├── App.tsx              # Main app with routing
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.js      # Tailwind configuration
└── package.json            # Dependencies
```

## 📄 Pages

### Home Page (`/`)
- Hero section with animated Orb background
- Feature highlights
- Installation guide
- Usage examples
- Why ZeroStart section
- Detailed feature cards

### Commands Page (`/commands`)
- **Main Commands** (13): Core CLI functionality
- **Deployment Commands** (2): Vercel and Netlify deployment
- **Shortcut Commands** (18): Quick project scaffolding
  - DSA (4 commands)
  - Web Development (6 commands)
  - CLI Tools (4 commands)
  - Machine Learning (4 commands)

## 🎯 ZeroStart CLI Commands

### Main Commands (13)
- `zerostart init [project-name]` - Initialize new project
- `zerostart deploy` - Deploy to hosting provider
- `zerostart git` - Initialize Git repository
- `zerostart add [feature]` - Add features to project
- `zerostart env` - Manage environment variables
- `zerostart test` - Set up testing framework
- `zerostart build` - Build for production
- `zerostart dev` - Start development server
- `zerostart clean` - Clean build artifacts
- `zerostart update` - Update CLI
- `zerostart docs` - Open documentation
- `zerostart --help` - Display help
- `zerostart --version` - Display version

### Deployment Commands (2)
- `zerostart deploy-vercel` - Deploy to Vercel
- `zerostart deploy-netlify` - Deploy to Netlify

### Shortcut Commands (18)

**DSA (4)**
- `zerostart dsa-py` - Python DSA project
- `zerostart dsa-java` - Java DSA project
- `zerostart dsa-cpp` - C++ DSA project
- `zerostart dsa-node` - Node.js DSA project

**Web Development (6)**
- `zerostart web-react` - React web app
- `zerostart web-html` - Static HTML site
- `zerostart web-node` - Node.js/Express app
- `zerostart web-py` - Python Flask/Django app
- `zerostart web-java` - Java Spring Boot app
- `zerostart web-cpp` - C++ web server

**CLI Tools (4)**
- `zerostart cli-py` - Python CLI app
- `zerostart cli-node` - Node.js CLI tool
- `zerostart cli-java` - Java CLI app
- `zerostart cli-cpp` - C++ CLI app

**Machine Learning (4)**
- `zerostart ml-py` - Python ML project
- `zerostart ml-node` - Node.js ML project
- `zerostart ml-java` - Java ML project
- `zerostart ml-cpp` - C++ ML project

## 🛠️ Development

### Available Scripts

```bash
# Start development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Building for Production

```bash
npm run build
```

The optimized build will be in the `dist/` directory.

## 🎨 Customization

### Colors

The color scheme is defined in `src/index.css` using Tailwind CSS custom properties:

- **Accent Color**: `#3b82f6` (Blue)
- **Background**: `#000000` (Black)
- **Text**: `#ffffff` (White)

### Orb Component

Customize the Orb component in `src/components/Orb.tsx`:

```tsx
<Orb
  hue={260}              // Color hue (0-360)
  hoverIntensity={2}     // Hover effect intensity
  rotateOnHover={true}   // Enable rotation on hover
  forceHoverState={false} // Force hover state
  backgroundColor="#000000" // Background color
/>
```

## 📱 Responsive Design

The site is fully responsive and optimized for:
- Desktop (1920px+)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (320px - 767px)

## 🌐 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### GitHub Pages

```bash
# Build
npm run build

# Deploy to gh-pages branch
npx gh-pages -d dist
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Kushh**

- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/yourprofile)

## 🙏 Acknowledgments

- [OGL](https://github.com/oframe/ogl) for the WebGL library
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Lucide](https://lucide.dev/) for beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [Vite](https://vitejs.dev/) for blazing fast builds

## 📊 Project Stats

- **Total Commands**: 31
- **Main Commands**: 13
- **Deployment Commands**: 2
- **Shortcut Commands**: 18
- **Supported Languages**: Python, Java, C++, Node.js
- **Project Types**: DSA, Web, CLI, ML

---

**Built with ❤️ by Kushh**
