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

	async repository() {
		this.schema.id_questions = 'id_questions'
		return super.repository()
	}
}

module.exports = AnswerDto
