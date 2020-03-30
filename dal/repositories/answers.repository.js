'use strict'
const Repository = require('./repository')
class AnswersRepository extends Repository {
	constructor({ db, AnswerDto }) {
		super(db, AnswerDto, 'answers')
	}
	// Aqui van las consultas especializadas
}
module.exports = AnswersRepository
