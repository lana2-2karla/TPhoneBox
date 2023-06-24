const SmartphoneModel = require('../../mongodb/model')

const getAllSmartphoneRepositoryMdb = async () => {
  try {
    const smartphones = await SmartphoneModel.find().exec()
    return smartphones
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getAllSmartphoneRepositoryMdb
}
