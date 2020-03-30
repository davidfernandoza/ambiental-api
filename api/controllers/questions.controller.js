'use strict'
const mapper = require('automapper-js')
const { QuestionDto } = require('../dto')

class QuestionsController {
	constructor({ QuestionsRepository }) {
		this._questionRepository = QuestionsRepository
	}

	async getQuestions(req, res) {
		let questions = await this._questionRepository.getAll()
		questions = questions.map(item => mapper(QuestionDto, item))
		return res.status(200).send({ payload: questions })
	}

	async getQuestion(req, res) {
		const { id } = req.params
		let question = await this._questionRepository.get(id)
		question = mapper(QuestionDto, question)
		return res.status(200).send({ payload: question })
	}

	async createQuestion(req, res) {
		const { body } = req
		let createdQuestion = await this._questionRepository.create(body)
		createdQuestion = mapper(QuestionDto, createdQuestion)
		return res.status(201).send({ payload: createdQuestion })
	}

	async updateQuestion(req, res) {
		const { body } = req
		const { id } = req.params
		await this._questionRepository.update(id, body)
		return res.status(204).send()
	}

	async deleteQuestion(req, res) {
		const { id } = req.params
		await this._questionRepository.delete(id)
		return res.status(204).send()
	}
}

module.exports = QuestionsController
