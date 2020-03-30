'use strict'

const { Router } = require('express')

module.exports = ({ AnswersController }) => {
	/*
	 * Rutas de las respuestas:
	 */
	const controller = AnswersController
	const router = Router()
	// router.get('/answer/:id', controller.getAllAnswer.bind(controller))
	router.get('/:id', controller.get.bind(controller))
	router.post('/', controller.create.bind(controller))
	router.put('/:id', controller.update.bind(controller))
	router.delete('/:id', controller.delete.bind(controller))

	return router
}
