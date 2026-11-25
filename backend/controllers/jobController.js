import JobApplication from '../models/JobApplication.js';
import mongoose from 'mongoose';

// In-memory fallback if MongoDB is temporarily unavailable
const inMemoryApplications = [];

export const submitApplication = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      name,
      fullName,
      email,
      phone,
      linkedinUrl,
      linkedInProfile,
      portfolioUrl,
      roleApplied,
      role,
      resumeFileName,
      resumeUrl,
    } = req.body;

    // Handle split or combined names
    let fName = firstName || '';
    let lName = lastName || '';

    if (!fName && (fullName || name)) {
      const parts = (fullName || name).trim().split(' ');
      fName = parts[0] || 'Candidate';
      lName = parts.slice(1).join(' ') || 'Applicant';
    }

    const clientEmail = email ? email.trim().toLowerCase() : '';
    const clientPhone = phone ? phone.trim() : '';
    const chosenRole = roleApplied || role || 'Software Developer';

    if (!fName || !clientEmail || !clientPhone || !chosenRole) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: First Name, Last Name, Email, Phone, and Role Applied.',
      });
    }

    const payload = {
      firstName: fName.trim(),
      lastName: (lName || 'Applicant').trim(),
      candidateName: `${fName} ${lName}`.trim(),
      email: clientEmail,
      phone: clientPhone,
      linkedinUrl: linkedinUrl || linkedInProfile || '',
      portfolioUrl: portfolioUrl || '',
      roleApplied: chosenRole,
      resumeFileName: resumeFileName || (req.file ? req.file.originalname : 'Resume_Attached.pdf'),
      resumeUrl: resumeUrl || (req.file ? `/uploads/${req.file.filename}` : ''),
      status: 'submitted',
    };

    let application = null;

    if (mongoose.connection.readyState === 1) {
      application = await JobApplication.create(payload);
    } else {
      payload._id = `temp_job_${Date.now()}`;
      payload.createdAt = new Date();
      inMemoryApplications.push(payload);
      application = payload;
      console.log('[Job Application] Stored in local fallback (MongoDB offline).');
    }

    console.log(`[Job Application] New candidate: ${payload.candidateName} for ${chosenRole}`);

    return res.status(201).json({
      success: true,
      message: 'Your job application has been submitted successfully to Kevalon Technology HR!',
      data: {
        id: application._id,
        candidateName: payload.candidateName,
        roleApplied: chosenRole,
        submittedAt: application.createdAt,
      },
    });
  } catch (error) {
    console.error('Job Application Error:', error);
    return res.status(500).json({
      success: false,
      message: 'Failed to process application. Please try again or email careers@kevalontechnology.in',
      error: error.message,
    });
  }
};

export const getAllApplications = async (req, res) => {
  try {
    if (mongoose.connection.readyState === 1) {
      const applications = await JobApplication.find().sort({ createdAt: -1 });
      return res.status(200).json({
        success: true,
        count: applications.length,
        data: applications,
      });
    } else {
      return res.status(200).json({
        success: true,
        count: inMemoryApplications.length,
        data: inMemoryApplications,
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error fetching applications',
      error: error.message,
    });
  }
};
