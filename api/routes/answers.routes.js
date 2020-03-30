'use strict'

const { Router } = require('express')

module.exports = ({ AnswersController }) => {
	/*
	 * Rutas de las respuestas:
	 */
	const controller = AnswersController
	const router = Router()
	router.get('/', controller.getAnswers.bind(controller))
	router.get('/:id', controller.getAnswer.bind(controller))
	router.post('/', controller.createAnswer.bind(controller))
	router.put('/:id', controller.updateAnswer.bind(controller))
	router.delete('/:id', controller.deleteAnswer.bind(controller))

	return router
}
