'use strict'
const { join } = require('path')
const Auth = require(join(__dirname, './auth'))

class PlayerAuth extends Auth {
	constructor({ PlayersController, PlayerDto, TokenServices }) {
		const dataPlayer = {
			attribute: 'username',
			rol: 'player'
		}
		super(PlayersController, PlayerDto, TokenServices, dataPlayer)
	}
}

module.exports = PlayerAuth
