'use strict'
const { join } = require('path')
const container = require(join(__dirname, './api/container'))
const App = container.resolve('App')
const Config = container.resolve('Config')

App.start()
	.then(async data => {
		console.info(`Aplicacion corriendo en ${Config.ORIGIN}:${data}/`)
	})
	.catch(error => {
		console.log(error)
		process.exit()
	})
