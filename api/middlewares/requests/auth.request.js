'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class AuthRequest extends Request {
	constructor({ JoiValidator }) {
		const schema = JoiValidator.object({
			identity: JoiValidator.string()
				.min(5)
				.max(100)
				.required(),
			password: JoiValidator.string()
				.min(8)
				.max(45)
				.required()
		})
		super(schema, JoiValidator)
	}
}
module.exports = AuthRequest
