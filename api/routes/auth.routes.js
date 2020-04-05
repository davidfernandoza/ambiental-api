'use strict'

const { Router } = require('express')

module.exports = ({ PlayerAuth, UserAuth, AuthRequest }) => {
	/*
	 * Rutas de las autentificaciones:
	 * -------------------------
	 * Middlewares:
	 */
	const requestPublic = AuthRequest.public.bind(AuthRequest)
	const player = PlayerAuth
	const user = UserAuth
	const router = Router()
	router.post('/user', requestPublic, user.login.bind(user))
	router.post('/player', requestPublic, player.login.bind(player))

	return router
}
