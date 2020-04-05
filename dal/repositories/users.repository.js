'use strict'
const Repository = require('./repository')
class UsersRepository extends Repository {
	constructor({ DB, UserDto }) {
		super(DB, UserDto, 'users')
	}

	async update(id, player) {
		return await super.update(id, player, ['password'])
	}
}
module.exports = UsersRepository
