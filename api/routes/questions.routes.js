'use strict'

const { Router } = require('express')

module.exports = ({ QuestionsController }) => {
	/*
	 * Rutas de las preguntas:
	 */
	const controller = QuestionsController
	const router = Router()
	router.get('/', controller.getQuestions.bind(controller))
	router.get('/:id', controller.getQuestion.bind(controller))
	router.post('/', controller.createQuestion.bind(controller))
	router.put('/:id', controller.updateQuestion.bind(controller))
	router.delete('/:id', controller.deleteQuestion.bind(controller))

	return router
}
