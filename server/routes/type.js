const Router = require('express')
const router = new Router()
const typeController = require('../controllers/type')
const checkRoleMiddleware = require('../middleware/check-role')

router.post('/', checkRoleMiddleware('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

module.exports = router