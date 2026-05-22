const express = require('express');
const router = express.Router();
const Course = require('../models/Course');

// GET single course by ID — must be before /:category
router.get('/single/:id', async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) return res.status(404).json({ msg: 'Course not found' });
    res.json(course);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// GET all courses by category
router.get('/:category', async (req, res) => {
  try {
    const courses = await Course.find({ category: req.params.category });
    res.json(courses);
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;