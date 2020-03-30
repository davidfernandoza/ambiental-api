'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class UsersController extends Controller {
	constructor({ UsersRepository, UserDto }) {
		super(UsersRepository, UserDto)
	}
}

module.exports = UsersController
