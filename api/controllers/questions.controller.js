'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class QuestionsController extends Controller {
	constructor({ QuestionsRepository, QuestionDto }) {
		super(QuestionsRepository, QuestionDto)
	}
}

module.exports = QuestionsController
