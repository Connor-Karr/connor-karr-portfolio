#!/bin/bash

# Deploy Script for connorkarr.com
# This script builds and deploys your React portfolio to GitHub Pages

echo "🚀 Deploying to connorkarr.com..."
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo ""
fi

# Build and deploy
echo "🔨 Building and deploying..."
npm run deploy

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Deployment successful!"
    echo ""
    echo "Your site will be live at https://connorkarr.com in 2-5 minutes."
    echo ""
    echo "Next steps:"
    echo "1. Go to your GitHub repo → Settings → Pages"
    echo "2. Set Source to 'gh-pages' branch"
    echo "3. Wait a few minutes and visit https://connorkarr.com"
else
    echo ""
    echo "❌ Deployment failed!"
    echo ""
    echo "Common fixes:"
    echo "1. Make sure you've committed all changes: git add . && git commit -m 'update'"
    echo "2. Make sure you have push access to the repo"
    echo "3. Try running: npm install && npm run deploy"
fi
