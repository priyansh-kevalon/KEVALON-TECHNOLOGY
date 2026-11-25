import Contact from '../models/Contact.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import mongoose from 'mongoose';

// In-memory fallback if MongoDB is not connected in local dev
const inMemoryContacts = [];

export const submitContact = async (req, res, next) => {
  try {
    const {
      name,
      fullName,
      firstName,
      lastName,
      email,
      phone,
      service,
      subject,
      budget,
      message,
      brief,
    } = req.body;

    const candidateName =
      name ||
      fullName ||
      (firstName && lastName ? `${firstName} ${lastName}`.trim() : firstName || lastName);

    const clientEmail = email ? email.trim().toLowerCase() : '';
    const clientMessage = message || brief || '';

    if (!candidateName || !clientEmail || !clientMessage) {
      return errorResponse(
        res,
        400,
        'Please provide Name, Email address, and Project Message.'
      );
    }

    const payload = {
      name: candidateName.trim(),
      email: clientEmail,
      phone: phone ? phone.trim() : '',
      service: service || subject || 'custom-software',
      budget: budget || '$5k - $15k',
      message: clientMessage.trim(),
      ipAddress: req.ip || req.headers['x-forwarded-for'] || '',
      createdAt: new Date(),
    };

    let savedData = null;

    if (mongoose.connection.readyState === 1) {
      savedData = await Contact.create(payload);
    } else {
      payload._id = `temp_${Date.now()}`;
      inMemoryContacts.push(payload);
      savedData = payload;
      console.log('[Contact Service] Recorded in temporary cache (MongoDB offline).');
    }

    console.log(`[Contact Service] New inquiry from: ${candidateName} (${clientEmail}) for ${payload.service}`);

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
