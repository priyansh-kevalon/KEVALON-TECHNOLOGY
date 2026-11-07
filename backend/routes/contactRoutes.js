import express from 'express';
import { submitContact, getAllContacts } from '../controllers/contactController.js';

const router = express.Router();

router.route('/')
  .post(submitContact)
  .get(getAllContacts);

export default router;
