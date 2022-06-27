const ApiError = require('../error/index');

class UserController {
    async registration(req, res) {

    }

    async login(req, res) {

    }

    async check(req, res, next) {
        const {id} = res.query;
        if(!id) {
            return next(ApiError.badRequest('No ID'))
        }
        res.json(id);
    }
}

module.exports = new UserController();