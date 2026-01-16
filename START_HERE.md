# 🚀 START HERE - Deploy to connorkarr.com

## Super Quick Start (3 Commands)

```bash
# 1. Install dependencies
npm install

# 2. Deploy to GitHub Pages
npm run deploy

# 3. Configure GitHub (one-time only)
# Go to: GitHub repo → Settings → Pages
# Set Source: gh-pages branch
```

**That's it!** Visit https://connorkarr.com in 2-5 minutes! 🎉

---

## What Just Happened?

- ✅ React app was built into static files
- ✅ Static files pushed to `gh-pages` branch
- ✅ GitHub Pages serves from `gh-pages` branch
- ✅ Your domain (connorkarr.com) points to GitHub Pages

## The Index File Problem (SOLVED)

You were having issues because:
- ❌ GitHub Pages was looking at `main` branch (source code)
- ❌ React source code has no root `index.html` 
- ✅ **Solution:** Deploy to `gh-pages` branch (built files with index.html)

## Repository Setup

**Your repository name:** Should match your GitHub username
- If username is `connorkarr`: repo should be `connorkarr.github.io`
- **OR** any repo name works with custom domain (connorkarr.com)

## GitHub Pages Configuration

1. Go to your repository on GitHub
2. Click **Settings** (top right)
3. Click **Pages** (left sidebar)
4. Under **Source**:
   - Branch: `gh-pages` ⬅️ **IMPORTANT**
   - Folder: `/ (root)`
5. Click **Save**

## Your Files Structure

```
Your Repository (main branch):
├── src/                  ← React source code
├── public/               ← Static assets + CNAME
│   ├── index.html       ← React template (NOT served directly)
│   └── CNAME            ← Contains: connorkarr.com
├── package.json         ← homepage: "https://connorkarr.com"
└── ...

GitHub Pages (gh-pages branch - auto-created):
├── index.html           ← Built React app (THIS is served!)
├── static/
│   ├── css/
│   └── js/
└── CNAME                ← Copied from public/
```

## DNS Configuration

Your DNS should point to GitHub Pages:

**A Records (for connorkarr.com):**
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

**CNAME Record (for www.connorkarr.com):**
```
yourusername.github.io
```

## Making Updates

Every time you update your portfolio:

```bash
# 1. Make your changes in src/
# 2. Test locally
npm start

# 3. Deploy
npm run deploy
```

## Troubleshooting

### Site Not Loading
- Wait 2-5 minutes after deployment
- Clear browser cache (Ctrl+F5)
- Check: Settings → Pages shows "Your site is published"

### 404 Error
- Verify `gh-pages` branch exists
- Check GitHub Pages is set to `gh-pages` branch
- Run `npm run deploy` again

### Styling Broken
- Check `homepage` in package.json is "https://connorkarr.com" ✓
- Clear browser cache
- Check browser console for errors (F12)

### CNAME Issues
- File exists: `public/CNAME` contains `connorkarr.com` ✓
- DNS pointing to GitHub's IPs ✓
- Wait 24-48 hours for DNS propagation (if you just changed DNS)

## Check Deployment Status

```bash
# Check if gh-pages branch exists
git branch -r

# Should see: origin/gh-pages
```

On GitHub:
- Go to your repo
- Click "branches" (near top left)
- Should see `gh-pages` branch

## Alternative: Use Deploy Script

```bash
# Make it executable (first time only)
chmod +x deploy.sh

# Run it
./deploy.sh
```

## File Locations

- **CNAME file:** `public/CNAME` (contains: connorkarr.com)
- **Homepage URL:** `package.json` line 5 (set to: https://connorkarr.com)
- **Deploy script:** `deploy.sh` (optional shortcut)

## Need More Help?

1. **Full deployment guide:** Read `DEPLOY_CONNORKARR.md`
2. **Customization guide:** Read `SETUP.md`
3. **General info:** Read `README.md`

## Quick Reference

| Command | What it does |
|---------|-------------|
| `npm install` | Install dependencies (first time) |
| `npm start` | Test locally at http://localhost:3000 |
| `npm run build` | Build for production (creates `build/` folder) |
| `npm run deploy` | Build + Push to gh-pages + Deploy |
| `./deploy.sh` | Same as `npm run deploy` with helpful messages |

---

**Remember:** 
- ✅ Source code in `main` branch
- ✅ Built files in `gh-pages` branch
- ✅ GitHub Pages serves from `gh-pages`
- ✅ Your domain points to GitHub Pages

**You're all set! Happy coding! 🎉**
