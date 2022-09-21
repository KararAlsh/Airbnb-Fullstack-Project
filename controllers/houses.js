// Import Packages
const express = require('express')
const router = express.Router()

//get controller
router.get('/', (req, res) => {
  let loggedUser = req.user
  res.render('houses/list', { loggedUser })
})

router.get('/create', (req, res) => {
  if (req.isAuthenticated()) {
    let loggedUser = req.user
    res.render('./houses/create', { loggedUser })
  } else {
    res.redirect('../auth/login')
  }
})

router.get('/:id', (req, res) => {
  let loggedUser = req.user
  res.render('houses/one', { loggedUser })
})

router.get('/:id/edit', (req, res) => {
  if (req.isAuthenticated()) {
    let loggedUser = req.user
    res.render('./houses/edit', { loggedUser })
  } else {
    res.redirect('/auth/login')
  }
})

router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    let loggedUser = req.user
    res.render('./houses', { loggedUser })
  } else {
    res.redirect('/auth/login')
  }
})

router.patch('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    let loggedUser = req.user
    res.render('./houses', { loggedUser })
  } else {
    res.redirect('/auth/login')
  }
})

router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    let loggedUser = req.user
    res.render('./houses', { loggedUser })
  } else {
    res.redirect('/auth/login')
  }
})
// Export
module.exports = router
