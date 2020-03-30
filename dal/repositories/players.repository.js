'use strict'
const Repository = require('./repository')
const { PlayerDto } = require('../dto')

class PlayersRepository extends Repository {
	constructor({ db }) {
		super(db, PlayerDto, 'players')
	}
	// Aqui van las consultas especializadas
}
module.exports = PlayersRepository
