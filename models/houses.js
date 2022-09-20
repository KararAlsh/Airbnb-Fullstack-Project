// Schema for houses
const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId

module.exports = mongoose.model('houses', {
  description: {
    type: String,
    required: true
  },
  host: {
    type: _id,
    required: true,
    ref: 'users'
  },
  location: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  photos: [(type: String)],

  price: {
    type: Number,
    required: true
  },
  rooms: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
