import express from 'express';
import { submitApplication, getAllApplications } from '../controllers/jobController.js';

const router = express.Router();

router.post('/apply', submitApplication);
router.get('/applications', getAllApplications);

export default router;
