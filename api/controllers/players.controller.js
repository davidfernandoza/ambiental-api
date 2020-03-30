'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class PlayersController extends Controller {
	constructor({ PlayersRepository, PlayerDto }) {
		super(PlayersRepository, PlayerDto)
	}

	async getTop(req, res) {}
}

module.exports = PlayersController
