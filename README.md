# Portfolio Project

A modern, elegant portfolio website built with React, designed for deployment on **connorkarr.com** using GitHub Pages. Inspired by the design aesthetics of Brittany Chiang's portfolio, this project features smooth animations, a sophisticated split-panel layout, and an interactive user experience.

## 🚀 Quick Deploy to connorkarr.com

```bash
npm install
npm run deploy
```

Your site will be live at **https://connorkarr.com** in 2-5 minutes!

See **[QUICKSTART.md](QUICKSTART.md)** for step-by-step deployment instructions.

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
git clone https://github.com/Connor-Karr/connor-karr-portfolio
cd connor-karr-portfolio
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
