'use strict'
const jwt = require('jwt-simple')
const moment = require('moment')

class TokenServices {
	constructor({ Config, UsersController, PlayersController }) {
		this.config = Config
		this.UsersController = UsersController
		this.PlayersController = PlayersController
	}

	//  Metodo para crear el token
	async create(idUser, rolUser) {
		if (
			idUser == null ||
			idUser == undefined ||
			rolUser == null ||
			rolUser == undefined
		)
			return { status: 403, payload: null }
		else {
			const payload = {
				sub: idUser,
				rol: rolUser,
				iat: moment().unix(),
				exp: moment()
					.add(7, 'days')
					.unix()
			}
			const token = await jwt.encode(payload, this.config.TOKEN_KEY)
			return { status: 200, payload: { token: token } }
		}
	}

	// Metodo que decodifica el token:
	decode(token, status) {
		try {
			/*
			 * status true -> no verifica la firma del token
			 * status false -> si verifica la firma del token
			 */
			const payload = jwt.decode(token, this.config.TOKEN_KEY, status)
			const data = {
				idUser: payload.sub,
				rolUser: payload.rol
			}
			return { status: 200, payload: data }
		} catch (err) {
			if (err.message == 'Token expired') {
				return { status: 401, payload: null }
			}
			return { status: 403, payload: null }
		}
	}

	// Metodo que refresca el token
	async refresh(token) {
		const dataToken = await this.decode(token, true)
		if (dataToken.status == 403) return { status: 403, payload: null }

		// Validar la existencia del usuario
		let userPlayer = ''
		if (dataToken.payload.rolUser == 'user') {
			userPlayer = await this.UsersController.get(dataToken.payload.idUser)
		} else {
			userPlayer = await this.PlayersController.get(dataToken.payload.idUser)
		}

		if (userPlayer == null) return { status: 403, payload: null }

		// creacion de nuevo token con datos antiguos
		const newToken = await this.create(
			dataToken.payload.idUser,
			dataToken.payload.rolUser
		)
		return { status: 200, payload: { token: newToken } }
	}
}

module.exports = TokenServices
