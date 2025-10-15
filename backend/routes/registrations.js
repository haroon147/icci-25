const express = require('express');
const Registration = require('../models/Registration');

const router = express.Router();

// Get all registrations
router.get('/', async (req, res) => {
  try {
    const { paymentStatus, registrationType } = req.query;
    let query = {};

    if (paymentStatus) query.paymentStatus = paymentStatus;
    if (registrationType) query.registrationType = registrationType;

    const registrations = await Registration.find(query)
      .populate('user', 'name email affiliation')
      .sort({ registrationDate: -1 });

    res.json(registrations);
  } catch (error) {
    console.error('Error fetching registrations:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get registration by ID
router.get('/:id', async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id)
      .populate('user', 'name email affiliation phone');

    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    res.json(registration);
  } catch (error) {
    console.error('Error fetching registration:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new registration
router.post('/', async (req, res) => {
  try {
    const registrationData = req.body;
    
    // Check if user already has a registration
    const existingRegistration = await Registration.findOne({ 
      user: registrationData.user 
    });
    
    if (existingRegistration) {
      return res.status(400).json({ 
        message: 'User already has a registration' 
      });
    }

    const registration = new Registration(registrationData);
    await registration.save();
    
    const populatedRegistration = await Registration.findById(registration._id)
      .populate('user', 'name email affiliation');

    res.status(201).json({
      message: 'Registration created successfully',
      registration: populatedRegistration
    });
  } catch (error) {
    console.error('Error creating registration:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update registration
router.put('/:id', async (req, res) => {
  try {
    const updates = req.body;
    
    const registration = await Registration.findById(req.params.id);
    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    // Update fields
    Object.keys(updates).forEach(key => {
      if (updates[key] !== undefined) {
        registration[key] = updates[key];
      }
    });

    await registration.save();

    const updatedRegistration = await Registration.findById(registration._id)
      .populate('user', 'name email affiliation');

    res.json({
      message: 'Registration updated successfully',
      registration: updatedRegistration
    });
  } catch (error) {
    console.error('Error updating registration:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete registration
router.delete('/:id', async (req, res) => {
  try {
    const registration = await Registration.findById(req.params.id);
    if (!registration) {
      return res.status(404).json({ message: 'Registration not found' });
    }

    await Registration.findByIdAndDelete(req.params.id);
    res.json({ message: 'Registration deleted successfully' });
  } catch (error) {
    console.error('Error deleting registration:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
