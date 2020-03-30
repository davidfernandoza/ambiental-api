'use strict'
const Repository = require('./repository')
const { UserDto } = require('../dto')

class UsersRepository extends Repository {
	constructor({ db }) {
		super(db, UserDto, 'users')
	}
	// Aqui van las consultas especializadas
}
module.exports = UsersRepository
