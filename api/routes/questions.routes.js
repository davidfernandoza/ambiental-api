'use strict'

const { Router } = require('express')

module.exports = ({ QuestionsController, AuthMiddleware }) => {
	/*
	 * Rutas de las preguntas:
	 */
	const auth = AuthMiddleware.auth.bind(AuthMiddleware)
	const controller = QuestionsController
	const router = Router()
	router.get('/', auth, controller.getAll.bind(controller))
	router.get('/:id', auth, controller.get.bind(controller))
	router.post('/', auth, controller.create.bind(controller))
	router.put('/:id', auth, controller.update.bind(controller))
	router.delete('/:id', auth, controller.delete.bind(controller))

	return router
}
