'use strict'
const { join } = require('path')
const Controller = require(join(__dirname, './controller'))

class AnswersController extends Controller {
	constructor({ AnswersRepository, AnswerDto }) {
		super(AnswersRepository, AnswerDto)
	}
}

module.exports = AnswersController
