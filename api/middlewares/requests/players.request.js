'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))
let rules = {}
class PlayersRequest extends Request {
	constructor({ JoiValidator }) {
		rules = {
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
		}
		const schema = JoiValidator.object(rules)
		super(schema, JoiValidator)
		this.JoiValidator = JoiValidator
	}

	async update(req, res, next) {
		try {
			delete rules.password
			const schemaBody = this.JoiValidator.object(rules)
			await this.schemaHeader.validateAsync(req.headers)
			await schemaBody.validateAsync(req.body)
			next()
		} catch (error) {
			super.errorHandle(error)
		}
	}

	async password(req, res, next) {
		try {
			this.schemaBody = this.JoiValidator.object({
				password: this.JoiValidator.string()
					.min(8)
					.max(45)
					.required()
			})
			await this.schemaHeader.validateAsync(req.headers)
			await this.schemaBody.validateAsync(req.body)
			next()
		} catch (error) {
			await super.errorHandle(error)
		}
	}
}
module.exports = PlayersRequest
