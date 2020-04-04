'use strict'
const { join } = require('path')
module.exports = {
	PlayersPolitics: require(join(__dirname, './players.politics')),
	UsersPolitics: require(join(__dirname, './users.politics'))
}
