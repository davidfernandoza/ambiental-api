'use strict'
const { Op } = require('sequelize')
const Repository = require('./repository')

class TokenBlackListRepository extends Repository {
	constructor({ DB, TokenBlackListDto }) {
		super(DB, TokenBlackListDto, 'token_black_list')
	}

	delete(date) {
		this.db[this.entity].destroy({ where: { expiration: { [Op.lte]: date } } })
	}
}
module.exports = TokenBlackListRepository
