// Import Packages
const express = require('express')
const router = express.Router()

// get controller
router.get('/', (req, res) => {
  res.send('Hello from Housev')
})
// Export
module.exports = router
