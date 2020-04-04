'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class UsersRequest extends Request {
	constructor({ JoiValidator }) {
		const schema = JoiValidator.object({
			name: JoiValidator.string()
				.min(5)
				.max(80)
				.required(),
			email: JoiValidator.email()
				.min(8)
				.max(100)
				.required(),
			password: JoiValidator.string()
				.min(8)
				.max(45)
				.required()
		})
		super(schema, JoiValidator)
	}

	async update(req, res, next) {
		try {
			delete this.schemaBody.password
			await this.schemaHeader.validateAsync(req.headers)
			await this.schemaBody.validateAsync(req.body)
			next()
		} catch (error) {
			const objecError = JSON.parse(JSON.stringify(error))
			let path = []
			objecError.details.forEach(item => {
				path.push(item.message.replace(/"/g, ''))
			})
			throw new Error(`${this.codeError}:${path}`)
		}
	}
}
module.exports = UsersRequest
