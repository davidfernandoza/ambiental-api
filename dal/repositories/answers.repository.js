'use strict'
const Repository = require('./repository')
class AnswersRepository extends Repository {
	constructor({ DB, AnswerDto }) {
		super(DB, AnswerDto, 'answers')
	}
	// Aqui van las consultas especializadas
}
module.exports = AnswersRepository
