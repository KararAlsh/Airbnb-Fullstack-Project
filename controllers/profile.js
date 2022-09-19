// Import Packages
const express = require('express')
const router = express.Router()

// get controller
router.get('/', (req, res) => {
  res.render('/')
})

router.patch('/', (req, res) => {
  res.render('/')
})
// Export
module.exports = router
