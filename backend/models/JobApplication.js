import mongoose from 'mongoose';

const jobApplicationSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },
    lastName: {
      type: String,
      required: true,
      trim: true,
    },
    candidateName: {
      type: String,
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
      required: true,
      trim: true,
    },
    linkedinUrl: {
      type: String,
      trim: true,
    },
    portfolioUrl: {
      type: String,
      trim: true,
    },
    roleApplied: {
      type: String,
      required: true,
    },
    resumeFileName: {
      type: String,
    },
    resumeUrl: {
      type: String,
      trim: true,
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

jobApplicationSchema.pre('save', function (next) {
  if (this.firstName && this.lastName) {
    this.candidateName = `${this.firstName} ${this.lastName}`;
  }
  next();
});

const JobApplication =
  mongoose.models.JobApplication || mongoose.model('JobApplication', jobApplicationSchema);
export default JobApplication;
