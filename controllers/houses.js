// Import Packages
const express = require('express')
const router = express.Router()

//get controller
router.get('/', (req, res) => {
  res.render('/')
})

router.get('/create', (req, res) => {
  res.render('../views/create')
})

router.get('/:id', (req, res) => {
  res.render('../views/')
})

router.get('/:id/edit', (req, res) => {
  res.render('../views/')
})

router.post('/', (req, res) => {
  res.render('../views/')
})

router.patch('/:id', (req, res) => {
  res.render('../views/')
})

router.delete('/:id', (req, res) => {
  res.render('../views/')
})
// Export
module.exports = router
