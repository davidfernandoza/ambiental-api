'use strict'

const { Router } = require('express')

module.exports = ({
	PlayersController,
	AuthMiddleware,
	PlayersPolitics,
	UsersPolitics
}) => {
	/*
	 * Rutas de los jugadores:
	 * -------------------------
	 * Middlewares:
	 */
	const auth = AuthMiddleware.auth.bind(AuthMiddleware)
	const politics = [
		PlayersPolitics.validate.bind(PlayersPolitics),
		UsersPolitics.validate.bind(UsersPolitics)
	]

	const controller = PlayersController
	const router = Router()
	router.get('/', auth, politics, controller.getAll.bind(controller))
	router.get('/:id', auth, politics, controller.get.bind(controller)) // Todos los usuarios
	router.get('/top/:amount', politics, controller.getTop.bind(controller)) // Publico
	router.post('/', politics, controller.create.bind(controller)) // Publico
	router.put('/:id', auth, politics, controller.update.bind(controller)) // Todos los usuarios
	router.delete('/:id', auth, politics, controller.delete.bind(controller))

	return router
}
