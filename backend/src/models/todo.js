const { Schema, model } = require('mongoose');

const TodoSchema = Schema({
  title: {
    type: String,
    required: [true, 'The title is required'],
  }
});

module.exports = model('Todo', TodoSchema);
