require('dotenv').config()

const express = require('express')
const app = express()
const router = require('./routes/router')

app.use(express.json())

// mongoDB connection
const conn = require('../mongodb/conn')
conn()

app.use(router)

app.listen(process.env.APP_PORT, () => console.log(`ouvindo na porta ${process.env.APP_PORT}`))
