const Router = require('express')
const router = new Router()
const deviceController = require('../controllers/device')
const checkRoleMiddleware = require('../middleware/check-role')

router.post('/', checkRoleMiddleware('ADMIN'), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router