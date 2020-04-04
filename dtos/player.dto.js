'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class PlayerDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			username: 'username',
			score: 'score'
		}
		super(schema)
	}

	async api() {
		const schema = await super.api()
		schema.auth_token = 'token'
		delete schema.password
		return schema
	}

	async repository() {
		this.schema.password = 'password'
		return super.repository()
	}
}

module.exports = PlayerDto
