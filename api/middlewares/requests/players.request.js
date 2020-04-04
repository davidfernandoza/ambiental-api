'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))

class PlayersRequest extends Request {
	constructor({ JoiValidator }) {
		const schema = JoiValidator.object({
			username: JoiValidator.string()
				.min(5)
				.max(100)
				.required(),
			password: JoiValidator.string()
				.min(8)
				.max(45)
				.required(),
			score: JoiValidator.number()
				.integer()
				.min(0)
				.max(9999999999)
				.allow('')
				.optional()
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
module.exports = PlayersRequest
