import mongoose from 'mongoose';

const hireLeadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
      maxlength: [120, 'Name cannot exceed 120 characters'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      trim: true,
      lowercase: true,
    },
    phone: {
      type: String,
      trim: true,
      default: '',
    },
    service: {
      type: String,
      required: true,
      default: 'Hire Dedicated Developers',
    },
    role: {
      type: String,
      default: '',
    },
    budget: {
      type: String,
      default: '$5k - $15k',
    },
    message: {
      type: String,
      required: [true, 'Project requirements are required'],
      maxlength: [3000, 'Requirements cannot exceed 3000 characters'],
    },
    status: {
      type: String,
      enum: ['new', 'reviewing', 'interview-scheduled', 'hired', 'archived'],
      default: 'new',
    },
    ipAddress: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

const HireLead = mongoose.models.HireLead || mongoose.model('HireLead', hireLeadSchema);
export default HireLead;
