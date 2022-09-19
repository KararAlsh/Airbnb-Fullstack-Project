// Import Packages
const express = require('express')
const router = express.Router()
// controller routes
router.get('/', (req, res) => {
  res.send('Hello from Houses')
})

router.get('/login', (req, res) => {
  res.render('../views/login')
})

router.get('/signup', (req, res) => {
  res.render('../views/signup')
})

router.post('/login', (req, res) => {
  res.render('../views/profile')
})

router.post('/signup', (req, res) => {
  res.render('../views/profile')
})

router.get('/logout', (req, res) => {
  res.render('../views/login')
})
// Export
module.exports = router
