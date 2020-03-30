'use strict'
const mapper = require('automapper-js')
const { AnswerDto } = require('../dto')

/*
 * Este controlador tiene la parte de logica de la API
 * mas no la logica de negocio.
 *
 * Este se encarga de saber a quien se le da respuesta y de que forma
 *
 * La logica de negocios esta ubicada en el domain y los services, donde la
 * interaccion de estas dos dan la funcion principal del sistema
 */

class AnswersController {
	constructor({ AnswersRepository }) {
		this._answersReposytory = AnswersRepository
	}

	async getAnswers(req, res) {
		let answers = await this._answersReposytory.getAll()
		answers = answers.map(item => mapper(AnswerDto, item))
		return res.status(200).send({ payload: answers })
	}

	async getAnswer(req, res) {
		const { id } = req.params
		let answer = await this._answersReposytory.get(id)
		answer = mapper(AnswerDto, answer)
		return res.status(200).send({ payload: answer })
	}

	async createAnswer(req, res) {
		const { body } = req
		let createdAnswer = await this._answersReposytory.create(body)
		createdAnswer = mapper(AnswerDto, createdAnswer)
		return res.status(201).send({ payload: createdAnswer })
	}

	async updateAnswer(req, res) {
		const { body } = req
		const { id } = req.params
		await this._answersReposytory.update(id, body)
		return res.status(204).send()
	}

	async deleteAnswer(req, res) {
		const { id } = req.params
		await this._answersReposytory.delete(id)
		return res.status(204).send()
	}
}

module.exports = AnswersController
