const mongoose = require('mongoose')
require('dotenv').config()

async function main () {
  try {
    await mongoose.connect(process.env.DATABASE_MONGODB_URL)
    console.log('Connected to MongoDB')
  } catch (error) {
    console.log(error)
  }
}

module.exports = main
