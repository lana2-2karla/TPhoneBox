const mongoose = require('mongoose')

const SmartphoneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    get: (value) => value.toFixed(2), // Arredonda para 2 casas decimais
    set: (value) => parseFloat(value.toFixed(2)) // Converte para número decimal
  },
  image: {
    type: String
  }
}, { timestamps: true })

module.exports = mongoose.model('Smartphone', SmartphoneSchema)
