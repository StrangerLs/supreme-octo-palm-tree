const { Router } = require('express');
const controllers = require('../controllers/content')

const router = Router()

router.get('/contents', controllers.getContents)
router.get('/contents/:id', controllers.getContent)
router.post('/contents', controllers.createContent)
router.put('/contents/:id', controllers.updateContent)
router.delete('/contents/:id', controllers.deleteContent)

module.exports = router 