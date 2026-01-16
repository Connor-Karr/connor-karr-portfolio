# Deploy to connorkarr.com - Step-by-Step Guide

This guide will help you deploy your React portfolio to **connorkarr.com** using GitHub Pages.

## Prerequisites ✓

You mentioned you've already:
- ✅ Set up DNS records for connorkarr.com
- ✅ Connected your domain to GitHub

## The Problem

GitHub Pages needs a **built** version of your React app, not the source code. React apps must be compiled to static HTML/CSS/JS files before they can be served.

## The Solution - 3 Easy Steps

### Step 1: Install Dependencies

```bash
cd portfolio-project
npm install
```

This installs:
- React and dependencies
- `gh-pages` package (for deployment)

### Step 2: Build and Deploy

```bash
npm run deploy
```

**What this does:**
1. Runs `npm run build` - Creates optimized production files in a `build/` folder
2. Pushes the `build/` folder contents to the `gh-pages` branch
3. GitHub Pages serves files from the `gh-pages` branch

### Step 3: Configure GitHub Repository

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in left sidebar)
3. Under **Source**, select:
   - Branch: `gh-pages`
   - Folder: `/ (root)`
4. Click **Save**

The CNAME file is already included (`public/CNAME` contains `connorkarr.com`), so your custom domain will work automatically!

## Your DNS Should Look Like This

Make sure your DNS records are set up correctly:

### If using an apex domain (connorkarr.com):
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

### If using www subdomain (www.connorkarr.com):
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

## Troubleshooting

### Problem: "404 - File not found"
**Solution:** Make sure you ran `npm run deploy` and selected the `gh-pages` branch in GitHub Settings → Pages.

### Problem: "There isn't a GitHub Pages site here"
**Solution:** 
1. Check that `gh-pages` branch exists in your repo
2. Verify GitHub Pages is enabled in Settings → Pages
3. Wait 5-10 minutes after deployment

### Problem: "CNAME already taken"
**Solution:** Make sure the CNAME record points to YOUR GitHub username: `yourusername.github.io`

### Problem: Site shows but styling is broken
**Solution:** The `homepage` field in `package.json` must match your domain. It's already set to `https://connorkarr.com` ✓

### Problem: DNS not resolving
**Solution:** DNS changes can take 24-48 hours to propagate. Check with:
```bash
dig connorkarr.com
# or
nslookup connorkarr.com
```

## Repository Structure

Your repository should have these branches:

- **main** (or master) - Your source code
- **gh-pages** - Built files (created automatically by `npm run deploy`)

GitHub Pages serves from the `gh-pages` branch, not `main`.

## Making Updates

Whenever you make changes:

1. Edit your source files
2. Test locally: `npm start`
3. Deploy changes: `npm run deploy`

That's it! The `deploy` command rebuilds and republishes automatically.

## Quick Commands Reference

```bash
# Install dependencies (first time only)
npm install

# Test locally
npm start

# Deploy to connorkarr.com
npm run deploy

# Build only (without deploying)
npm run build
```

## Expected Timeline

- Deploy command: 30-60 seconds
- GitHub Pages update: 2-5 minutes
- DNS propagation (if DNS changed): 24-48 hours

## Verification

After deploying, verify it worked:

1. Check the `gh-pages` branch exists on GitHub
2. Go to Settings → Pages and see "Your site is published at https://connorkarr.com"
3. Visit https://connorkarr.com (may take a few minutes)

## Common Mistakes to Avoid

❌ Pushing source code to `main` and expecting it to work
✅ Running `npm run deploy` to push built files to `gh-pages`

❌ Setting GitHub Pages to serve from `main` branch
✅ Setting GitHub Pages to serve from `gh-pages` branch

❌ Wrong homepage URL in package.json
✅ homepage is set to "https://connorkarr.com" ✓

## Need More Help?

If you're still having issues:

1. Check GitHub Pages status: https://www.githubstatus.com/
2. Verify your DNS records with your domain registrar
3. Check browser console for errors (F12 → Console tab)
4. Make sure you're accessing `https://connorkarr.com` (not `http://`)

## Security

GitHub Pages automatically provides:
- Free HTTPS/SSL certificate
- DDoS protection
- CDN distribution

Your site will be secure and fast! 🎉

---

**TL;DR:** Run `npm install`, then `npm run deploy`, then set GitHub Pages to use the `gh-pages` branch. Done! 🚀
