# 🚀 Quick Start Guide

## Get Your Portfolio Running in 5 Minutes!

### Step 1: Frontend Setup (2 minutes)

```bash
cd connor-karr-portfolio/frontend
npm install
cp .env.example .env
npm run dev
```

Your site will open at `http://localhost:5173` 🎉

### Step 2: Backend Setup (3 minutes)

```bash
cd connor-karr-portfolio/backend
python3.13 -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate
pip install -r requirements.txt
cp .env.example .env
```

**Note:** Use Python 3.13 (or 3.11-3.12). Python 3.14 is not yet supported.

**Edit `.env` and add your email:**
```env
SMTP_USER=connorpkarr@gmail.com
SMTP_PASSWORD=your-app-password
EMAIL_TO=connorpkarr@gmail.com
SECRET_KEY=any-random-string-here
```

**Start the server:**
```bash
uvicorn app.main:app --reload
```

API docs at `http://localhost:8000/docs` 🚀

### Step 3: Customize Your Info (1 minute)

Edit these files:
- `frontend/src/data/personalInfo.js` - Your name, bio, etc.
- `frontend/src/data/skills.js` - Your skills
- `frontend/src/data/projects.js` - Your projects

Refresh the page and see your changes! ✨

## Important Files to Customize

1. **Personal Info**: `frontend/src/data/personalInfo.js`
2. **Projects**: `frontend/src/data/projects.js`
3. **Skills**: `frontend/src/data/skills.js`
4. **Colors**: `frontend/tailwind.config.js`
5. **Resume**: Add to `frontend/public/resume.pdf`
6. **Project Images**: Add to `frontend/public/projects/`

## Need Help?

- 📖 Read `README.md` for full documentation
- 🔧 Check `SETUP_GUIDE.md` for detailed instructions
- 🏗️ See `PROJECT_STRUCTURE.md` to understand the codebase

## What's Included?

✅ Modern React frontend with animations  
✅ Python FastAPI backend for contact form  
✅ Dark/light theme toggle  
✅ Responsive design (mobile-friendly)  
✅ Project filtering and showcase  
✅ Smooth scroll navigation  
✅ Contact form with email integration  
✅ Professional design with TailwindCSS  
✅ SEO optimized  
✅ Production ready

## Tips

- The contact form won't work until you set up email credentials
- Use Gmail App Password (not your regular password)
- All colors can be changed in `tailwind.config.js`
- Add your own projects, skills, and information
- Test on mobile - it's fully responsive!

Happy coding! 🎨
