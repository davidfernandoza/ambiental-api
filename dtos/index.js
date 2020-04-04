'use strict'
const { join } = require('path')
module.exports = {
	AnswerDto: require(join(__dirname, './answer.dto')),
	PlayerDto: require(join(__dirname, './player.dto')),
	QuestionDto: require(join(__dirname, './question.dto')),
	TokenBlackListDto: require(join(__dirname, './token-black-list.dto')),
	UserDto: require(join(__dirname, './user.dto'))
}
