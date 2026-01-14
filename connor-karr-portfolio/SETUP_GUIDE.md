# Connor Karr Portfolio - Setup Guide

## Quick Start

### Option 1: Manual Setup (Recommended for Development)

#### Frontend Setup

1. Navigate to frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Create `.env` file:
```bash
cp .env.example .env
```

4. Update `.env` with your settings:
```env
VITE_API_URL=http://localhost:8000
VITE_SITE_URL=http://localhost:5173
```

5. Start development server:
```bash
npm run dev
```

Frontend will be available at `http://localhost:5173`

#### Backend Setup

1. Navigate to backend directory:
```bash
cd backend
```

2. Create virtual environment (Python 3.11-3.13 required):
```bash
python3.13 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
```

**Important:** Use Python 3.13 (recommended) or 3.11-3.12. Python 3.14 is not yet supported due to Pydantic dependencies.

3. Install dependencies:
```bash
pip install -r requirements.txt
```

4. Create `.env` file:
```bash
cp .env.example .env
```

5. Update `.env` with your email settings:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=connorpkarr@gmail.com
SMTP_PASSWORD=your-app-password
EMAIL_FROM=connorpkarr@gmail.com
EMAIL_TO=connorpkarr@gmail.com
SECRET_KEY=generate-a-random-secret-key
```

**Getting Gmail App Password:**
- Go to Google Account settings
- Security → 2-Step Verification
- App passwords → Generate new password
- Use this password in `SMTP_PASSWORD`

6. Start development server:
```bash
uvicorn app.main:app --reload
```

Backend API will be available at `http://localhost:8000`
API docs at `http://localhost:8000/docs`

### Option 2: Docker Setup (Recommended for Production)

1. Ensure Docker and Docker Compose are installed

2. Create `.env` files as described above

3. Run both services:
```bash
docker-compose up -d
```

4. Access services:
- Frontend: `http://localhost:5173`
- Backend: `http://localhost:8000`
- API Docs: `http://localhost:8000/docs`

## Customization Guide

### 1. Update Personal Information

Edit `frontend/src/data/personalInfo.js`:
```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your@email.com",
  // ... update all fields
};
```

### 2. Add Your Projects

Edit `frontend/src/data/projects.js`:
```javascript
export const projects = [
  {
    id: 1,
    title: "Your Project",
    description: "Description",
    // ... add your projects
  }
];
```

### 3. Update Skills

Edit `frontend/src/data/skills.js`:
```javascript
export const skillCategories = [
  // Update with your skills
];
```

### 4. Customize Theme Colors

Edit `frontend/tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your primary colors
      },
      secondary: {
        // Your secondary colors
      }
    }
  }
}
```

### 5. Add Your Resume

1. Place your resume PDF in `frontend/public/`
2. Update the path in `personalInfo.js`:
```javascript
resumeUrl: "/your-resume.pdf"
```

### 6. Replace Placeholder Images

Add project images to `frontend/public/projects/`:
- `ecommerce.jpg`
- `task-manager.jpg`
- etc.

### 7. Update Meta Tags for SEO

Edit `frontend/index.html`:
```html
<meta name="description" content="Your description" />
<meta property="og:title" content="Your Name - Your Title" />
<!-- Update all meta tags -->
```

## Production Deployment

### Frontend (Vercel)

1. Build the project:
```bash
cd frontend
npm run build
```

2. Deploy to Vercel:
```bash
vercel deploy
```

3. Set environment variables in Vercel dashboard:
```
VITE_API_URL=https://your-api-url.com
```

### Frontend (Netlify)

1. Build the project:
```bash
cd frontend
npm run build
```

2. Deploy `dist/` folder to Netlify

3. Set environment variables in Netlify dashboard

### Backend (Railway)

1. Install Railway CLI:
```bash
npm install -g @railway/cli
```

2. Login and link project:
```bash
railway login
railway link
```

3. Set environment variables:
```bash
railway variables set SMTP_HOST=smtp.gmail.com
railway variables set SMTP_PORT=587
# Set all required variables
```

4. Deploy:
```bash
railway up
```

### Backend (DigitalOcean App Platform)

1. Create new app from GitHub repository
2. Set environment variables in dashboard
3. Deploy automatically

## Testing

### Frontend
```bash
cd frontend
npm run lint
```

### Backend
```bash
cd backend
pytest
```

## Troubleshooting

### Issue: CORS errors
**Solution:** Make sure `CORS_ORIGINS` in backend `.env` includes your frontend URL

### Issue: Email not sending
**Solutions:**
- Verify SMTP credentials are correct
- For Gmail, enable "Less secure app access" or use App Password
- Check SMTP port (587 for TLS, 465 for SSL)
- Verify firewall isn't blocking SMTP ports

### Issue: Frontend can't connect to backend
**Solution:** Verify `VITE_API_URL` matches your backend URL

### Issue: Styles not loading
**Solution:** Run `npm install` again and clear browser cache

## Performance Optimization

### Frontend
- Images: Optimize all images (use WebP format)
- Code splitting: Vite handles this automatically
- Lazy loading: Already implemented for components

### Backend
- Use production ASGI server (Gunicorn with uvicorn workers)
- Enable caching for static responses
- Use environment variables properly

## Security Checklist

- [ ] Change `SECRET_KEY` to a random string
- [ ] Never commit `.env` files
- [ ] Use HTTPS in production
- [ ] Validate all user inputs (already implemented)
- [ ] Rate limit API endpoints (consider adding rate limiting middleware)
- [ ] Keep dependencies updated

## Support

For issues or questions:
- Check the README.md
- Review the code comments
- Open an issue on GitHub

## License

MIT License - Feel free to use this template for your own portfolio!
