import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

import { connectDB } from './config/db.js';
import apiRoutes from './routes/index.js';
import { notFound } from './middleware/notFound.js';
import { errorHandler } from './middleware/errorHandler.js';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Security and utility middleware
app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginEmbedderPolicy: false,
  })
);

// Dynamic CORS for Render, Localhost, and Custom Domains
const clientUrls = (process.env.CLIENT_URL || '')
  .split(',')
  .map((url) => url.trim())
  .filter(Boolean);

const allowedOrigins = [
  ...clientUrls,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  'https://kevalontechnology.in',
  'https://www.kevalontechnology.in',
];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (like mobile apps, curl, or same-origin)
      if (!origin) return callback(null, true);
      if (
        allowedOrigins.includes(origin) ||
        origin.endsWith('.onrender.com') ||
        origin.includes('localhost') ||
        origin.includes('kevalon')
      ) {
        return callback(null, true);
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Static upload files
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Core API Gateway
app.use('/api', apiRoutes);

// Production Static Serving: Serve built React frontend from frontend/dist
const frontendDist = path.join(__dirname, '../frontend/dist');

if (fs.existsSync(frontendDist)) {
  console.log(`[Static Web] Serving production frontend from: ${frontendDist}`);
  app.use(express.static(frontendDist));

  // Client-side single page app fallback for React Router
  app.get('*', (req, res, next) => {
    if (req.originalUrl.startsWith('/api') || req.originalUrl.startsWith('/uploads')) {
      return next();
    }
    res.sendFile(path.join(frontendDist, 'index.html'));
  });
} else {
  // Fallback API root landing when frontend is not built locally
  app.get('/', (req, res) => {
    res.json({
      status: 'online',
      system: 'Kevalon Technology API Core Engine',
      version: '1.0.0',
      database: 'connected',
      endpoints: {
        health: '/api/health',
        contact: '/api/contact',
        services: '/api/services',
        applications: '/api/applications',
      },
    });
  });
}

// Error Handling Middleware for API routes
app.use(notFound);
app.use(errorHandler);

// Establish database connection and start server
const startServer = async () => {
  await connectDB();

  const server = app.listen(PORT, () => {
    console.log(
      `[Kevalon Server] Running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`
    );
    console.log(`[Kevalon Server] Gateway: http://localhost:${PORT}`);
  });

  // Handle unhandled promise rejections
  process.on('unhandledRejection', (err) => {
    console.error(`[Unhandled Rejection]: ${err.message}`);
  });

  return server;
};

startServer();

export default app;
