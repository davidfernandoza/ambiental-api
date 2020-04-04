'use strict'
const { join } = require('path')

module.exports = {
	AnswersRequest: require(join(__dirname, './answers.request')),
	AuthRequest: require(join(__dirname, './auth.request')),
	PlayersRequest: require(join(__dirname, './players.request')),
	QuestionsRequest: require(join(__dirname, './questions.request')),
	UsersRequest: require(join(__dirname, './users.request'))
}
