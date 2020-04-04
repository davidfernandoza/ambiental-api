'use strict'

class Request {
	constructor(SchemaBody, JoiValidator) {
		this.codeError = 'ERR400'
		this.schemaBody = SchemaBody
		this.schemaHeader = JoiValidator.object({
			http_auth_token: JoiValidator.string()
				.min(80)
				.max(225)
				.required()
		}).unknown(true)
	}

	async validate(req, res, next) {
		try {
			await this.schemaHeader.validateAsync(req.headers)
			if (req.method != 'GET' && req.method != 'DELETE') {
				await this.schemaBody.validateAsync(req.body)
			}
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

	async public(req, res, next) {
		try {
			if (req.method != 'GET' && req.method != 'DELETE') {
				await this.schemaBody.validateAsync(req.body)
			}
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
module.exports = Request
