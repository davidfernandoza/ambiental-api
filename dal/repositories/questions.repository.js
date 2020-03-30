'use strict'
const Repository = require('./repository')
const { QuestionDto } = require('../dto')

class QuestionsRepository extends Repository {
	constructor({ db }) {
		super(db, QuestionDto, 'questions')
	}
	// Aqui van las consultas especializadas
}
module.exports = QuestionsRepository
