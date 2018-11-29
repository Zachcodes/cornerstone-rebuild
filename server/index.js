const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const pc = require('./controllers/projectsController')
const cc = require('./controllers/contactController')
const fs = require('fs')
require('dotenv').config()
let {SERVER_PORT, CONNECTION_STRING} = process.env 

const app = express()

app.use(bodyParser.json())


massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
})

app.get('/api/projects', pc.getProjects)
app.post('/api/contact', cc.sendEmail)

//Image endpoints 
app.get('/images/:filename', (req, res) => {
  let { filename } = req.params
  var img = fs.readFileSync(`${__dirname}/images/${filename}`)
  res.status(200).send(img)
})


app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`)
})