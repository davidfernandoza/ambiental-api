'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class QuestionsRequest extends Request {
	constructor({ JoiValidator, Config }) {
		const body = {
			description: JoiValidator.string()
				.min(10)
				.max(225)
				.required()
		}
		super(body, JoiValidator, Config.CRFS)
	}
}
module.exports = QuestionsRequest
