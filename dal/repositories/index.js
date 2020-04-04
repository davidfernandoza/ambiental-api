'use strict'
const { join } = require('path')
module.exports = {
	AnswersRepository: require(join(__dirname, './answers.repository')),
	PlayersRepository: require(join(__dirname, './players.repository')),
	QuestionsRepository: require(join(__dirname, './questions.repository')),
	TokenBlackListRepository: require(join(
		__dirname,
		'./token-black-list.repository'
	)),
	UsersRepository: require(join(__dirname, './users.repository'))
}
