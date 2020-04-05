'use strict'

const { Router } = require('express')

module.exports = ({
	QuestionsController,
	AuthMiddleware,
	PlayersPolitics,
	UsersPolitics,
	QuestionsRequest
}) => {
	/*
	 * Rutas de las preguntas:
	 * -------------------------
	 * Middlewares:
	 */
	const requestAuth = QuestionsRequest.validate.bind(QuestionsRequest)
	const auth = AuthMiddleware.auth.bind(AuthMiddleware)
	const politics = [
		PlayersPolitics.validate.bind(PlayersPolitics),
		UsersPolitics.validate.bind(UsersPolitics)
	]
	const controller = QuestionsController
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
