'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class TokenBlackListDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			token: 'token'
		}
		super(schema)
	}
}

module.exports = TokenBlackListDto
