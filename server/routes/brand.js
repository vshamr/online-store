const Router = require('express')
const router = new Router()
const brandController = require('../controllers/brand')
const checkRoleMiddleware = require('../middleware/check-role')

router.post('/', checkRoleMiddleware('ADMIN'), brandController.create)
router.get('/', brandController.getAll)

module.exports = router