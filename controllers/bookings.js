// Import Packages
const express = require('express')
const router = express.Router()

// get controller
router.post('/', (req, res) => {
  res.send('Hello from Housem')
})
// Export
module.exports = router
