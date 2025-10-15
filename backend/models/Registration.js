const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  registrationType: {
    type: String,
    required: true,
    enum: ['Student', 'Academic', 'Industry', 'International']
  },
  registrationFee: {
    type: Number,
    required: true
  },
  paymentStatus: {
    type: String,
    enum: ['Pending', 'Completed', 'Failed', 'Refunded'],
    default: 'Pending'
  },
  paymentMethod: {
    type: String,
    enum: ['Credit Card', 'Bank Transfer', 'PayPal', 'Other']
  },
  paymentReference: {
    type: String,
    trim: true
  },
  accommodation: {
    required: {
      type: Boolean,
      default: false
    },
    checkIn: Date,
    checkOut: Date,
    roomType: {
      type: String,
      enum: ['Single', 'Double', 'Suite']
    }
  },
  dietaryRequirements: {
    type: String,
    trim: true
  },
  specialNeeds: {
    type: String,
    trim: true
  },
  tshirtSize: {
    type: String,
    enum: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
  },
  registrationDate: {
    type: Date,
    default: Date.now
  },
  isConfirmed: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Registration', registrationSchema);
