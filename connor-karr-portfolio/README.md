# Connor Karr - Personal Portfolio

A modern, responsive personal portfolio website built with React and Python FastAPI, showcasing projects, skills, and professional experience.

## 🚀 Features

- **Modern React Frontend**: Built with React 18, Vite, and TailwindCSS
- **Python FastAPI Backend**: RESTful API with async support for contact form
- **Responsive Design**: Mobile-first approach with smooth animations
- **Dark/Light Theme**: Toggle between themes with persistent preference
- **Interactive Components**: Smooth scroll, hover effects, and dynamic content
- **Email Integration**: Contact form with email notifications
- **SEO Optimized**: Meta tags, semantic HTML, and performance optimized
- **Type Safety**: PropTypes validation for React components

## 📁 Project Structure

```
connor-karr-portfolio/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # React components
│   │   │   ├── Layout/      # Header, Footer, Navigation
│   │   │   ├── Hero/        # Landing section
│   │   │   ├── About/       # About section
│   │   │   ├── Projects/    # Projects showcase
│   │   │   ├── Skills/      # Skills and technologies
│   │   │   └── Contact/     # Contact form
│   │   ├── hooks/           # Custom React hooks
│   │   ├── utils/           # Utility functions
│   │   ├── data/            # Static data (projects, skills, etc.)
│   │   ├── assets/          # Images, icons, fonts
│   │   └── styles/          # Global styles
│   ├── public/              # Static assets
│   └── package.json
│
├── backend/                 # Python FastAPI backend
│   ├── app/
│   │   ├── api/            # API endpoints
│   │   ├── models/         # Data models
│   │   ├── schemas/        # Pydantic schemas
│   │   └── core/           # Config, security
│   ├── tests/              # Backend tests
│   └── requirements.txt
│
└── README.md
```

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing
- **Axios** - HTTP client
- **React Icons** - Icon library
- **React Toastify** - Toast notifications
- **ESLint 9** - Code linting with flat config

### Backend
- **Python 3.11+** - Programming language (3.14 ready)
- **FastAPI** - Modern web framework
- **Pydantic** - Data validation
- **Uvicorn** - ASGI server
- **aiosmtplib** - Async email sending
- **python-dotenv** - Environment variables

## 📦 Installation

### Prerequisites
- Node.js 18+ and npm
- Python 3.11-3.13 (3.13 recommended, 3.14 not yet supported)
- Git

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The frontend will run on `http://localhost:5173`

### Backend Setup

```bash
cd backend
python3.13 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

**Note:** Python 3.14 is not yet supported due to Pydantic dependencies. Use Python 3.13 or 3.11-3.12.

The backend API will run on `http://localhost:8000`

## 🔧 Configuration

### Frontend Environment Variables
Create `.env` file in `frontend/`:
```env
VITE_API_URL=http://localhost:8000
VITE_SITE_URL=http://localhost:5173
```

### Backend Environment Variables
Create `.env` file in `backend/`:
```env
# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=connor@example.com

# CORS
CORS_ORIGINS=http://localhost:5173,https://connorkarr.com

# Security
SECRET_KEY=your-secret-key-here
```

## 🎨 Customization

### Update Personal Information
Edit `frontend/src/data/personalInfo.js`:
```javascript
export const personalInfo = {
  name: "Connor Karr",
  title: "Full Stack Developer",
  email: "connor@example.com",
  // ... more fields
};
```

### Add Projects
Edit `frontend/src/data/projects.js`:
```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    // ... more fields
  }
];
```

### Update Skills
Edit `frontend/src/data/skills.js`

### Modify Theme Colors
Edit `frontend/tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {...},
      secondary: {...},
    }
  }
}
```

## 🚀 Deployment

### Frontend (Vercel/Netlify)
```bash
cd frontend
npm run build
# Deploy the 'dist' folder
```

### Backend (Railway/Heroku/DigitalOcean)
```bash
cd backend
# Set environment variables in your hosting platform
# Deploy using Docker or direct Python deployment
```

## 📝 Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `uvicorn app.main:app --reload` - Start development server
- `pytest` - Run tests
- `python -m app.main` - Run production server

## 🤝 Contributing

This is a personal portfolio project, but feel free to fork and customize for your own use!

## 📄 License

MIT License - feel free to use this template for your own portfolio

## 📧 Contact

Connor Karr - [connorpkarr@gmail.com](mailto:connorpkarr@gmail.com)

Project Link: [https://github.com/connorkarr/portfolio](https://github.com/connorkarr/portfolio)
