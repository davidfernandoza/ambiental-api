'use strict'
const { join } = require('path')
const Dto = require(join(__dirname, './dto'))

class AnswerDto extends Dto {
	constructor() {
		const schema = {
			id: 'id',
			description: 'description',
			is_correct: 'is_correct'
		}
		super(schema)
	}

	async repository(type) {
		this.schema.id_questions = 'id_questions'
		return super.repository(type)
	}
}

module.exports = AnswerDto
