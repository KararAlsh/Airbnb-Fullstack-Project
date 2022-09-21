// Import Packages
const express = require('express')
const router = express.Router()

//get controller
router.get('/', (req, res) => {
  res.render('houses/list')
})

router.get('/create', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('./houses/create')
  } else {
    res.redirect('../auth/login')
  }
})

router.get('/:id', (req, res) => {
  res.render('houses/one')
})

router.get('/:id/edit', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('./houses/edit')
  } else {
    res.redirect('/auth/login')
  }
})

router.post('/', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('./houses')
  } else {
    res.redirect('/auth/login')
  }
})

router.patch('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('./houses')
  } else {
    res.redirect('/auth/login')
  }
})

router.delete('/:id', (req, res) => {
  if (req.isAuthenticated()) {
    res.render('./houses')
  } else {
    res.redirect('/auth/login')
  }
})
// Export
module.exports = router
