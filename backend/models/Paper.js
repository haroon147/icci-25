const mongoose = require('mongoose');

const paperSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  abstract: {
    type: String,
    required: [true, 'Abstract is required'],
    minlength: 100
  },
  keywords: [{
    type: String,
    trim: true
  }],
  authors: [{
    name: {
      type: String,
      required: true,
      trim: true
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true
    },
    affiliation: {
      type: String,
      trim: true
    },
    isCorresponding: {
      type: Boolean,
      default: false
    }
  }],
  correspondingAuthor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
  category: {
    type: String,
    required: true,
    enum: ['Research Paper', 'Short Paper', 'Poster', 'Demo', 'Workshop']
  },
  track: {
    type: String,
    required: true,
    enum: ['Technical', 'Applied', 'Theoretical', 'Interdisciplinary']
  },
  status: {
    type: String,
    enum: ['Submitted', 'Under Review', 'Accepted', 'Rejected', 'Revision Required'],
    default: 'Submitted'
  },
  filePath: {
    type: String
  },
  reviewComments: [{
    reviewer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    comment: String,
    rating: {
      type: Number,
      min: 1,
      max: 5
    },
    createdAt: {
      type: Date,
      default: Date.now
    }
  }],
  submissionDate: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Paper', paperSchema);
