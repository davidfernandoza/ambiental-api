'use strict'
const { join } = require('path')
module.exports = {
	PlayerAuth: require(join(__dirname, './playe.auth')),
	UserAuth: require(join(__dirname, './user.auth'))
}
