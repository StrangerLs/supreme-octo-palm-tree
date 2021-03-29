const Content = require('../models/content')
const db = require('../db/connection')

db.on('error', console.error.bind(console, 'Mongo DB connection error:'))

const getContents = async (req, res) => {
  try {
    const contents = await Content.find()
    res.json(contents)
  } catch (error) {
    res.status(500).json({ error: error.message})
  }
}

const getContent = async (req, res) => {
  try {
    const { id } = req.params
    const content = await Content.findById(id)
    if (content) {
      return res.json(content)
    }
    res.status(404).json({message: 'Product not found!'})
  } catch (error) {
    res.status(500).json({ error: error.message})
  }
}

const createContent = async (req, res) => {
  try {
    const content = await new Content(req.body)
    await content.save()
    res.status(201).json(content)
  } catch (error) {
    console.log(error)
    res.status(500).json({error: error.message })
  }
}

const updateContent = async (req, res) => {
  const { id } = req.params
  await Content.findByIdAndUpdate(id, req.body, { new: true }, (error, content) => {
    if (error) {
      return res.status(500).json({ error: error.message })
    }
    if (!content) {
      return res.status(404).json({ error: error.message})
    }
    res.status(200).json(content)
  })
}

const deleteContent = async (req, res) => {
  try {
    const { id } = req.params
    const deleted = await Content.findByIdAndDelete(id)
    if (deleted) {
      return res.status(200).send("Content Deleted")
    }
    throw new Error("Content not found")
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

module.exports = {
  createContent,
  getContents,
  getContent,
  updateContent,
  deleteContent
}