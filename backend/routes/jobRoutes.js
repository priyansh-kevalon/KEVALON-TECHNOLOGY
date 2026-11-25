import express from 'express';
import { submitApplication, getAllApplications } from '../controllers/jobController.js';

const router = express.Router();

router.post('/apply', submitApplication);
router.post('/', submitApplication);
router.get('/applications', getAllApplications);
router.get('/', getAllApplications);

export default router;
