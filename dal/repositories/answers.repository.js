'use strict'
const Repository = require('./repository')
const { AnswerDto } = require('../dto')

class AnswersRepository extends Repository {
	constructor({ db }) {
		super(db, AnswerDto, 'answers')
	}
	// Aqui van las consultas especializadas
}
module.exports = AnswersRepository
