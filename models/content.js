const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Content = new Schema(
  {
    author: { type: String, required: true },
    imgURL: { type: String, required: true },
    content: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('contents', Content)