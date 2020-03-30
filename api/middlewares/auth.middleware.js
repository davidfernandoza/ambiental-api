'use strict'

class AuthMiddleware {
	constructor({ ErrorString, TokenRepository, TokenServices }) {
		this.ErrorString = ErrorString
		this.TokenRepository = TokenRepository
		this.TokenServices = TokenServices
	}

	async login(req, res, next) {
		if (!req.headers.http_auth_token)
			res
				.status(this.ErrorString.ERR405.status)
				.json(this.ErrorString.ERR405.message)

		const auth_token = req.headers.http_auth_token

		// Consultar lista negra de tokens
		const invalid_token = await this.TokenRepository.get(auth_token)

		if (invalid_token != null)
			res
				.status(this.ErrorString.ERR404.status)
				.json(this.ErrorString.ERR404.message)
		else {
			let response_token = await this.TokenServices.decode(auth_token, false)

			// Refrescar token:
			if (response_token.status === 401) {
				const new_token = await this.TokenServices.refresh(auth_token)

				if (new_token.status === 403) {
					response_token.status = 403
				} else {
					response_token = await this.TokenServices.decode(
						new_token.payload.token,
						false
					)
				}
			}

			if (response_token.status === 403)
				res
					.status(this.ErrorString.ERR404.status)
					.json(this.ErrorString.ERR404.message)
			else {
				req.id_user = response_token.payload.id_user
				req.rol_user = response_token.payload.rol_user
				next()
			}
		}
	}
}

module.exports = AuthMiddleware
