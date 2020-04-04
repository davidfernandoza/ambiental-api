'use strict'
const { join } = require('path')
const { DB } = require(join(__dirname, '../../config/env'))
const config = DB

module.exports = {
	username: config.username,
	password: config.password,
	database: config.database,
	host: config.host,
	dialect: config.dialect,
	loggin: config.loggin
}
