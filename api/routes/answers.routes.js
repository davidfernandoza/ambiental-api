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
	const requestPrivate = AnswersRequest.private.bind(AnswersRequest)
	const politics = [
		PlayersPolitics.validate.bind(PlayersPolitics),
		UsersPolitics.validate.bind(UsersPolitics)
	]
	const auth = AuthMiddleware.auth.bind(AuthMiddleware)
	const controller = AnswersController
	const router = Router()

	// GET:
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

	// PUT:
	router.put(
		'/:id',
		requestPrivate,
		auth,
		politics,
		controller.update.bind(controller)
	)

	// DELETE:
	router.delete(
		'/:id',
		requestPrivate,
		auth,
		politics,
		controller.delete.bind(controller)
	)

	return router
}
