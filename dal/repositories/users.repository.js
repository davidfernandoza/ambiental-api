'use strict'
const Repository = require('./repository')
class UsersRepository extends Repository {
	constructor({ DB, UserDto }) {
		super(DB, UserDto, 'users')
	}

	async update(id, player) {
		return await super.update(id, player, null, ['password'])
	}

	async password(id, password) {
		return await super.update(id, password, { password: 'password' })
	}
}
module.exports = UsersRepository
