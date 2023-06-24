const { Router } = require('express')
const { createSmartphoneController } = require('../controllers/smartphoneController')

const router = Router()

router.post('/smartphone', createSmartphoneController)

module.exports = router
