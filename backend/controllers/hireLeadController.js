import HireLead from '../models/HireLead.js';
import Contact from '../models/Contact.js';
import { successResponse, errorResponse } from '../utils/apiResponse.js';
import mongoose from 'mongoose';

export const submitHireLead = async (req, res, next) => {
  try {
    const {
      name,
      fullName,
      email,
      phone,
      service,
      role,
      budget,
      message,
      brief,
    } = req.body;

    const candidateName = name || fullName;
    const clientEmail = email ? email.trim().toLowerCase() : '';
    const requirements = message || brief;

    if (!candidateName || !clientEmail || !requirements) {
      return errorResponse(
        res,
        400,
        'Please provide Name, Email, and Project Requirements.'
      );
    }

    const payload = {
      name: candidateName.trim(),
      email: clientEmail,
      phone: phone ? phone.trim() : '',
      service: service || 'Hire Dedicated Developers',
      role: role || service || '',
      budget: budget || '$5k - $15k',
      message: requirements.trim(),
      ipAddress: req.ip || req.headers['x-forwarded-for'] || '',
    };

    let hireLead = null;

    if (mongoose.connection.readyState === 1) {
      hireLead = await HireLead.create(payload);

      // Also mirror to Contact collection for unified admin view
      try {
        await Contact.create({
          name: payload.name,
          email: payload.email,
          phone: payload.phone,
          service: `[Staff Augmentation] ${payload.service}`,
          budget: payload.budget,
          message: payload.message,
          ipAddress: payload.ipAddress,
        });
      } catch (err) {
        console.warn('Note: Contact mirror skipped:', err.message);
      }
    } else {
      payload._id = `temp_hire_${Date.now()}`;
      hireLead = payload;
    }

    console.log(`[Hire Lead] New developer request from: ${candidateName} (${clientEmail}) for ${payload.service}`);

    return successResponse(
      res,
      201,
      'Your developer consultation request has been received. Our technical talent director will contact you within 24 hours.',
      hireLead
    );
  } catch (error) {
    console.error('Hire Lead Error:', error);
    next(error);
  }
};

export const getAllHireLeads = async (req, res, next) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const leads = await HireLead.find().sort({ createdAt: -1 });
      return successResponse(res, 200, 'Hire leads retrieved successfully', leads);
    }
    return successResponse(res, 200, 'MongoDB offline, no leads retrieved', []);
  } catch (error) {
    next(error);
  }
};
