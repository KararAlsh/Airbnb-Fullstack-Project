// Import Packages
const express = require('express')
const router = express.Router()
const Houses = require('../models/houses.js')
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

router.get('/:id', async (req, res) => {
  const house = await Houses.findById(req.params.id).populate('host')
  console.log(house)
  let loggedUser = req.user

  res.render('houses/one', { loggedUser, house })
})

router.get('/:id/edit', (req, res) => {
  if (req.isAuthenticated()) {
    let loggedUser = req.user
    res.render('./houses/edit', { loggedUser })
  } else {
    res.redirect('/auth/login')
  }
})

router.post('/', async (req, res, next) => {
  if (!req.isAuthenticated()) {
    res.redirect('/auth/login')
  }

  console.log(req.body)

  // creating house
  let host = req.user._id
  const createdHouse = await Houses.create({
    rooms: req.body.rooms,
    price: req.body.price,
    location: req.body.location,
    description: req.body.description,
    title: req.body.title,
    photos: req.body.photos,
    host: host
  })
  res.redirect(`/houses/${createdHouse._id}`)
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
