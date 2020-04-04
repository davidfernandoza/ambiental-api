'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class QuestionsRequest extends Request {
	constructor({ JoiValidator }) {
		const schema = JoiValidator.object({
			description: JoiValidator.string()
				.min(10)
				.max(225)
				.required()
		})
		super(schema, JoiValidator)
	}
}
module.exports = QuestionsRequest
