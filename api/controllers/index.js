'use strict'
const { join } = require('path')

module.exports = {
	AnswersController: require(join(__dirname, './answers.controller')),
	PlayersController: require(join(__dirname, './players.controller')),
	QuestionsController: require(join(__dirname, './questions.controller')),
	UsersController: require(join(__dirname, './users.controller'))
}
