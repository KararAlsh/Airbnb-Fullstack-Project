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
// to log in
router.post('/login', async (req, res, next) => {
  try {
    let foundUser = await users.findOne({
      email: req.body.email,
      password: req.body.password
    })
    if (foundUser) {
      req.login(foundUser, err => {
        if (err) {
          throw new Error('Email or password might be wrong, try again')
        } else {
          res.redirect('/houses')
        }
      })
    } else {
      throw new Error('Email or password might be wrong, try again')
    }
  } catch (err) {
    next(err)
  }
})
// end of log in
// to sign up
router.post('/signup', async (req, res, next) => {
  try {
    if (
      await users.findOne({
        email: req.body.email
      })
    ) {
      throw new Error('User with this email already exists')
    } else {
      let user = await users.create(req.body)
      req.login(user, err => {
        if (err) throw new Error(err)
        else res.redirect('/houses')
      })
    }
  } catch (err) {
    next(err)
    return
  }
})
// end of signup
// to logout
router.get('/logout', (req, res) => {
  req.logout()
  req.session.destroy(err => {
    if (err) {
      next(err)
    }
    res.clearCookie('connect.sid')
    res.redirect('login')
  })
})
// end of logout
// Export
module.exports = router
