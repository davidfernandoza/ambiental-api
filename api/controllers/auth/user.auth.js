'use strict'
const { join } = require('path')
const Auth = require(join(__dirname, './auth'))

class UserAuth extends Auth {
	constructor({ UsersController, UserDto, TokenServices }) {
		const dataUser = {
			attribute: 'email',
			rol: 'user'
		}
		super(UsersController, UserDto, TokenServices, dataUser)
	}
}

module.exports = UserAuth
