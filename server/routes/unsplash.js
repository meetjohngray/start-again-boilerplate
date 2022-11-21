const express = require('express')
const request = require('superagent')
const router = express.Router()

require('dotenv').config()

const apiKey = process.env.ACCESS_KEY

// GET /api/v1/unsplash/

router.get('/', (req, res) => {
  return (
    request
      //.get(`https://api.unsplash.com/photos/?client_id=${apiKey}/random`)
      .get(`https://api.unsplash.com/photos/random`)
      .set({ Authorization: `Client-ID ${apiKey}` })
      .then((response) => {
        res.json(response.body)
      })
      .catch((err) => {
        console.error(err)
        res
          .status(500)
          .json({ message: 'Something went wrong in unsplash route' })
      })
  )
})

module.exports = router
