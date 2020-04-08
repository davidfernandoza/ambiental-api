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
	const requestPrivate = QuestionsRequest.private.bind(QuestionsRequest)
	const politics = [
		PlayersPolitics.validate.bind(PlayersPolitics),
		UsersPolitics.validate.bind(UsersPolitics)
	]
	const auth = AuthMiddleware.auth.bind(AuthMiddleware)
	const controller = QuestionsController
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
