'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))
let rules = {}
class UsersRequest extends Request {
	constructor({ JoiValidator }) {
		rules = {
			name: JoiValidator.string()
				.min(5)
				.max(80)
				.required(),
			email: JoiValidator.string()
				.email({
					ignoreLength: true
				})
				.min(8)
				.max(100)
				.required(),
			password: JoiValidator.string()
				.min(8)
				.max(45)
				.required()
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
			await super.errorHandle(error)
		}
	}

	async password(req, res, next) {
		try {
			const schemaBody = this.JoiValidator.object({
				password: this.JoiValidator.string()
					.min(8)
					.max(45)
					.required()
			})
			await this.schemaHeader.validateAsync(req.headers)
			await schemaBody.validateAsync(req.body)
			next()
		} catch (error) {
			await super.errorHandle(error)
		}
	}
}
module.exports = UsersRequest
