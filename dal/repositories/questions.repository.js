'use strict'
const Repository = require('./repository')

class QuestionsRepository extends Repository {
	constructor({ db, QuestionDto }) {
		super(db, QuestionDto, 'questions')
	}
	// Aqui van las consultas especializadas
}
module.exports = QuestionsRepository
