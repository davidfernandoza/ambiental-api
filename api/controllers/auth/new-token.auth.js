'use strict'
const { join } = require('path')
const moment = require('moment')
const Controller = require(join(__dirname, '../controller'))

/*
 * Cotrolador que genera un token de autentificación nuevo.
 * Crea un token en la lista negra con el antiguo token
 */
class NewTokenAuth extends Controller {
	constructor({ TokenBlackListRepository, TokenBlackListDto, TokenServices }) {
		super(TokenBlackListRepository, TokenBlackListDto)
		this.tokenServices = TokenServices
		this.tokenBlackListRepository = TokenBlackListRepository
	}

	async create(req, res) {
		const { idUser, rolUser } = req
		const { http_auth_token } = req.headers
		const newToken = await this.tokenServices.create(idUser, rolUser)
		if (newToken.status === 200) {
			const oldToken = {
				token: http_auth_token,
				expiration: moment()
					.add(7, 'days')
					.toISOString()
			}
			const created = await this.tokenBlackListRepository.create(oldToken)
			this.tokenBlackListRepository.delete(moment().toISOString())
			if (created) {
				await super.response(res, newToken.payload, 'DON200')
				return true
			}
		}
		await super.response(res, null, 'DON404')
	}
}

module.exports = NewTokenAuth
