# StruktX Documentation Website

A modern, developer-focused documentation website for the StruktX AI framework. Built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Modern Design**: Clean, professional design optimized for developers
- **Dark Mode**: Built-in dark/light mode toggle
- **Responsive**: Fully responsive design that works on all devices
- **Fast**: Built with Next.js 14 and optimized for performance
- **Type Safe**: Full TypeScript support for better development experience
- **Accessible**: WCAG compliant with proper semantic HTML and ARIA labels

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **UI Components**: Custom component library with class-variance-authority

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd struktx-docs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
struktx-docs/
├── app/                    # Next.js app directory
│   ├── docs/              # Documentation pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # UI components (buttons, etc.)
│   └── navigation.tsx    # Navigation component
├── lib/                  # Utility functions
├── public/               # Static assets
└── docs.json            # Original documentation config
```

## 🎨 Design System

### Colors
The website uses StruktX's brand colors:
- **Primary**: `#90E0EF` (Light blue)
- **Light**: `#00B4D8` (Medium blue)
- **Dark**: `#0077B6` (Dark blue)

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Code Font**: JetBrains Mono

### Components
- **Cards**: Hover effects with subtle shadows
- **Buttons**: Multiple variants (primary, secondary, outline, ghost)
- **Navigation**: Fixed header with backdrop blur

## 📝 Content Management

The website content is structured around the existing StruktX documentation:

### Documentation Sections
1. **Introduction** - Getting started and core concepts
2. **Architecture** - System design and components
3. **Configuration** - Setup and customization
4. **Examples** - Practical usage examples
5. **Middleware** - Hooks and processing
6. **API Reference** - Complete API documentation

### Adding New Content
1. Create new pages in the `app/docs/` directory
2. Update the navigation in `components/navigation.tsx`
3. Add any new components to the `components/` directory
4. Update the documentation sections in `app/docs/page.tsx`

## 🔧 Development

### Available Scripts

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
npm run type-check   # Run TypeScript type checking
```

### Code Style
- Use TypeScript for all new code
- Follow the existing component patterns
- Use Tailwind CSS for styling
- Implement proper accessibility features
- Add proper TypeScript types

### Component Guidelines
- Use the `cn()` utility for conditional classes
- Implement proper prop interfaces
- Add proper JSDoc comments for complex components
- Use Framer Motion for animations

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your repository to Vercel
2. Vercel will automatically detect Next.js
3. Deploy with default settings

### Other Platforms
The site can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

Dark mode is implemented using CSS custom properties and Tailwind's dark mode feature. The theme preference is stored in localStorage and can be toggled via the navigation.

## 🔍 SEO

The website includes:
- Proper meta tags and Open Graph data
- Structured data for better search engine understanding
- Optimized images and assets
- Fast loading times

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

If you encounter any issues or have questions:
1. Check the existing documentation
2. Search existing issues
3. Create a new issue with detailed information

---

Built with ❤️ for the StruktX community 