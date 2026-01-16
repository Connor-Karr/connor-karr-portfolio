# Deploying to connorkarr.com with GitHub Pages

This guide will help you deploy your React portfolio to **connorkarr.com** using GitHub Pages.

## Prerequisites

✅ You already have:
- Custom domain: **connorkarr.com**
- DNS configured to point to GitHub
- GitHub repository set up

## Quick Deploy Steps

### Step 1: Install Dependencies

```bash
npm install
```

### Step 2: Build the Project

```bash
npm run build
```

This creates a `build/` folder with optimized static files.

### Step 3: Deploy to GitHub Pages

```bash
npm run deploy
```

This command will:
1. Build your React app
2. Create/update a `gh-pages` branch
3. Push the built files to that branch

### Step 4: Configure GitHub Repository Settings

1. Go to your GitHub repository
2. Click **Settings** → **Pages**
3. Under "Source", select:
   - **Branch**: `gh-pages`
   - **Folder**: `/ (root)`
4. Under "Custom domain", enter: `connorkarr.com`
5. Check **Enforce HTTPS** (wait a few minutes for certificate)
6. Click **Save**

### Step 5: Add CNAME File (Important!)

GitHub Pages needs a CNAME file in the build output. Create this file:

**public/CNAME** (already included in your project):
```
connorkarr.com
```

This file will be automatically copied to the build folder.

## Troubleshooting

### Issue: "404 - File not found"

**Solution**: Make sure you've run `npm run deploy` and the gh-pages branch exists.

```bash
# Check if gh-pages branch exists
git branch -a

# If missing, run:
npm run deploy
```

### Issue: "Custom domain not working"

**Solution**: Verify DNS settings point to GitHub:

Your DNS should have these records:
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

Or for CNAME:
```
Type: CNAME
Name: www
Value: yourusername.github.io
```

### Issue: "Changes not showing up"

**Solutions**:
1. Wait 5-10 minutes for GitHub Pages to rebuild
2. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
3. Check GitHub Actions tab for deployment status
4. Try incognito/private browsing mode

### Issue: "Routing issues (404 on refresh)"

**Solution**: GitHub Pages doesn't support client-side routing by default. We'll use a workaround.

Add this to **public/404.html**:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
      sessionStorage.redirect = location.href;
    </script>
    <meta http-equiv="refresh" content="0;URL='/'">
  </head>
  <body></body>
</html>
```

Then add this to **public/index.html** (in the `<head>` section):
```html
<script>
  (function(){
    var redirect = sessionStorage.redirect;
    delete sessionStorage.redirect;
    if (redirect && redirect != location.href) {
      history.replaceState(null, null, redirect);
    }
  })();
</script>
```

## Complete Deployment Workflow

Every time you make changes:

```bash
# 1. Make your changes to the code
# 2. Test locally
npm start

# 3. Deploy to GitHub Pages
npm run deploy

# 4. Wait 2-5 minutes, then check connorkarr.com
```

## Automatic Deployment (Optional)

You can set up GitHub Actions to automatically deploy when you push to main:

Create **.github/workflows/deploy.yml**:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - name: Checkout
      uses: actions/checkout@v3
      
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        
    - name: Install dependencies
      run: npm ci
      
    - name: Build
      run: npm run build
      
    - name: Deploy
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./build
        cname: connorkarr.com
```

With this, just push to main and it auto-deploys!

```bash
git add .
git commit -m "Update portfolio"
git push origin main
```

## Verification Checklist

After deployment, verify:

- [ ] https://connorkarr.com loads
- [ ] All sections scroll correctly
- [ ] Navigation links work
- [ ] Project links open correctly
- [ ] Social media links work
- [ ] Mobile responsive design works
- [ ] HTTPS is enabled (green lock icon)

## DNS Configuration Reference

If you need to reconfigure DNS, here are the correct settings:

**For apex domain (connorkarr.com):**
```
Type: A
Host: @
Points to: 185.199.108.153
```
```
Type: A
Host: @
Points to: 185.199.109.153
```
```
Type: A
Host: @
Points to: 185.199.110.153
```
```
Type: A
Host: @
Points to: 185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Host: www
Points to: yourusername.github.io
```

Replace `yourusername` with your actual GitHub username.

## Common Commands

```bash
# Start development server
npm start

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy

# Test production build locally
npx serve -s build
```

## Need Help?

1. Check GitHub repository Settings → Pages for deployment status
2. Look at GitHub Actions tab for build logs
3. Verify DNS propagation: https://dnschecker.org
4. Check browser console (F12) for errors

## Success!

Once deployed, your portfolio will be live at:
🌐 **https://connorkarr.com**

Any changes you make can be redeployed with:
```bash
npm run deploy
```

Happy deploying! 🚀
