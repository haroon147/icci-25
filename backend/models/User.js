const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: 6
  },
  role: {
    type: Number,
    enum: [1, 2, 3, 4, 5], // 1=Super Admin, 2=Admin, 3=Manager, 4=Employee, 5=Data Entry
    default: 4
  },
  affiliation: {
    type: String,
    trim: true
  },
  phone: {
    type: String,
    trim: true
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next();
  
  try {
    const salt = await bcrypt.genSalt(12);
    this.password = await bcrypt.hash(this.password, salt);
    next();
  } catch (error) {
    next(error);
  }
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

// Get role name
userSchema.methods.getRoleName = function() {
  const roles = {
    1: 'Super Admin',
    2: 'Admin', 
    3: 'Manager',
    4: 'Employee',
    5: 'Data Entry'
  };
  return roles[this.role] || 'Unknown';
};

module.exports = mongoose.model('User', userSchema);
