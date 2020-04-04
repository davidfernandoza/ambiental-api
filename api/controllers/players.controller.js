'use strict'
const { join } = require('path')
const bcrypt = require('bcrypt')
const Controller = require(join(__dirname, './controller'))

class PlayersController extends Controller {
	constructor({ PlayersRepository, PlayerDto, Config }) {
		super(PlayersRepository, PlayerDto)
		this.config = Config
	}

	async create(req, res) {
		const { password } = req.body
		const round = parseInt(this.config.SALT_CRYPT)
		const salt = await bcrypt.genSalt(round)
		req.body.password = await bcrypt.hash(password, salt)
		return super.create(req, res)
	}
	async getTop(req, res) {
		console.log(req)
	}
}

module.exports = PlayersController
