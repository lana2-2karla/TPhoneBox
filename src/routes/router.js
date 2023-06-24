const { Router } = require('express')
const { createSmartphoneController, getAllSmartphoneController } = require('../controllers/smartphoneController')

const router = Router()

router.post('/smartphone', createSmartphoneController)

router.get('/smartphone', getAllSmartphoneController)

module.exports = router
