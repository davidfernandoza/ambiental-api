'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class AnswersRequest extends Request {
	constructor({ JoiValidator }) {
		const schema = JoiValidator.object({
			id_questions: JoiValidator.number()
				.integer()
				.min(1)
				.max(9999999999)
				.required(),
			description: JoiValidator.string()
				.min(10)
				.max(225)
				.required(),
			is_correct: JoiValidator.boolean().required()
		})
		super(schema, JoiValidator)
	}
}
module.exports = AnswersRequest
