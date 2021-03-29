const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Content = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    imgURL: { type: String, required: true },
    post: { type: String, required: true }
  },
  { timestamps: true }
)

module.exports = mongoose.model('contents', Content)