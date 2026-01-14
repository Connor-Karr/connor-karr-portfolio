# Connor Karr Portfolio - Project Structure

## Complete File Tree

```
connor-karr-portfolio/
│
├── README.md                          # Main project documentation
├── SETUP_GUIDE.md                     # Detailed setup instructions
├── .gitignore                         # Git ignore rules
├── docker-compose.yml                 # Docker orchestration
│
├── frontend/                          # React Frontend Application
│   ├── public/                        # Static assets
│   │   ├── vite.svg                  # Vite logo
│   │   ├── resume.pdf                # Your resume (add this)
│   │   └── projects/                 # Project images (add these)
│   │       ├── ecommerce.jpg
│   │       ├── task-manager.jpg
│   │       └── ...
│   │
│   ├── src/                          # Source code
│   │   ├── main.jsx                  # Application entry point
│   │   ├── App.jsx                   # Main App component
│   │   │
│   │   ├── components/               # React components
│   │   │   ├── Layout/
│   │   │   │   ├── Header.jsx       # Navigation header
│   │   │   │   └── Footer.jsx       # Site footer
│   │   │   ├── Hero/
│   │   │   │   └── Hero.jsx         # Landing section
│   │   │   ├── About/
│   │   │   │   └── About.jsx        # About section
│   │   │   ├── Skills/
│   │   │   │   └── Skills.jsx       # Skills section
│   │   │   ├── Projects/
│   │   │   │   └── Projects.jsx     # Projects showcase
│   │   │   └── Contact/
│   │   │       └── Contact.jsx      # Contact form
│   │   │
│   │   ├── hooks/                    # Custom React hooks
│   │   │   ├── useTheme.js          # Dark/light theme toggle
│   │   │   ├── useScrollSpy.js      # Navigation highlighting
│   │   │   └── useIntersectionObserver.js  # Scroll animations
│   │   │
│   │   ├── utils/                    # Utility functions
│   │   │   ├── api.js               # API client (Axios)
│   │   │   └── validation.js        # Form validation
│   │   │
│   │   ├── data/                     # Static data files
│   │   │   ├── personalInfo.js      # Personal information
│   │   │   ├── skills.js            # Skills and certifications
│   │   │   └── projects.js          # Project data
│   │   │
│   │   ├── styles/                   # Global styles
│   │   │   └── index.css            # TailwindCSS + custom styles
│   │   │
│   │   └── assets/                   # Images, icons, fonts
│   │       ├── images/
│   │       └── icons/
│   │
│   ├── index.html                    # HTML entry point
│   ├── package.json                  # Node dependencies
│   ├── vite.config.js               # Vite configuration
│   ├── tailwind.config.js           # TailwindCSS configuration
│   ├── postcss.config.js            # PostCSS configuration
│   ├── .eslintrc.cjs                # ESLint configuration
│   ├── .env.example                 # Environment variables template
│   └── Dockerfile                    # Docker configuration
│
└── backend/                          # Python FastAPI Backend
    ├── app/                          # Application code
    │   ├── main.py                  # FastAPI application
    │   │
    │   ├── api/                     # API endpoints
    │   │   └── contact.py          # Contact form endpoint
    │   │
    │   ├── core/                    # Core functionality
    │   │   ├── config.py           # Application settings
    │   │   └── email.py            # Email service
    │   │
    │   ├── schemas/                 # Pydantic schemas
    │   │   └── contact.py          # Request/response models
    │   │
    │   └── models/                  # Data models (if needed)
    │
    ├── tests/                        # Backend tests
    │   └── test_contact.py          # Contact endpoint tests
    │
    ├── requirements.txt              # Python dependencies
    ├── .env.example                 # Environment variables template
    └── Dockerfile                    # Docker configuration
```

## Key Files Explained

### Frontend

#### Configuration Files

- **package.json**: Defines Node.js dependencies and scripts
  - Dependencies: React, Vite, TailwindCSS, Framer Motion, Axios, etc.
  - Scripts: dev, build, preview, lint

- **vite.config.js**: Vite bundler configuration
  - Path aliases for cleaner imports
  - Build optimization
  - Development server settings

- **tailwind.config.js**: TailwindCSS theme customization
  - Custom colors (primary, secondary, dark)
  - Custom animations
  - Font families
  - Extended utilities

- **postcss.config.js**: PostCSS plugins
  - TailwindCSS processing
  - Autoprefixer for browser compatibility

#### Source Files

- **main.jsx**: Application entry point
  - Renders App component
  - Sets up React Router

- **App.jsx**: Main application component
  - Includes all page sections
  - Manages theme state
  - Toast notifications setup

#### Components

- **Header.jsx**: Navigation bar
  - Responsive mobile menu
  - Theme toggle
  - Smooth scroll to sections
  - Active section highlighting

