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

// Auths
const { PlayerAuth, UserAuth } = require(path.join(
	__dirname,
	'./controllers/auth'
))

// Rutas:
const AnswersRoutes = require(path.join(__dirname, './routes/answers.routes'))
const AuthRoutes = require(path.join(__dirname, './routes/auth.routes'))
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
	TokenBlackListRepository,
	UsersRepository
} = require(path.join(__dirname, '../dal/repositories'))

// DTOS:
const {
	AnswerDto,
	PlayerDto,
	QuestionDto,
	TokenBlackListDto,
	UserDto
} = require(path.join(__dirname, '../dtos'))

// Middlewares:
const { AuthMiddleware } = require(path.join(__dirname, './middlewares'))

// Politics:
const { PlayersPolitics, UsersPolitics } = require(path.join(
	__dirname,
	'./middlewares/politics'
))

// Services:
const { TokenServices } = require(path.join(__dirname, '../services'))

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
		App: asClass(StartUp).singleton(),
		Server: asClass(Server).singleton()
	})
	/*
	 * Config:
	 */
	.register({
		Config: asValue(Config),
		DB: asValue(db),
		ErrorString: asValue(ErrorString)
	})
	/*
	 * Routes:
	 */
	.register({
		Routes: asFunction(Routes).singleton()
	})
	.register({
		AnswersRoutes: asFunction(AnswersRoutes).singleton(),
		AuthRoutes: asFunction(AuthRoutes).singleton(),
		PlayersRoutes: asFunction(PlayersRoutes).singleton(),
		QuestionsRoutes: asFunction(QuestionsRoutes).singleton(),
		UsersRoutes: asFunction(UsersRoutes).singleton()
	})
	/*
	 * Auth:
	 */
	.register({
		PlayerAuth: asClass(PlayerAuth).singleton(),
		UserAuth: asClass(UserAuth).singleton()
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
		TokenBlackListRepository: asClass(TokenBlackListRepository).singleton(),
		UsersRepository: asClass(UsersRepository).singleton()
	})

	/*
	 * DTOS
	 */
	.register({
		AnswerDto: asClass(AnswerDto).singleton(),
		PlayerDto: asClass(PlayerDto).singleton(),
		QuestionDto: asClass(QuestionDto).singleton(),
		TokenBlackListDto: asClass(TokenBlackListDto).singleton(),
		UserDto: asClass(UserDto).singleton()
	})

	/*
	 * Middlewares:
	 */
	.register({
		AuthMiddleware: asClass(AuthMiddleware).singleton()
	})

	/*
	 * Politics:
	 */
	.register({
		PlayersPolitics: asClass(PlayersPolitics).singleton(),
		UsersPolitics: asClass(UsersPolitics).singleton()
	})
	/*
	 * Services:
	 */
	.register({
		TokenServices: asClass(TokenServices).singleton()
	})
module.exports = container
