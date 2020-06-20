const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
  area: {
    type: String,
    required: true
  },
  room: {
    type: String,
    required: true
  },
});

module.exports = mongoose.model('Location', locationSchema);
