// Import Packages
const express = require('express')
const router = express.Router()

//get controller
router.get('/', (req, res) => {
  res.render('/')
})

router.post('/', (req, res) => {})
// Export
module.exports = router
