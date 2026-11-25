import express from 'express';
import { submitHireLead, getAllHireLeads } from '../controllers/hireLeadController.js';

const router = express.Router();

router.route('/')
  .post(submitHireLead)
  .get(getAllHireLeads);

router.post('/inquire', submitHireLead);

export default router;
