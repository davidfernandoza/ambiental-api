'use strict'

class AuthMiddleware {
	constructor({
		TokenBlackListRepository,
		TokenServices,
		UsersRepository,
		PlayersRepository
	}) {
		this.tokenBlackListRepository = TokenBlackListRepository
		this.tokenServices = TokenServices
		this.usersRepository = UsersRepository
		this.playersRepository = PlayersRepository
	}

	async auth(req, res, next) {
		if (!req.headers.http_auth_token) throw new Error('ERR401')

		const authToken = req.headers.http_auth_token

		// Consultar lista negra de tokens
		const invalid_token = await this.tokenBlackListRepository.getAttributes(
			'token',
			authToken
		)

		if (invalid_token != null) throw new Error('ERR401')
		else {
			let responseToken = await this.tokenServices.decode(authToken, false)

			// Refrescar token:
			if (responseToken.status === 401) {
				const newToken = await this.tokenServices.refresh(authToken)

				if (newToken.status === 403) {
					responseToken.status = 403
				} else {
					responseToken = await this.tokenServices.decode(
						newToken.payload.token,
						false
					)
				}
			}

			if (responseToken.status === 403) throw new Error('ERR401')
			else {
				if (responseToken.payload.rolUser == 'user') {
					if (!(await this.usersRepository.get(responseToken.payload.idUser)))
						throw new Error('ERR401')
				} else {
					if (!(await this.playersRepository.get(responseToken.payload.idUser)))
						throw new Error('ERR401')
				}
				req.idUser = responseToken.payload.idUser
				req.rolUser = responseToken.payload.rolUser
				next()
			}
		}
	}
}

//

module.exports = AuthMiddleware
