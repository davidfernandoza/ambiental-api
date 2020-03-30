'use strict'

// Sistema:
const path = require('path')
const StartUp = require(path.join(__dirname, './startup'))
const Server = require(path.join(__dirname, './server'))
const Routes = require(path.join(__dirname, './routes'))
const Config = require(path.join(__dirname, '../config/env'))
const db = require(path.join(__dirname, '../dal/models'))
const { asClass, asFunction, asValue, createContainer } = require('awilix')
const container = createContainer()

// Rutas:
const AnswersRoutes = require(path.join(__dirname, './routes/answers.routes'))
const PlayersRoutes = require(path.join(__dirname, './routes/players.routes'))
const QuestionsRoutes = require(path.join(
	__dirname,
	'./routes/questions.routes'
))
const UsersRoutes = require(path.join(__dirname, './routes/users.routes'))

// Strings
const { ErrorString } = require(path.join(__dirname, './strings'))

// Controladores:
const {
	AnswersController,
	PlayersController,
	QuestionsController,
	UsersController
} = require(path.join(__dirname, './controllers'))

// Repositorios:
const {
	AnswersRepository,
	PlayersRepository,
	QuestionsRepository,
	UsersRepository
} = require(path.join(__dirname, '../dal/repositories'))

// Middlewares:
const { AuthMiddleware } = require(path.join(__dirname, './middlewares'))

/*
 * singleton -> es una unica instancia para todas las peticiones
 * asClass -> inyecta una instancia de una clase, en este caso StartUp
 * asFunction -> inyecta una funcion, ya que el caso de las rutas eso exporta.
 *
 * Para usar la inyeccion de dependencias, el fracmento de codigo debe de
 * estar registrado aqui en el "container", con esto se logra que otros
 * fracmentos puedan usarlo y este usar a los otros.
 */

// Inyeccion de dependencias:
container
	/*
	 * Server:
	 */
	.register({
		app: asClass(StartUp).singleton(),
		server: asClass(Server).singleton()
	})
	/*
	 * Config:
	 */
	.register({
		config: asValue(Config),
		db: asValue(db),
		ErrorString: asValue(ErrorString)
	})
	/*
	 * Routes:
	 */
	.register({
		routes: asFunction(Routes).singleton()
	})
	.register({
		AnswersRoutes: asFunction(AnswersRoutes).singleton(),
		PlayersRoutes: asFunction(PlayersRoutes).singleton(),
		QuestionsRoutes: asFunction(QuestionsRoutes).singleton(),
		UsersRoutes: asFunction(UsersRoutes).singleton()
	})
	/*
	 * Controllers:
	 */
	.register({
		AnswersController: asClass(AnswersController).singleton(),
		PlayersController: asClass(PlayersController).singleton(),
		QuestionsController: asClass(QuestionsController).singleton(),
		UsersController: asClass(UsersController).singleton()
	})
	/*
	 * Repositories
	 */
	.register({
		AnswersRepository: asClass(AnswersRepository).singleton(),
		PlayersRepository: asClass(PlayersRepository).singleton(),
		QuestionsRepository: asClass(QuestionsRepository).singleton(),
		UsersRepository: asClass(UsersRepository).singleton()
	})

	/*
	 * Middlewares:
	 */
	.register({
		AuthMiddleware: asClass(AuthMiddleware).singleton()
	})

module.exports = container
