const { getAllSmartphoneRepositoryMdb } = require('../repositories/repositoryMongoDB')
const { createSmartphoneRepository, getALLSmartphoneRepositoryPrisma, updateSmartphoneRepositoryPrisma } = require('../repositories/repositoryPrisma')

const createSmartphoneController = async (req, res) => {
  try {
    const smartphoneCreated = await createSmartphoneRepository(req.body)
    res.status(200).json(smartphoneCreated)
  } catch (error) {
    res.status(400).send(error)
  }
}

const getAllSmartphoneController = async (req, res) => {
  try {
    const smartphonesPrisma = await getALLSmartphoneRepositoryPrisma()
    if (smartphonesPrisma.length === 0) {
      const smartphonesMongoDB = await getAllSmartphoneRepositoryMdb()
      return res.status(200).json(smartphonesMongoDB)
    }
    res.status(200).json(smartphonesPrisma)
  } catch (error) {
    res.status(400).send(error)
  }
}

const updateSmartphoneController = async (req, res) => {
  try {
    const smartphoneUpdated = await updateSmartphoneRepositoryPrisma(req.body.id, req.body)
    res.status(200).json(smartphoneUpdated)
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = {
  createSmartphoneController,
  getAllSmartphoneController,
  updateSmartphoneController
}