- **Hero.jsx**: Landing section
  - Animated introduction
  - Social links
  - Call-to-action buttons
  - Availability status

- **About.jsx**: About section
  - Personal biography
  - Quick facts
  - Scroll animations

- **Skills.jsx**: Skills showcase
  - Categorized skills
  - Animated progress bars
  - Technology icons

- **Projects.jsx**: Projects portfolio
  - Category filtering
  - Project cards with hover effects
  - Links to demos and source code

- **Contact.jsx**: Contact form
  - Form validation
  - Email sending via API
  - Success/error notifications

- **Footer.jsx**: Site footer
  - Quick links
  - Contact information
  - Social media links

#### Hooks

- **useTheme.js**: Dark/light theme management
  - Reads from localStorage
  - Syncs with system preference
  - Toggle function

- **useScrollSpy.js**: Navigation highlighting
  - Tracks scroll position
  - Highlights active section

- **useIntersectionObserver.js**: Scroll animations
  - Triggers animations when elements enter viewport

#### Data Files

- **personalInfo.js**: Personal details
  - Name, title, bio
  - Contact information
  - Social media links
  - Availability status

- **skills.js**: Skills and expertise
  - Categorized skill lists
  - Proficiency levels
  - Technology icons
  - Certifications

- **projects.js**: Portfolio projects
  - Project details
  - Technologies used
  - Demo and source links
  - Categories and tags

### Backend

#### Application Files

- **main.py**: FastAPI application
  - CORS configuration
  - Route registration
  - Error handling
  - Health check endpoints

- **config.py**: Application settings
  - Environment variables
  - SMTP configuration
  - Security settings
  - CORS origins

- **email.py**: Email service
  - SMTP connection
  - HTML email templates
  - Async email sending

#### API Endpoints

- **contact.py**: Contact form API
  - POST /api/contact
  - Request validation
  - Email sending
  - Response formatting

#### Schemas

- **contact.py**: Pydantic models
  - ContactRequest: Validates incoming data
  - ContactResponse: Formats API response
  - HealthResponse: Health check format

## Data Flow

### Contact Form Submission

```
User fills form
    ↓
Frontend validates input
    ↓
POST request to /api/contact
    ↓
Backend validates with Pydantic
    ↓
Email service sends message
    ↓
Response sent to frontend
    ↓
Toast notification shown
```

### Theme Toggle

```
User clicks theme button
    ↓
useTheme hook updates state
    ↓
State saved to localStorage
    ↓
CSS class applied to <html>
    ↓
Theme changes instantly
```

### Navigation

```
User clicks nav link
    ↓
Smooth scroll to section
    ↓
useScrollSpy detects position
    ↓
Active link highlighted
```

## Tech Stack Summary

### Frontend
- **React 18**: UI library
- **Vite**: Build tool
- **TailwindCSS**: Styling
- **Framer Motion**: Animations
- **Axios**: HTTP client
- **React Toastify**: Notifications

### Backend
- **Python 3.11+**: Language
- **FastAPI**: Web framework
- **Pydantic**: Data validation
- **aiosmtplib**: Email sending
- **Uvicorn**: ASGI server

### Development
- **ESLint**: Code linting
- **Docker**: Containerization
- **Git**: Version control

## Environment Variables

### Frontend (.env)
```
VITE_API_URL=http://localhost:8000
VITE_SITE_URL=http://localhost:5173
```

### Backend (.env)
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
EMAIL_FROM=your-email@gmail.com
EMAIL_TO=recipient@example.com
SECRET_KEY=your-secret-key
CORS_ORIGINS=http://localhost:5173
```

## API Endpoints

### Backend API

- `GET /` - Root endpoint (health check)
- `GET /health` - Health check
- `POST /api/contact` - Submit contact form
- `GET /docs` - Interactive API documentation
- `GET /redoc` - Alternative API documentation

### Request Example

```bash
curl -X POST http://localhost:8000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "subject": "Project Inquiry",
    "message": "I would like to discuss a project..."
  }'
```

### Response Example

```json
{
  "success": true,
  "message": "Your message has been sent successfully!"
}
```

## Next Steps

1. **Customize Data**: Update all files in `frontend/src/data/`
2. **Add Images**: Place images in `frontend/public/`
3. **Configure Email**: Set up SMTP in backend `.env`
4. **Test Locally**: Run both frontend and backend
5. **Deploy**: Follow deployment guide for your platform

## Additional Features to Consider

- [ ] Blog section with markdown support
- [ ] Animation presets library
- [ ] Multiple language support (i18n)
- [ ] Admin dashboard for content management
- [ ] Analytics integration (Google Analytics)
- [ ] Performance monitoring
- [ ] Newsletter subscription
- [ ] Testimonials section
- [ ] Resume builder integration
- [ ] Dark mode auto-detection

This structure provides a solid foundation for a modern, professional portfolio website that you can easily customize and extend!
