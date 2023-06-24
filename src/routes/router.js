const { Router } = require('express')
const { createSmartphoneController, getAllSmartphoneController, updateSmartphoneController } = require('../controllers/smartphoneController')

const router = Router()

router.post('/smartphone', createSmartphoneController)

router.get('/smartphone', getAllSmartphoneController)

router.put('/smartphone', updateSmartphoneController)

module.exports = router
