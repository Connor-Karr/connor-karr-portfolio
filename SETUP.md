# Setup Guide

This guide will walk you through customizing this portfolio template to make it your own.

## Quick Start

1. **Clone and Install**
```bash
git clone https://github.com/yourusername/portfolio-project.git
cd portfolio-project
npm install
npm start
```

2. **Open in Browser**
Navigate to [http://localhost:3000](http://localhost:3000)

## Step-by-Step Customization

### 1. Update Personal Information

#### Name and Title
File: `src/components/LeftPanel.js` (Lines 10-12)
```jsx
<h1>Your Name</h1>
<h2>Your Title</h2>
<p>Your tagline or description...</p>
```

#### Social Links
File: `src/components/LeftPanel.js` (Lines 48-77)
```jsx
<a href="https://github.com/YOUR-USERNAME">...</a>
<a href="https://linkedin.com/in/YOUR-USERNAME">...</a>
<a href="https://twitter.com/YOUR-USERNAME">...</a>
<a href="mailto:YOUR-EMAIL">...</a>
```

### 2. Customize About Section

File: `src/components/About.js`

Replace all four paragraphs with your own story:
- Paragraph 1: Introduction and what you do
- Paragraph 2: Current role and focus
- Paragraph 3: Past experience
- Paragraph 4: Interests outside of work

### 3. Add Your Experience

File: `src/components/Experience.js`

Update the `experiences` array (Lines 5-28):

```jsx
const experiences = [
  {
    period: '2022 — Present',           // Your dates
    title: 'Job Title 1',               // Your position
    company: 'Company Name 1',          // Your company
    description: 'Job description 1',   // What you did
    skills: ['Skill 1', 'Skill 2']      // Technologies used
  },
  // Add more jobs...
];
```

**Tips:**
- List jobs in reverse chronological order (most recent first)
- Keep descriptions concise (2-3 sentences)
- Focus on impact and achievements
- Use 3-7 skill tags per job

### 4. Add Your Projects

File: `src/components/Projects.js`

Update the `projects` array (Lines 5-32):

```jsx
const projects = [
  {
    name: 'Project Name 1',                          // Project title
    description: 'Project description 1',            // What it does
    technologies: ['Tech 1', 'Tech 2', 'Tech 3'],   // Stack used
    link: 'https://github.com/username/project-1'   // GitHub/Live URL
  },
  // Add more projects...
];
```

**Important:** Each project is clickable and will open the link in a new tab!

**Tips:**
- List 4-6 of your best projects
- Include a mix of personal and professional work
- Link to GitHub repos or live demos
- Highlight unique features or challenges

### 5. Update Resume Link

File: `src/components/Experience.js` (Line 43)
```jsx
<a href="YOUR-RESUME-URL" className="archive-link">
  View Full Resume →
</a>
```

Options for resume link:
- Link to a PDF hosted on GitHub
- Link to LinkedIn profile
- Link to a Google Drive document (make sure it's public)

### 6. Update Project Archive Link

File: `src/components/Projects.js` (Line 40)
```jsx
<a href="https://github.com/YOUR-USERNAME" className="archive-link">
  View Full Project Archive →
</a>
```

### 7. Customize Colors (Optional)

File: `src/index.css` (Lines 1-9)

```css
:root {
  --bg-primary: #0a1929;        /* Main background */
  --bg-secondary: #0f2138;      /* Card hover background */
  --text-primary: #e4eaf2;      /* Headings */
  --text-secondary: #a0b3c8;    /* Body text */
  --text-tertiary: #6b8299;     /* Muted text */
  --accent-primary: #64b5f6;    /* Links and accents */
  --accent-hover: #90caf9;      /* Hover state */
  --accent-glow: rgba(100, 181, 246, 0.2);  /* Glow effect */
}
```

**Color Scheme Ideas:**
- Keep it monochromatic for elegance
- Use a complementary accent color
- Test contrast ratios for accessibility
- Try [Coolors.co](https://coolors.co) for inspiration

### 8. Update Metadata

File: `public/index.html` (Lines 6-11)

```html
<meta name="description" content="Your portfolio description" />
<meta name="theme-color" content="#0a1929" />
<title>Your Name - Your Title</title>
```

File: `package.json` (Lines 2-4)
```json
"name": "your-portfolio",
"description": "Your portfolio description",
```

### 9. Add Favicon (Optional)

1. Generate a favicon at [Favicon.io](https://favicon.io)
2. Place `favicon.ico` in the `public/` folder
3. Add to `public/index.html`:
```html
<link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
```

## Testing Your Changes

After each change:
1. Save the file
2. Check [http://localhost:3000](http://localhost:3000)
3. The page will auto-reload

## Common Issues

### Port Already in Use
```bash
# Kill the process on port 3000
npx kill-port 3000
npm start
```

### Dependencies Not Installing
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Styles Not Updating
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Restart the dev server

## Next Steps

Once you've customized everything:

1. **Test Thoroughly**
   - Check all links work
   - Test on mobile devices
   - Verify all content is accurate

2. **Build for Production**
   ```bash
   npm run build
   ```

3. **Deploy** (See README.md for deployment options)

4. **Update GitHub Repo**
   - Change repository name
   - Update repository description
   - Add topics/tags
   - Update homepage URL

## Need Help?

- Check the [README.md](README.md) for more details
- Open an issue on GitHub
- Review the [CONTRIBUTING.md](CONTRIBUTING.md) guide

Happy customizing! 🚀
