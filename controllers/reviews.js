// Import Packages
const express = require('express')
const router = express.Router()

//get controller
router.get('/', (req, res) => {
  res.send('Hello from Housec')
})

router.post('/', (req, res) => {
  res.render('/')
})
// Export
module.exports = router
