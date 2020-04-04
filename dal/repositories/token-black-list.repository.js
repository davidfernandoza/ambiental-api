'use strict'
const Repository = require('./repository')

class TokenBlackListRepository extends Repository {
	constructor({ DB, TokenBlackListDto }) {
		super(DB, TokenBlackListDto, 'token_black_list')
	}
}
module.exports = TokenBlackListRepository
