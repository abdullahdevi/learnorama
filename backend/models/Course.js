const mongoose = require('mongoose');

const LessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  quiz: [
    {
      question: { type: String, required: true },
      options: [String],
      correctAnswer: { type: Number, required: true }
    }
  ],
  isPremium: { type: Boolean, default: false }
});

const CourseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  category: { type: String, required: true },
  isPremium: { type: Boolean, default: false },
  lessons: [LessonSchema]
}, { timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);