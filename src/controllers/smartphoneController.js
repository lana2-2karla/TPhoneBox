const { createSmartphoneRepository } = require('../repositories/repositoryPrisma')

const createSmartphoneController = async (req, res) => {
  try {
    const smartphoneCreated = await createSmartphoneRepository(req.body)
    res.status(200).json(smartphoneCreated)
  } catch (error) {
    res.status(400).send(error)
  }
}

module.exports = {
  createSmartphoneController
}
