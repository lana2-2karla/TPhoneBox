const { Router } = require('express')
const { createSmartphoneController, getAllSmartphoneController, updateSmartphoneController, deleteSmartphoneController } = require('../controllers/smartphoneController')

const router = Router()

router.post('/smartphone', createSmartphoneController)

router.get('/smartphone', getAllSmartphoneController)

router.put('/smartphone', updateSmartphoneController)

router.delete('/smartphone', deleteSmartphoneController)

module.exports = router
