# GitHub Pages Deployment Guide

This guide will help you deploy your portfolio to GitHub Pages.

## Prerequisites

- GitHub account
- Git installed on your computer
- Node.js and npm installed

## Step 1: Update package.json

**IMPORTANT**: Before deploying, update the `homepage` field in `package.json`:

```json
"homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME"
```

For example, if your GitHub username is `johndoe` and your repo is named `portfolio`:
```json
"homepage": "https://johndoe.github.io/portfolio"
```

## Step 2: Create GitHub Repository

### Option A: Create New Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Name your repository (e.g., `portfolio`, `my-portfolio`, or `portfolio-project`)
3. Make it **Public** (required for GitHub Pages on free plan)
4. **DO NOT** initialize with README, .gitignore, or license (we already have these)
5. Click "Create repository"

### Option B: Use Existing Repository

If you already have a repository, just note its name for the next steps.

## Step 3: Initialize and Push to GitHub

Open your terminal in the project folder and run:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit - Portfolio website"

# Add your GitHub repository as remote
# Replace YOUR-USERNAME and YOUR-REPO-NAME with your actual values
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Install Dependencies

```bash
npm install
```

This will install:
- React and React DOM
- React Scripts (for building)
- gh-pages (for deploying)

## Step 5: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your project (`npm run build`)
2. Create a `gh-pages` branch
3. Push the build folder to that branch
4. Your site will be live in 1-2 minutes!

## Step 6: Enable GitHub Pages (If Not Automatic)

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
5. Click **Save**

## Your Portfolio is Live! 🎉

Your portfolio will be available at:
```
https://YOUR-USERNAME.github.io/YOUR-REPO-NAME
```

It may take a few minutes for the site to go live after the first deployment.

## Making Updates

Whenever you make changes to your portfolio:

```bash
# Make your changes to files
# Then:

git add .
git commit -m "Description of your changes"
git push origin main

# Deploy the updated version
npm run deploy
```

The last command (`npm run deploy`) automatically rebuilds and updates your live site!

## Common Issues & Solutions

### Issue: Page shows 404

**Solution 1**: Check your `package.json` homepage URL matches your actual GitHub Pages URL exactly.

**Solution 2**: Make sure you ran `npm run deploy` after updating the homepage field.

**Solution 3**: In GitHub repository settings, verify GitHub Pages is enabled and using the `gh-pages` branch.

### Issue: Assets not loading (blank page)

**Cause**: The `homepage` field in `package.json` doesn't match your repository name.

**Solution**: 
1. Update `package.json` with correct URL
2. Run `npm run deploy` again

### Issue: "Failed to get remote"

**Solution**: Make sure you've pushed to GitHub first:
```bash
git push origin main
```

### Issue: Changes not showing up

**Solution**: 
1. Hard refresh your browser: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Wait 2-3 minutes for GitHub to update

### Issue: npm install fails

**Solution**:
```bash
# Clear cache and try again
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

## Custom Domain (Optional)

Want to use your own domain (e.g., `yourname.com`)?

1. Add a `CNAME` file to the `public/` folder with your domain:
   ```
   yourname.com
   ```

2. Update `package.json`:
   ```json
   "homepage": "https://yourname.com"
   ```

3. Configure your domain's DNS settings (check your domain registrar's documentation)

4. Deploy: `npm run deploy`

## GitHub Actions (Automatic Deployment)

Want automatic deployment on every push? Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm install
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: JamesIves/github-pages-deploy-action@v4
      with:
        folder: build
        branch: gh-pages
```

With this setup, your site automatically updates when you push to `main`!

## Verification Checklist

✅ Repository is public  
✅ `homepage` in package.json matches GitHub Pages URL  
✅ Ran `npm install` successfully  
✅ Ran `npm run deploy` successfully  
✅ GitHub Pages is enabled in repository settings  
✅ Waited 2-3 minutes after deployment  
✅ Site loads at https://YOUR-USERNAME.github.io/YOUR-REPO-NAME  

## Need Help?

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Create React App Deployment Guide](https://create-react-app.dev/docs/deployment/#github-pages)
- Open an issue in your repository

---

**Pro Tip**: Bookmark your live URL and share it on your resume, LinkedIn, and other profiles!
