'use strict'

const { Router } = require('express')

module.exports = ({
	UsersController,
	AuthMiddleware,
	PlayersPolitics,
	UsersPolitics,
	UsersRequest
}) => {
	/*
	 * Rutas de los usuarios:
	 * -------------------------
	 * Middlewares:
	 */
	const requestAuth = UsersRequest.validate.bind(UsersRequest)
	const requestUpdate = UsersRequest.update.bind(UsersRequest)
	const auth = AuthMiddleware.auth.bind(AuthMiddleware)
	const politics = [
		PlayersPolitics.validate.bind(PlayersPolitics),
		UsersPolitics.validate.bind(UsersPolitics)
	]
	const controller = UsersController
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

	// POST:
	router.post(
		'/',
		requestAuth,
		auth,
		politics,
		controller.create.bind(controller)
	)

	// PUT:
	router.put(
		'/',
		requestUpdate,
		auth,
		politics,
		controller.update.bind(controller)
	)

	// DELETE:
	router.delete(
		'/',
		requestAuth,
		auth,
		politics,
		controller.delete.bind(controller)
	)

	return router
}
