'use strict'

class Request {
	constructor(SchemaBody, JoiValidator, CRFS) {
		this.codeError = 'ERR400'
		this.crfsToken = CRFS
		this.joiValidator = JoiValidator
		this.schemaBody = SchemaBody
		this.schemaAuth = {
			http_auth_token: JoiValidator.string()
				.min(80)
				.max(225)
				.required()
		}
		this.schemaCsrf = {
			http_crfs_token: JoiValidator.any()
				.valid(this.crfsToken)
				.required()
		}
	}

	async private(req, res, next) {
		const header = await this.header(req)
		if (header != true) await this.errorHandle(header)
		else if (req.method != 'GET' && req.method != 'DELETE') {
			const body = await this.body(req, this.schemaBody)
			if (body != true) await this.errorHandle(body)
		}
		next()
	}

	async public(req, res, next) {
		const header = await this.header(req, 'csrf')
		if (header != true) await this.errorHandle(header)
		else if (req.method != 'GET' && req.method != 'DELETE') {
			const body = await this.body(req, this.schemaBody)
			if (body != true) await this.errorHandle(body)
		}
		next()
	}

	// ----------------------------------------------------
	async header(req, type) {
		try {
			let rules = {}
			if (!type) {
				rules = {
					http_crfs_token: this.schemaCsrf.http_crfs_token,
					http_auth_token: this.schemaAuth.http_auth_token
				}
			} else {
				if (type == 'auth') {
					rules = this.schemaAuth
				} else {
					rules = this.schemaCsrf
				}
			}
			const schema = this.joiValidator.object(rules).unknown(true)
			await schema.validateAsync(req.headers)
			return true
		} catch (error) {
			return error
		}
	}

	async body(req, rules) {
		try {
			const schema = this.joiValidator.object(rules).unknown(true)
			await schema.validateAsync(req.body)
			return true
		} catch (error) {
			return error
		}
	}

	async errorHandle(error) {
		const objecError = JSON.parse(JSON.stringify(error))
		let path = []
		objecError.details.forEach(item => {
			let message = item.message.replace(/"/g, '')
			message = message.replace(/http_auth_token/g, 'Auth')
			message = message.replace(/http_crfs_token/g, 'Token')
			message = message.replace(/\[/g, '')
			message = message.replace(/\]/g, '')
			message = message.replace(new RegExp(this.crfsToken, 'g'), 'Correct')
			path.push(message)
		})
		throw new Error(`${this.codeError}:${path}`)
	}
}
module.exports = Request
