'use strict'
const { join } = require('path')
const Request = require(join(__dirname, './request'))
let body = {}
let passwordRule = {}

class PlayersRequest extends Request {
	constructor({ JoiValidator, Config }) {
		body = {
			username: JoiValidator.string().min(5).max(100).required(),
			password: JoiValidator.string().min(8).max(45).required(),
			score: JoiValidator.number()
				.integer()
				.min(0)
				.max(9999999999)
				.allow('')
				.optional()
		}
		passwordRule = {
			password: JoiValidator.string().min(8).max(45).required()
		}
		super(body, JoiValidator, Config.CSRF)
	}

	async update(req, res, next) {
		delete body.password
		const header = await super.header(req)
		if (header != true) await super.errorHandle(header)
		else if (req.method != 'GET' && req.method != 'DELETE') {
			const bodyRes = await super.body(req, body)
			if (bodyRes != true) await super.errorHandle(bodyRes)
		}
		next()
	}

	async password(req, res, next) {
		const header = await super.header(req)
		if (header != true) await super.errorHandle(header)
		else if (req.method != 'GET' && req.method != 'DELETE') {
			const bodyRes = await super.body(req, passwordRule)
			if (bodyRes != true) await super.errorHandle(bodyRes)
		}
		next()
	}

	async newToken(req, res, next) {
		const header = await super.header(req)
		if (header != true) await super.errorHandle(header)
		next()
	}
}
module.exports = PlayersRequest
