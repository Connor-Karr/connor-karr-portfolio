# ✅ GitHub Pages Deployment Checklist

Use this checklist to ensure everything is set up correctly before deploying.

## Before You Start

- [ ] Node.js is installed (`node --version`)
- [ ] npm is installed (`npm --version`)
- [ ] Git is installed (`git --version`)
- [ ] You have a GitHub account
- [ ] You've customized your portfolio content (name, projects, etc.)

## Configuration

- [ ] Updated `package.json` homepage field with your actual GitHub username and repo name
  ```json
  "homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME"
  ```
- [ ] The homepage URL exactly matches your intended GitHub Pages URL
- [ ] Updated social links in `src/components/LeftPanel.js`
- [ ] Updated project links in `src/components/Projects.js`

## GitHub Repository

- [ ] Created repository on GitHub
- [ ] Repository is **Public** (required for free GitHub Pages)
- [ ] Repository name matches what you put in `package.json`
- [ ] Did NOT initialize with README (we already have one)

## Local Setup

- [ ] Extracted the ZIP file
- [ ] Opened terminal in the project folder
- [ ] Ran `npm install` successfully (no errors)
- [ ] Tested locally with `npm start` (opens at localhost:3000)
- [ ] Site looks correct locally

## Git Setup

- [ ] Initialized git: `git init`
- [ ] Added all files: `git add .`
- [ ] Made initial commit: `git commit -m "Initial commit"`
- [ ] Added remote: `git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git`
- [ ] Pushed to GitHub: `git push -u origin main`
- [ ] Can see files in GitHub repository online

## Deployment

- [ ] Ran `npm run deploy` successfully
- [ ] Saw "Published" message in terminal
- [ ] Waited 2-3 minutes for GitHub to process

## GitHub Pages Settings

- [ ] Went to repository Settings → Pages
- [ ] Source is set to `gh-pages` branch
- [ ] Folder is set to `/ (root)`
- [ ] Saved settings

## Verification

- [ ] Visited `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`
- [ ] Site loads (no 404 error)
- [ ] Site is not blank
- [ ] All sections visible (About, Experience, Projects)
- [ ] Navigation works (clicking links scrolls to sections)
- [ ] Project cards are clickable and open links
- [ ] Social media icons link to correct profiles
- [ ] Mobile responsive (test on phone or use browser dev tools)
- [ ] No console errors (press F12 in browser)

## Optional But Recommended

- [ ] Updated README.md with your actual repository URL
- [ ] Added repository description on GitHub
- [ ] Added topics/tags to repository
- [ ] Added repository to your GitHub profile
- [ ] Shared link on LinkedIn/Twitter/resume
- [ ] Bookmarked your live site

## If Something's Wrong

### Blank Page
- [ ] Verified homepage URL in `package.json` is 100% correct
- [ ] Ran `npm run deploy` again
- [ ] Hard refreshed browser (Ctrl+Shift+R or Cmd+Shift+R)

### 404 Error
- [ ] Checked GitHub Pages settings (Settings → Pages)
- [ ] Made sure repository is Public
- [ ] Verified `gh-pages` branch exists in repository
- [ ] Waited 3-5 minutes and tried again

### Assets Not Loading
- [ ] Homepage URL includes your username AND repo name
- [ ] Homepage URL does NOT have a trailing slash
- [ ] Redeployed: `npm run deploy`

### Can't Push to GitHub
- [ ] Created the repository on GitHub
- [ ] Remote URL is correct (`git remote -v` to check)
- [ ] You have permission to push to the repository

## Success! 🎉

If all boxes are checked and your site is live, you're done! 

**Your Portfolio**: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

---

## Making Future Updates

Every time you make changes:

1. [ ] Make your changes to files
2. [ ] Test locally: `npm start`
3. [ ] Commit: `git add . && git commit -m "Description"`
4. [ ] Push: `git push origin main`
5. [ ] Deploy: `npm run deploy`
6. [ ] Wait 1-2 minutes
7. [ ] Check live site

---

**Pro Tip**: Print this checklist or keep it open while deploying for the first time!
