import JobApplication from '../models/JobApplication.js';

export const submitApplication = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      linkedinUrl,
      portfolioUrl,
      roleApplied,
      resumeFileName,
      resumeUrl,
    } = req.body;

    if (!firstName || !lastName || !email || !phone || !roleApplied) {
      return res.status(400).json({
        success: false,
        message: 'Please provide all required fields: First Name, Last Name, Email, Phone, and Role Applied.',
      });
    }

    const application = new JobApplication({
      firstName,
      lastName,
      email,
      phone,
      linkedinUrl: linkedinUrl || '',
      portfolioUrl: portfolioUrl || '',
      roleApplied,
      resumeFileName: resumeFileName || '',
      resumeUrl: resumeUrl || '',
    });

    await application.save();

    return res.status(201).json({
      success: true,
      message: 'Your job application has been submitted successfully to Kevalon Technology HR!',
      data: {
        id: application._id,
        candidateName: `${firstName} ${lastName}`,
        roleApplied,
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
    const applications = await JobApplication.find().sort({ createdAt: -1 });
    return res.status(200).json({
      success: true,
      count: applications.length,
      data: applications,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error fetching applications',
      error: error.message,
    });
  }
};
