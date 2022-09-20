// Import Packages
const express = require('express')
const router = express.Router()
const users = require('../models/users')

// controller routes

router.get('/login', (req, res) => {
  res.render('login')
})

router.get('/signup', (req, res) => {
  res.render('signup')
})

router.post('/login', (req, res) => {})

router.post('/signup', async (req, res, next) => {
  console.log(req.body)
  let user = await users.create(req.body)
  console.log('done')
  req.login(user, err => {
    try {
      if (
        users.findOne({
          email: req.body.email
        })
      ) {
        throw new Error('User with this email already exists')
      } else {
        res.redirect('/houses')
      }
    } catch (err) {
      next(err)
    }
  })
})

router.get('/logout', (req, res) => {})
// Export
module.exports = router
