'use strict'

const { Router } = require('express')

module.exports = ({ UsersController }) => {
	/*
	 * Rutas de los usuarios:
	 */
	const controller = UsersController
	const router = Router()
	router.get('/', controller.getUsers.bind(controller))
	router.get('/:id', controller.getUser.bind(controller))
	router.post('/', controller.createUser.bind(controller))
	router.put('/:id', controller.updateUser.bind(controller))
	router.delete('/:id', controller.deleteUser.bind(controller))

	return router
}
