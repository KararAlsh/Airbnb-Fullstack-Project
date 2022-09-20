// Import Packages
const express = require('express')
const router = express.Router()

// get controller
router.post('/', (req, res) => {
  res.render('/')
})
// Export
module.exports = router
