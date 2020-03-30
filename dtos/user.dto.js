'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class UserDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			name: 'name',
			email: 'email'
		}
		super(schema)
	}

	async repository() {
		this.schema.password = 'password'
		return super.repository()
	}
}

module.exports = UserDto
