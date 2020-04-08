'use strict'

const { Router } = require('express')

module.exports = ({
	PlayersController,
	AuthMiddleware,
	PlayersPolitics,
	UsersPolitics,
	PlayersRequest,
	NewTokenAuth
}) => {
	/*
	 * Rutas de los jugadores:
	 * -------------------------
	 * Middlewares:
	 */
	const requestPrivate = PlayersRequest.private.bind(PlayersRequest)
	const requestPublic = PlayersRequest.public.bind(PlayersRequest)
	const requestUpdate = PlayersRequest.update.bind(PlayersRequest)
	const requestPassword = PlayersRequest.password.bind(PlayersRequest)
	const requestNewToken = PlayersRequest.newToken.bind(PlayersRequest)

	const politics = [
		PlayersPolitics.validate.bind(PlayersPolitics),
		UsersPolitics.validate.bind(UsersPolitics)
	]
	const auth = AuthMiddleware.auth.bind(AuthMiddleware)

	// Controller:
	const controller = PlayersController
	const newToken = NewTokenAuth.create.bind(NewTokenAuth)
	const router = Router()

	// GET:
	router.get(
		'/',
		requestPrivate,
		auth,
		politics,
		controller.getAll.bind(controller)
	)
	router.get(
		'/:id',
		requestPrivate,
		auth,
		politics,
		controller.get.bind(controller)
	)

	// Public:
	router.get(
		'/top/:amount',
		requestPublic,
		politics,
		controller.getTop.bind(controller)
	)

	// POST (Public):
	router.post('/', requestPublic, politics, controller.create.bind(controller))
	router.post('/new-token', requestNewToken, auth, politics, newToken)

	// PUT:
	router.put(
		'/:id',
		requestUpdate,
		auth,
		politics,
		controller.update.bind(controller)
	)

	// PATCH:
	router.patch(
		'/password',
		requestPassword,
		auth,
		politics,
		controller.password.bind(controller)
	)

	// DELETE
	router.delete(
		'/:id',
		requestPrivate,
		auth,
		politics,
		controller.delete.bind(controller)
	)

	return router
}
