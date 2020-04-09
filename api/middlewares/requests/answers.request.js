'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class AnswersRequest extends Request {
	constructor({ JoiValidator, Config }) {
		const body = {
			id_questions: JoiValidator.number()
				.integer()
				.min(1)
				.max(9999999999)
				.required(),
			description: JoiValidator.string().min(10).max(225).required(),
			is_correct: JoiValidator.boolean().required()
		}
		super(body, JoiValidator, Config.CSRF)
	}
}
module.exports = AnswersRequest
