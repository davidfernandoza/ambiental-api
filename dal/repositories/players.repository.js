'use strict'
const Repository = require('./repository')
const { morphism } = require('morphism')

class PlayersRepository extends Repository {
	constructor({ DB, PlayerDto }) {
		super(DB, PlayerDto, 'players')
	}

	async update(id, player) {
		try {
			const dto = await this.entityDto.repository()
			player.id = id
			player = morphism(dto, player)
			delete player.created_at
			delete player.updated_at
			delete player.password
			const result = await this.db[this.entity].update(player, {
				where: { id }
			})
			if (result[0] == 0) return null
			return result[0]
		} catch (error) {
			const objecError = JSON.parse(JSON.stringify(error))
			throw new Error(`${this.codeError}:${objecError.parent.detail}`)
		}
	}
}
module.exports = PlayersRepository
