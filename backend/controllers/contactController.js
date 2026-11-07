import Contact from '../models/Contact.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import mongoose from 'mongoose';

// In-memory fallback if MongoDB is not connected in local dev
const inMemoryContacts = [];

export const submitContact = async (req, res, next) => {
  try {
    const { name, email, phone, service, budget, message } = req.body;

    if (!name || !email || !message) {
      return errorResponse(res, 400, 'Please provide name, email, and message fields.');
    }

    const payload = {
      name,
      email,
      phone: phone || '',
      service: service || 'custom-software',
      budget: budget || '$5k - $15k',
      message,
      ipAddress: req.ip || req.headers['x-forwarded-for'] || '',
      createdAt: new Date(),
    };

    let savedData = null;

    if (mongoose.connection.readyState === 1) {
      // MongoDB is connected
      savedData = await Contact.create(payload);
    } else {
      // In-memory fallback for initial local testing without active DB
      payload._id = `temp_${Date.now()}`;
      inMemoryContacts.push(payload);
      savedData = payload;
      console.log('[Contact Service] Recorded in temporary cache (MongoDB not connected).');
    }

    console.log(`[Contact Service] New inquiry from: ${name} (${email})`);

    return successResponse(
      res,
      201,
      'Your inquiry has been received. Our engineering lead will get back to you shortly.',
      savedData
    );
  } catch (error) {
    next(error);
  }
};

export const getAllContacts = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const contacts = await Contact.find().sort({ createdAt: -1 });
      return successResponse(res, 200, 'Contacts retrieved successfully', contacts);
    } else {
      return successResponse(
        res,
        200,
        'Retrieved from cache (MongoDB offline)',
        inMemoryContacts
      );
    }
  } catch (error) {
    next(error);
  }
};
