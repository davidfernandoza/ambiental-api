'use strict'

const { Router } = require('express')

module.exports = ({ AnswersController, AuthMiddleware }) => {
	/*
	 * Rutas de las respuestas:
	 */
	const auth = AuthMiddleware.auth.bind(AuthMiddleware)
	const controller = AnswersController
	const router = Router()
	router.get('/:id', auth, controller.get.bind(controller))
	router.post('/', auth, controller.create.bind(controller))
	router.put('/:id', auth, controller.update.bind(controller))
	router.delete('/:id', auth, controller.delete.bind(controller))

	return router
}
