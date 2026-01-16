# Portfolio Project

A modern, elegant portfolio website built with React, inspired by the design aesthetics of Brittany Chiang's portfolio. This project features smooth animations, a sophisticated split-panel layout, and an interactive user experience.

![Portfolio Preview](https://via.placeholder.com/800x400/0a1929/64b5f6?text=Portfolio+Preview)

## ✨ Features

- **Elegant Split-Panel Design**: Fixed left navigation with scrollable content on the right
- **Smooth Animations**: Staggered fade-in effects and interactive hover states
- **Interactive Cursor Glow**: Subtle radial gradient that follows your mouse movement
- **Scroll Progress Indicator**: Visual feedback showing reading progress
- **Active Navigation**: Links automatically highlight based on scroll position
- **Fully Responsive**: Adapts beautifully to all screen sizes
- **Accessible**: Built with semantic HTML and ARIA labels
- **Linkable Projects**: Each project card links to external URLs (GitHub, live demos, etc.)

## 🎨 Design Features

- **Color Palette**: Deep navy background with light blue accents
- **Typography**: DM Serif Display for headlines, Instrument Sans for body text
- **Micro-interactions**: Hover effects on cards, links, and navigation items
- **Modern CSS**: CSS Variables, Flexbox, Grid, and smooth transitions

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/portfolio-project.git
cd portfolio-project
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## 🛠️ Built With

- **React** - JavaScript library for building user interfaces
- **CSS3** - Modern styling with animations and transitions
- **Google Fonts** - DM Serif Display and Instrument Sans

## 📁 Project Structure

```
portfolio-project/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── About.js
│   │   ├── CursorGlow.js
│   │   ├── CursorGlow.css
│   │   ├── Experience.js
│   │   ├── Experience.css
│   │   ├── LeftPanel.js
│   │   ├── LeftPanel.css
│   │   ├── Projects.js
│   │   ├── Projects.css
│   │   ├── ScrollIndicator.js
│   │   └── ScrollIndicator.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
└── README.md
```

## 🎯 Customization

### Update Personal Information

1. **Name and Title**: Edit `src/components/LeftPanel.js`
```jsx
<h1>Your Name</h1>
<h2>Your Title</h2>
```

2. **About Section**: Edit `src/components/About.js`
```jsx
<p>Your about text here...</p>
```

3. **Social Links**: Update URLs in `src/components/LeftPanel.js`
```jsx
<a href="https://github.com/yourusername">...</a>
```

### Add Projects

Edit the `projects` array in `src/components/Projects.js`:

```jsx
const projects = [
  {
    name: 'Your Project Name',
    description: 'Project description...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: 'https://github.com/yourusername/your-project'
  },
  // Add more projects...
];
```

### Update Experience

Edit the `experiences` array in `src/components/Experience.js`:

```jsx
const experiences = [
  {
    period: '2022 — Present',
    title: 'Your Job Title',
    company: 'Company Name',
    description: 'Job description...',
    skills: ['Skill 1', 'Skill 2', 'Skill 3']
  },
  // Add more experience...
];
```

### Customize Colors

Update CSS variables in `src/index.css`:

```css
:root {
  --bg-primary: #0a1929;
  --accent-primary: #64b5f6;
  /* Modify colors as needed */
}
```

## 📦 Build for Production

Create an optimized production build:

```bash
npm run build
```

The build folder will contain optimized static files ready for deployment.

## 🚀 Deployment

### Deploy to Vercel

1. Install Vercel CLI
```bash
npm i -g vercel
```

2. Deploy
```bash
vercel
```

### Deploy to Netlify

1. Build the project
```bash
npm run build
```

2. Drag and drop the `build` folder to [Netlify](https://app.netlify.com/)

### Deploy to GitHub Pages

1. Install gh-pages
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"homepage": "https://yourusername.github.io/portfolio-project",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```

3. Deploy
```bash
npm run deploy
```

## 🎨 Design Credits

This project is inspired by [Brittany Chiang's portfolio](https://brittanychiang.com/), with custom modifications and React implementation.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📧 Contact

Your Name - [@yourusername](https://twitter.com/yourusername) - email@example.com

Project Link: [https://github.com/yourusername/portfolio-project](https://github.com/yourusername/portfolio-project)

---

⭐ If you found this helpful, please give it a star!
