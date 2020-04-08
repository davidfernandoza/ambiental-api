'use strict'

const { Router } = require('express')

module.exports = ({
	UsersController,
	AuthMiddleware,
	PlayersPolitics,
	UsersPolitics,
	UsersRequest,
	NewTokenAuth
}) => {
	/*
	 * Rutas de los usuarios:
	 * -------------------------
	 * Middlewares:
	 */
	const requestPrivate = UsersRequest.private.bind(UsersRequest)
	const requestUpdate = UsersRequest.update.bind(UsersRequest)
	const requestPassword = UsersRequest.password.bind(UsersRequest)
	const requestNewToken = UsersRequest.newToken.bind(UsersRequest)

	const politics = [
		PlayersPolitics.validate.bind(PlayersPolitics),
		UsersPolitics.validate.bind(UsersPolitics)
	]
	const auth = AuthMiddleware.auth.bind(AuthMiddleware)
	const newToken = NewTokenAuth.create.bind(NewTokenAuth)
	const controller = UsersController
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

	// POST:
	router.post(
		'/',
		requestPrivate,
		auth,
		politics,
		controller.create.bind(controller)
	)

	router.post('/new-token', requestNewToken, auth, politics, newToken)

	// PUT:
	router.put(
		'/',
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

	// DELETE:
	router.delete(
		'/',
		requestPrivate,
		auth,
		politics,
		controller.delete.bind(controller)
	)

	return router
}
