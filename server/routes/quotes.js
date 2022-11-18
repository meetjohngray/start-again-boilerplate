const express = require('express')

const db = require('../db/quotes')

const router = express.Router()

router.get('/', (req, res) => {
  db.getQuotes()
    .then((quotes) => {
      res.json({ quotes })
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
