// Import Packages
const express = require('express')
const router = express.Router()

//get controller
router.get('/', (req, res) => {
  let loggedUser = req.user
  res.render('reviews', { loggedUser })
})

router.post('/', (req, res) => {})
// Export
module.exports = router
