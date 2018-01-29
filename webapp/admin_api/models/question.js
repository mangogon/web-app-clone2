const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const QuestionSchema = new Schema({
  id: {
    type: String,
    unique: true,
    required: true
  },
  text: {
    type: String,
    required: true,
  },
  character: {
    type: String,
    required: true
  },
  case: {
    type: String
  },
  type: {
    type: String,
    required: true
  },
  crazy: {
    type: Boolean
  },
  options: {}
});

module.exports = mongoose.model('Question', QuestionSchema, 'questions');
