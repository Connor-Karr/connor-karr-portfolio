# 🚀 Quick Start for GitHub Pages

Follow these 5 simple steps to get your portfolio live on GitHub Pages!

## Step 1: Update Your Repository Name

1. Open `package.json`
2. Find this line:
```json
"homepage": "https://yourusername.github.io/portfolio-project",
```
3. Replace with YOUR GitHub username and repository name:
```json
"homepage": "https://YOUR-USERNAME.github.io/YOUR-REPO-NAME",
```

**Example:** If your username is `johndoe` and repo is `portfolio`:
```json
"homepage": "https://johndoe.github.io/portfolio",
```

## Step 2: Create GitHub Repository

1. Go to [github.com/new](https://github.com/new)
2. Name it (same as what you put in Step 1)
3. Make it **Public**
4. Don't add README, .gitignore, or license (we have them)
5. Click **Create repository**

## Step 3: Push to GitHub

Copy these commands (replace YOUR-USERNAME and YOUR-REPO-NAME):

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git
git branch -M main
git push -u origin main
```

## Step 4: Install and Deploy

```bash
npm install
npm run deploy
```

## Step 5: View Your Site!

Go to: `https://YOUR-USERNAME.github.io/YOUR-REPO-NAME`

(Wait 1-2 minutes if it's not live yet)

---

## 🎯 That's It!

Your portfolio is now live! 

### Making Updates

Whenever you change your portfolio:

```bash
git add .
git commit -m "Updated portfolio"
git push origin main
npm run deploy
```

---

## ❓ Troubleshooting

**Seeing a blank page?**
- Double-check the homepage URL in `package.json` matches exactly
- Run `npm run deploy` again

**404 error?**
- Go to your GitHub repo → Settings → Pages
- Make sure Source is set to `gh-pages` branch

**Changes not showing?**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Wait 2-3 minutes after deploying

---

**Need more help?** Check [GITHUB_PAGES_DEPLOY.md](GITHUB_PAGES_DEPLOY.md) for detailed instructions!
