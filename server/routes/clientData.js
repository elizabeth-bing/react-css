const express = require('express')

const db = require('../db/clientData')

const router = express.Router()

router.get('/', (req, res) => {
  db.getClientData()
    .then((results) => {
      res.json(results)
      return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

// This is the pre server stufff: '/api/v1/clientData'
router.post('/addClientData', (req, res) => {
  const clientData = req.body

  db.addClientData(clientData)
    .then((ids) => {
      console.log('I am data', clientData)
      res.json({ ...clientData, id: ids[0] })

      //return null
    })
    .catch((err) => {
      console.log(err)
      res.status(500).json({ message: 'Something went wrong' })
    })
})

module.exports = router
