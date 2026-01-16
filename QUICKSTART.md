# Quick Start: Deploy to connorkarr.com

## 🚀 Fast Track Deployment (5 minutes)

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Deploy
```bash
npm run deploy
```

That's it! Your site will be live at **https://connorkarr.com** in 2-5 minutes.

---

## ⚙️ One-Time GitHub Setup

After first deployment, configure your GitHub repo:

1. Go to **Settings** → **Pages**
2. Set **Source** to: `gh-pages` branch, `/ (root)` folder
3. Set **Custom domain** to: `connorkarr.com`
4. Enable **Enforce HTTPS**
5. Click **Save**

---

## 🔄 Making Updates

After any changes to your portfolio:

```bash
npm run deploy
```

Wait 2-5 minutes, then refresh **connorkarr.com**

---

## 📝 Customization Checklist

Before deploying, update these files:

### 1. `src/components/LeftPanel.js`
- [ ] Your name
- [ ] Your title
- [ ] Your tagline
- [ ] Social media links

### 2. `src/components/About.js`
- [ ] All 4 about paragraphs

### 3. `src/components/Experience.js`
- [ ] Job titles, companies, dates
- [ ] Job descriptions
- [ ] Skills/technologies

### 4. `src/components/Projects.js`
- [ ] Project names
- [ ] Project descriptions
- [ ] Project links (GitHub/demo URLs)
- [ ] Technologies used

### 5. `public/index.html`
- [ ] Page title (line 22)
- [ ] Meta description (lines 7-10)

---

## ✅ Verification

After deployment, check:
- [ ] https://connorkarr.com loads
- [ ] All navigation works
- [ ] All project links open correctly
- [ ] Social links work
- [ ] Mobile responsive

---

## 🆘 Troubleshooting

**Site not loading?**
- Wait 5-10 minutes after first deploy
- Check GitHub repo → Settings → Pages
- Verify `gh-pages` branch exists

**Changes not showing?**
- Hard refresh: `Ctrl+Shift+R` (Windows) or `Cmd+Shift+R` (Mac)
- Clear browser cache
- Wait 2-5 minutes

**Need help?**
See **DEPLOY_TO_CUSTOM_DOMAIN.md** for detailed troubleshooting

---

## 📚 Additional Resources

- **SETUP.md** - Detailed customization guide
- **DEPLOY_TO_CUSTOM_DOMAIN.md** - Complete deployment guide
- **README.md** - Full documentation

---

**Ready to deploy?**
```bash
npm install
npm run deploy
```

Then visit **https://connorkarr.com** in 2-5 minutes! 🎉
