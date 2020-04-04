'use strict'

const { Router } = require('express')

module.exports = ({
	PlayersController,
	AuthMiddleware,
	PlayersPolitics,
	UsersPolitics,
	PlayersRequest
}) => {
	/*
	 * Rutas de los jugadores:
	 * -------------------------
	 * Middlewares:
	 */

	const auth = AuthMiddleware.auth.bind(AuthMiddleware)
	const requestAuth = PlayersRequest.validate.bind(PlayersRequest)
	const requestUpdate = PlayersRequest.update.bind(PlayersRequest)
	const requestPublic = PlayersRequest.public.bind(PlayersRequest)
	const politics = [
		PlayersPolitics.validate.bind(PlayersPolitics),
		UsersPolitics.validate.bind(UsersPolitics)
	]

	const controller = PlayersController
	const router = Router()

	// GET:
	router.get(
		'/',
		requestAuth,
		auth,
		politics,
		controller.getAll.bind(controller)
	)
	router.get(
		'/:id',
		requestAuth,
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

	// PUT:
	router.put(
		'/:id',
		requestUpdate,
		auth,
		politics,
		controller.update.bind(controller)
	)

	// DELETE
	router.delete(
		'/:id',
		requestAuth,
		auth,
		politics,
		controller.delete.bind(controller)
	)

	return router
}
