'use strict'

const { Router } = require('express')

module.exports = ({ QuestionsController }) => {
	/*
	 * Rutas de las preguntas:
	 */
	const controller = QuestionsController
	const router = Router()
	router.get('/', controller.getAll.bind(controller))
	router.get('/:id', controller.get.bind(controller))
	router.post('/', controller.create.bind(controller))
	router.put('/:id', controller.update.bind(controller))
	router.delete('/:id', controller.delete.bind(controller))

	return router
}
