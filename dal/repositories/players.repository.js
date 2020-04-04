'use strict'
const Repository = require('./repository')
const { morphism } = require('morphism')

class PlayersRepository extends Repository {
	constructor({ DB, PlayerDto }) {
		super(DB, PlayerDto, 'players')
	}

	async update(id, player) {
		const dto = await this.entityDto.repository()
		player.id = id
		player = morphism(dto, player)
		delete player.created_at
		delete player.updated_at
		delete player.password
		return await this.db[this.entity].update(player, { where: { id } })
	}
}
module.exports = PlayersRepository
