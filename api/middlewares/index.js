'use strict'
const { join } = require('path')
module.exports = {
	AuthMiddleware: require(join(__dirname, './auth.middleware')),
	ErrorHandleMiddleware: require(join(__dirname, './error-handle.middleware'))
}
