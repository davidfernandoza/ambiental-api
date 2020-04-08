'use strict'
const Repository = require('./repository')
const { morphism } = require('morphism')

class PlayersRepository extends Repository {
	constructor({ DB, PlayerDto }) {
		super(DB, PlayerDto, 'players')
	}

	async update(id, player) {
		return await super.update(id, player, null, ['password'])
	}

	async password(id, password) {
		return await super.update(id, password, { password: 'password' })
	}

	async getTop(amount) {
		try {
			const dto = await this.entityDto.repository()
			const entity = await this.db[this.entity].findAll({
				limit: amount,
				order: [['score', 'DESC']]
			})
			if (entity.length == 0) return null
			return morphism(dto, entity)
		} catch (error) {
			await super.errorHandle(error)
		}
	}
}
module.exports = PlayersRepository
