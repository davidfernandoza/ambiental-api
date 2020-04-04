'use strict'
const Repository = require('./repository')
const { morphism } = require('morphism')

class UsersRepository extends Repository {
	constructor({ DB, UserDto }) {
		super(DB, UserDto, 'users')
	}

	async update(id, user) {
		try {
			const dto = await this.entityDto.repository()
			user.id = id
			user = morphism(dto, user)
			delete user.created_at
			delete user.updated_at
			delete user.password
			const result = await this.db[this.entity].update(user, { where: { id } })
			if (result[0] == 0) return null
			return result[0]
		} catch (error) {
			const objecError = JSON.parse(JSON.stringify(error))
			throw new Error(`${this.codeError}:${objecError.parent.detail}`)
		}
	}
}
module.exports = UsersRepository
