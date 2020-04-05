'use strict'

const { Router } = require('express')

module.exports = ({
	AnswersController,
	AuthMiddleware,
	PlayersPolitics,
	UsersPolitics,
	AnswersRequest
}) => {
	/*
	 * Rutas de las respuestas:
	 * -------------------------
	 * Middlewares:
	 */
	const requestAuth = AnswersRequest.validate.bind(AnswersRequest)
	const auth = AuthMiddleware.auth.bind(AuthMiddleware)
	const politics = [
		PlayersPolitics.validate.bind(PlayersPolitics),
		UsersPolitics.validate.bind(UsersPolitics)
	]
	const controller = AnswersController
	const router = Router()

	// GET:
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
		'/:id',
		requestAuth,
		auth,
		politics,
		controller.update.bind(controller)
	)

	// DELETE:
	router.delete(
		'/:id',
		requestAuth,
		auth,
		politics,
		controller.delete.bind(controller)
	)

	return router
}
