const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const User = require('../models/User');
const { v4: uuidv4 } = require('uuid');

// Mark a course as complete
router.post('/complete', auth, async (req, res) => {
  const { courseId } = req.body;

  try {
    const user = await User.findById(req.user.id);

    const alreadyDone = user.completedCourses.find(
      c => c.courseId.toString() === courseId
    );

    if (alreadyDone) {
      return res.json({
        msg: 'Already completed',
        certificateId: alreadyDone.certificateId
      });
    }

    const certificateId = 'LRNO-' + uuidv4().slice(0, 8).toUpperCase();

    user.completedCourses.push({ courseId, certificateId });
    await user.save();

    res.json({ msg: 'Course completed', certificateId });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

// Get all completed courses for the logged-in user
router.get('/mine', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).populate('completedCourses.courseId', 'title category');
    res.json(user.completedCourses);
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;