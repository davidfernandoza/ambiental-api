'use strict'
const Repository = require('./repository')
const { morphism } = require('morphism')

class UsersRepository extends Repository {
	constructor({ DB, UserDto }) {
		super(DB, UserDto, 'users')
	}

	async update(id, user) {
		const dto = await this.entityDto.repository()
		user.id = id
		user = morphism(dto, user)
		delete user.created_at
		delete user.updated_at
		delete user.password
		return await this.db[this.entity].update(user, { where: { id } })
	}
}
module.exports = UsersRepository
