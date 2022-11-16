// Import Packages
const express = require('express')
const router = express.Router()
// models
const Users = require('../models/users.js')
const Houses = require('../models/houses.js')
//get controller

router.get('/', async (req, res) => {
  let loggedUser = req.user
  if (req.isAuthenticated()) {
    let houses = await Houses.find({
      host: req.user._id
    })
    res.render('profile', { loggedUser, houses })
  } else {
    res.redirect('../auth/login')
  }
})

router.patch('/profile', async (req, res) => {
  let loggedUser = req.user
  if (req.isAuthenticated()) {
    // refreshing with new data through the form using findByIdAndUpdate
    let user = await Users.findByIdAndUpdate(req.user._id, req.body, {
      new: true
    })
    req.login(user, err => {
      res.redirect('/profile')
    })
  } else {
    res.redirect('../auth/login')
  }
})
// Export
module.exports = router
