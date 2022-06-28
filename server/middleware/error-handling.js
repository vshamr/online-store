const Error = require('../error/index')

module.exports = function (err, req, res) {
    if (err instanceof Error) {
        return res.status(err.status).json({message: err.message})
    }
    return res.status(500).json({message: 'Unexpected error'})
}