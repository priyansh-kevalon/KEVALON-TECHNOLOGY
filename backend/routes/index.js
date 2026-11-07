import express from 'express';
import contactRoutes from './contactRoutes.js';
import serviceRoutes from './serviceRoutes.js';
import jobRoutes from './jobRoutes.js';
import mongoose from 'mongoose';

const router = express.Router();

// System Health Check
router.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Kevalon Technology API Core is running optimally',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development',
    database: {
      connected: mongoose.connection.readyState === 1,
      status: ['disconnected', 'connected', 'connecting', 'disconnecting'][mongoose.connection.readyState] || 'unknown',
    },
  });
});

// Mount modular sub-routes
router.use('/contact', contactRoutes);
router.use('/services', serviceRoutes);
router.use('/jobs', jobRoutes);
router.use('/careers', jobRoutes);

export default router;
