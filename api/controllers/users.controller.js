'use strict'
const { join } = require('path')
const bcrypt = require('bcrypt')
const Controller = require(join(__dirname, './controller'))

class UsersController extends Controller {
	constructor({ UsersRepository, UserDto, Config }) {
		super(UsersRepository, UserDto)
		this.config = Config
	}

	async create(req, res) {
		const { password } = req.body
		const round = parseInt(this.config.SALT_CRYPT)
		const salt = await bcrypt.genSalt(round)
		req.body.password = await bcrypt.hash(password, salt)
		return super.create(req, res)
	}
}

module.exports = UsersController
