'use strict'
const Repository = require('./repository')
class AnswersRepository extends Repository {
	constructor({ DB, AnswerDto }) {
		super(DB, AnswerDto, 'answers')
	}
}
module.exports = AnswersRepository
