'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class QuestionDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			description: 'description'
		}
		super(schema)
	}
}

module.exports = QuestionDto
