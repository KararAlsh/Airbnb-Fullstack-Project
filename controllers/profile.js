// Import Packages
const express = require('express')
const router = express.Router()

// get controller
router.get('/', (req, res) => {
  if (req.isAuthenticated()) {
    let loggedUser = req.user
    res.render('./profile', { loggedUser })
  } else {
    res.redirect('/auth/login')
  }
})

router.patch('/', (req, res) => {})
// Export
module.exports = router
