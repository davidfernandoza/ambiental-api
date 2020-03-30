'use strict'
require('express-async-errors')
const { join } = require('path')
const { Router } = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const compression = require('compression')
const { ErrorHandleMiddleware } = require(join(__dirname, '../middlewares'))

module.exports = ({
	AnswersRoutes,
	PlayersRoutes,
	QuestionsRoutes,
	UsersRoutes
}) => {
	const router = Router()
	const apiRoute = Router()

	// Parsear la peticion
	apiRoute
		.use(cors())
		.use(bodyParser.urlencoded({ extended: false }))
		.use(bodyParser.json())
		.use(compression())

	// Registro de rutas
	apiRoute.use('/answers', AnswersRoutes)
	apiRoute.use('/players', PlayersRoutes)
	apiRoute.use('/questions', QuestionsRoutes)
	apiRoute.use('/users', UsersRoutes)
	router.use('/api', apiRoute)

	// Not Found 404
	router.use(() => {
		throw new Error('ERR404')
	})

	// Manejo de errores asyncronos
	router.use(ErrorHandleMiddleware)
	return router
}
