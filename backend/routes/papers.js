const express = require('express');
const Paper = require('../models/Paper');

const router = express.Router();

// Get all papers
router.get('/', async (req, res) => {
  try {
    const { status, category, track } = req.query;
    let query = {};

    if (status) query.status = status;
    if (category) query.category = category;
    if (track) query.track = track;

    const papers = await Paper.find(query)
      .populate('correspondingAuthor', 'name email')
      .sort({ submissionDate: -1 });

    res.json(papers);
  } catch (error) {
    console.error('Error fetching papers:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Get paper by ID
router.get('/:id', async (req, res) => {
  try {
    const paper = await Paper.findById(req.params.id)
      .populate('correspondingAuthor', 'name email')
      .populate('reviewComments.reviewer', 'name email');

    if (!paper) {
      return res.status(404).json({ message: 'Paper not found' });
    }

    res.json(paper);
  } catch (error) {
    console.error('Error fetching paper:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Create new paper
router.post('/', async (req, res) => {
  try {
    const paperData = req.body;
    const paper = new Paper(paperData);
    
    await paper.save();
    
    const populatedPaper = await Paper.findById(paper._id)
      .populate('correspondingAuthor', 'name email');

    res.status(201).json({
      message: 'Paper submitted successfully',
      paper: populatedPaper
    });
  } catch (error) {
    console.error('Error creating paper:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Update paper
router.put('/:id', async (req, res) => {
  try {
    const { status, reviewComments } = req.body;
    
    const paper = await Paper.findById(req.params.id);
    if (!paper) {
      return res.status(404).json({ message: 'Paper not found' });
    }

    if (status) paper.status = status;
    if (reviewComments) {
      paper.reviewComments.push(reviewComments);
    }

    await paper.save();

    const updatedPaper = await Paper.findById(paper._id)
      .populate('correspondingAuthor', 'name email')
      .populate('reviewComments.reviewer', 'name email');

    res.json({
      message: 'Paper updated successfully',
      paper: updatedPaper
    });
  } catch (error) {
    console.error('Error updating paper:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// Delete paper
router.delete('/:id', async (req, res) => {
  try {
    const paper = await Paper.findById(req.params.id);
    if (!paper) {
      return res.status(404).json({ message: 'Paper not found' });
    }

    await Paper.findByIdAndDelete(req.params.id);
    res.json({ message: 'Paper deleted successfully' });
  } catch (error) {
    console.error('Error deleting paper:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
