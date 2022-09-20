// Import Packages
const express = require('express')
const router = express.Router()

// get controller
router.get('/', (req, res) => {
  res.render('profile')
})

router.patch('/', (req, res) => {})
// Export
module.exports = router
