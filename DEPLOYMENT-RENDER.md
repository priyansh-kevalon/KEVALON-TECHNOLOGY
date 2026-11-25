# 🚀 Kevalon Technology - Render Live Deployment Guide

This repository is fully configured for seamless deployment on **[Render.com](https://render.com/)**.

---

## 🌟 Method 1: Unified Fullstack Deployment (Recommended)
> **Benefit:** Free tier friendly (1 Web Service), zero CORS issues, automated builds, and unified domain!

### Steps on Render:
1. Log in to [Render Dashboard](https://dashboard.render.com/).
2. Click **New +** ➔ **Web Service**.
3. Connect your GitHub/GitLab repository (`KEVALON WEBSITE` or `KEVALON-TECHNOLOGY`).
4. Configure the settings:
   - **Name:** `kevalon-technology` (or your choice)
   - **Region:** `Oregon (US West)` or `Singapore (Southeast Asia)`
   - **Branch:** `main` (or your default branch)
   - **Root Directory:** Leave empty (or `KEVALON-TECHNOLOGY` if inside a subfolder)
   - **Environment:** `Node`
   - **Build Command:**
     ```bash
     npm run build
     ```
   - **Start Command:**
     ```bash
     npm start
     ```
   - **Plan:** `Free`

5. **Add Environment Variables** (Under "Environment"):
   | Key | Value |
   |-----|-------|
   | `NODE_ENV` | `production` |
   | `MONGO_URI` | `mongodb+srv://priyanshkevalon_db_user:6AiJiHX8JVquD0DB@cluster0.xg6lncl.mongodb.net/kevalon_technology?retryWrites=true&w=majority` |
   | `PORT` | `10000` |

6. Click **Deploy Web Service**.
7. In 2-3 minutes, your site will be live at:
   `https://kevalon-technology.onrender.com`

---

## 🌐 Method 2: Separate Deployments (Frontend Static Site + Backend Web Service)

If you prefer hosting the React frontend as a Static Site and the Node.js API as a Web Service:

### Step A: Deploy Backend (Web Service)
1. In Render, click **New +** ➔ **Web Service**.
2. Settings:
   - **Root Directory:** `backend` (or `KEVALON-TECHNOLOGY/backend`)
   - **Build Command:** `npm install`
   - **Start Command:** `node server.js`
   - **Environment Variables:**
     - `NODE_ENV`: `production`
     - `MONGO_URI`: `mongodb+srv://priyanshkevalon_db_user:6AiJiHX8JVquD0DB@cluster0.xg6lncl.mongodb.net/kevalon_technology?retryWrites=true&w=majority`
     - `CLIENT_URL`: `https://your-frontend-name.onrender.com`
3. Note your backend URL (e.g., `https://kevalon-api.onrender.com`).

### Step B: Deploy Frontend (Static Site)
1. In Render, click **New +** ➔ **Static Site**.
2. Settings:
   - **Root Directory:** `frontend` (or `KEVALON-TECHNOLOGY/frontend`)
   - **Build Command:** `npm install && npm run build`
   - **Publish Directory:** `dist`
   - **Environment Variables:**
     - `VITE_API_BASE_URL`: `https://kevalon-api.onrender.com/api`
3. In Static Site **Redirects/Rewrites**:
   - Add a rewrite rule for single-page applications:
     - **Source:** `/*`
     - **Destination:** `/index.html`
     - **Action:** `Rewrite`
