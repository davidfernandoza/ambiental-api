'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class TokenBlackListDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			token: 'token',
			expiration: 'expiration'
		}
		super(schema)
	}

	async api(type) {
		const schema = await super.api(type)
		delete schema.token
		schema.auth_token = 'token'
		return schema
	}
}

module.exports = TokenBlackListDto
