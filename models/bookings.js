// Schema for reviews
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

module.exports = mongoose.model('reviews', {
  author: {
    type: _id,
    required: true,
    ref: 'users'
  },
  date: {
    type: date,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  house: {
    type: _id,
    required: true,
    ref: 'houses'
  }
})
