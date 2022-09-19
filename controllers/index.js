// Import Packages
const express = require('express')
const router = express.Router()

//get Controller
router.get('/', (req, res) => {
  res.send('Hello from Houseb')
})
// Export
module.exports = router
