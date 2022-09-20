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

router.post('/signup', async (req, res) => {
  console.log(req.body)
  let user = await users.create(req.body)
  console.log('done')
})

router.get('/logout', (req, res) => {})
// Export
module.exports = router
