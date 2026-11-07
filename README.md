# Kevalon Technology - Next-Gen MERN Web Architecture

A completely redesigned, modern, premium, and responsive company website for **Kevalon Technology**.

## Architectural Highlights
- **Design Philosophy**: Dark Futuristic Premium UI with custom glassmorphism, glowing micro-interactions, and neon accent highlights.
- **Frontend**: React 18 + Vite, Tailwind CSS v3, React Router DOM v6, Framer Motion, Lucide React, Axios.
- **Backend**: Node.js + Express.js REST API, MongoDB + Mongoose ORM, Helmet security headers, CORS, Morgan logger.
- **Color Palette**:
  - Primary: `#034665`
  - Secondary: `#068Dcb`
  - Background: `#050B14`
  - Cards: `#101B2A`
  - White: `#FFFFFF`
  - Accent: `#00C8FF`

---

## Directory Structure

```
KEVALON-TECHNOLOGY/
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── assets/
│   │   │   ├── icons/
│   │   │   ├── images/
│   │   │   └── logos/
│   │   ├── components/
│   │   │   ├── common/         # Button, Card, Badge, SectionHeading
│   │   │   ├── home/
│   │   │   ├── layout/         # Navbar, Footer
│   │   │   ├── portfolio/
│   │   │   └── services/
│   │   ├── context/            # AppContext
│   │   ├── hooks/              # useFetch
│   │   ├── layouts/            # RootLayout with ambient lighting & grid
│   │   ├── pages/              # 8 Core Pages + 404
│   │   │   ├── Home.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── ServiceDetails.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── Team.jsx
│   │   │   ├── Careers.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── NotFound.jsx
│   │   ├── routes/             # AppRoutes
│   │   ├── services/           # api.js (Axios client with interceptors)
│   │   ├── utils/              # Helper utilities
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── .env
│   └── .env.example
│
├── backend/
│   ├── config/                 # db.js (MongoDB connection with fallback)
│   ├── controllers/            # contactController, serviceController
│   ├── middleware/             # errorHandler, notFound
│   ├── models/                 # Contact, JobApplication
│   ├── routes/                 # index, contactRoutes, serviceRoutes
│   ├── services/               # mailService
│   ├── utils/                  # apiResponse, logger
│   ├── uploads/
│   ├── server.js               # Express application entry
│   ├── package.json
│   ├── .env
│   └── .env.example
│
└── package.json                # Root convenience scripts
```

---

## Running the Project

### 1. Run the Backend API Server
```bash
cd KEVALON-TECHNOLOGY/backend
npm run dev
```
- Server URL: `http://localhost:5000`
- API Health Check: `http://localhost:5000/api/health`

### 2. Run the Frontend Client
In a new terminal window:
```bash
cd KEVALON-TECHNOLOGY/frontend
npm run dev
```
- Client URL: `http://localhost:5173`
- Previews the full website across all 8 routes with real-time backend API connection status.
