'use strict'
const Repository = require('./repository')

class PlayersRepository extends Repository {
	constructor({ db, PlayerDto }) {
		super(db, PlayerDto, 'players')
	}
	// Aqui van las consultas especializadas
}
module.exports = PlayersRepository
