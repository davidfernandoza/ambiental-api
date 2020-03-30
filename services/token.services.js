'use strict'
const jwt = require('jwt-simple')
const moment = require('moment')

class TokenServices {
	constructor({ config, UsersController, PlayersController }) {
		this.config = config
		this.UsersController = UsersController
		this.PlayersController = PlayersController
	}

	//  Metodo para crear el token
	async create(id_user, rol_user) {
		if (
			id_user == null ||
			id_user == undefined ||
			rol_user == null ||
			rol_user == undefined
		)
			return { status: 403, payload: null }
		else {
			const payload = {
				sub: id_user,
				rol: rol_user,
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
				id_user: payload.sub,
				rol_user: payload.rol
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
		const data_token = await this.decode(token, true)
		if (data_token.status == 403) return { status: 403, payload: null }

		// Validar la existencia del usuario
		let user_player = ''
		if (data_token.payload.rol_user == 'user') {
			user_player = await this.UsersController.get(data_token.payload.id_user)
		} else {
			user_player = await this.PlayersController.get(data_token.payload.id_user)
		}

		if (user_player == null) return { status: 403, payload: null }

		// creacion de nuevo token con datos antiguos
		const new_token = await this.create(
			data_token.payload.id_user,
			data_token.payload.rol_user
		)
		return { status: 200, payload: { token: new_token } }
	}
}

module.exports = TokenServices
