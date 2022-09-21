// Import Packages
const express = require('express')
const router = express.Router()

// get controller
router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.redirect('/bookings')
  } else {
    res.redirect('../auth/login')
  }
})
// Export
module.exports = router
