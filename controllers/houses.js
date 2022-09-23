// Import Packages
const express = require('express')
const router = express.Router()
const Houses = require('../models/houses.js')
//get controller
router.get('/', async (req, res) => {
  // shows profile in the nav if user is logged in
  let loggedUser = req.user

  // query is what is sent by the filter form
  let filters = {}
  let sorting = req.query.sort || '_id'

  if (req.query.location && req.query.location != 'Any location') {
    filters.location = req.query.location
  }

  if (req.query.rooms && req.query.rooms != 'Any rooms') {
    filters.rooms = req.query.rooms
  }

  if (req.query.price && req.query.price > 0) {
    filters.price = {
      $lte: req.query.price
    }
  }

  let houses = await Houses.find(filters).sort(sorting)

  res.render('houses/list', { loggedUser, houses })
})

router.get('/create', (req, res) => {
  // authentification function
  if (req.isAuthenticated()) {
    // shows profile in the nav if user is logged in
    let loggedUser = req.user
    res.render('./houses/create', { loggedUser })
  } else {
    res.redirect('/auth/login')
  }
})

router.get('/:id', async (req, res) => {
  // this finds the house in the databasa when you click on on it in the list page and renders the page for it, it also populates it with a host
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
  // this function creates the house for us using the form in th ecreate.hbs then renders the house we've just created page
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
