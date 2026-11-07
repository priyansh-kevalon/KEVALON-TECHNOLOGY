import mongoose from 'mongoose';

const jobApplicationSchema = new mongoose.Schema(
  {
    candidateName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
    },
    roleApplied: {
      type: String,
      required: true,
    },
    portfolioUrl: {
      type: String,
      trim: true,
    },
    resumeUrl: {
      type: String,
      trim: true,
    },
    coverLetter: {
      type: String,
    },
    status: {
      type: String,
      enum: ['submitted', 'screening', 'interview', 'offered', 'rejected'],
      default: 'submitted',
    },
  },
  {
    timestamps: true,
  }
);

const JobApplication =
  mongoose.models.JobApplication || mongoose.model('JobApplication', jobApplicationSchema);
export default JobApplication;
