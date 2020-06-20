const mongoose = require('mongoose');

const { Schema } = mongoose;

const trickSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  requirements: [{
    type: String,
    required: true
  }],
  location: {
    type: Schema.Types.ObjectId,
    ref: 'Location',
    required: true
  },
  description: {
    type: String,
    required: true,
  },
  videoUrl: {
    type: String,
    required: true,
  },
  slideshowImages: [{
    image: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    }
  }],
});

module.exports = mongoose.model('Trick', trickSchema);
