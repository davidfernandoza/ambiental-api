'use strict'
const Repository = require('./repository')

class UsersRepository extends Repository {
	constructor({ db, UserDto }) {
		super(db, UserDto, 'users')
	}
	// Aqui van las consultas especializadas
}
module.exports = UsersRepository
