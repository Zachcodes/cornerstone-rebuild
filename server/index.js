const express = require('express')
const bodyParser = require('body-parser')
const massive = require('massive')
const pc = require('./controllers/projectsController')
require('dotenv').config()
let {SERVER_PORT, CONNECTION_STRING} = process.env 

const app = express()

app.use(bodyParser.json())


massive(CONNECTION_STRING).then(dbInstance => {
  app.set('db', dbInstance)
})

app.get('/api/projects', pc.getProjects)

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`)
})