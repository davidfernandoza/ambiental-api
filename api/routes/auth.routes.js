'use strict'

const { Router } = require('express')

module.exports = ({ PlayerAuth, UserAuth }) => {
	/*
	 * Rutas de las autentificaciones:
	 */
	const player = PlayerAuth
	const user = UserAuth
	const router = Router()
	router.post('/user', user.login.bind(user))
	router.post('/player', player.login.bind(player))

	return router
}
