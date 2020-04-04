'use strict'
const { join } = require('path')
const Politics = require(join(__dirname, './politics'))

class PlayersPolitics extends Politics {
	constructor({ Config }) {
		const rol = 'player'
		const authRol = 'rolUser'
		const baseUrl = Config.BASE_API
		const permissions = {
			answers: {
				subRoutes: 'all',
				status: 'disable'
			},
			auth: {
				subRoutes: 'all',
				status: 'enable'
			},
			players: {
				subRoutes: [
					{
						route: '/',
						method: 'GET',
						status: 'disable'
					},
					{
						route: '/:id',
						method: 'GET',
						status: 'unique',
						authParameter: 'idUser' // Parametro que inyecto el auth al request
					},
					{
						route: '/top/:amount',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'enable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'unique',
						authParameter: 'idUser'
					},
					{
						route: '/:id',
						method: 'DELETE',
						status: 'unique',
						authParameter: 'idUser'
					}
				]
			},
			questions: {
				subRoutes: [
					{
						route: '/',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/:id',
						method: 'GET',
						status: 'disable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'disable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'disable'
					},
					{
						route: '/:id',
						method: 'DELETE',
						status: 'disable'
					}
				]
			},
			users: {
				subRoutes: 'all',
				status: 'disable'
			}
		}
		super(rol, authRol, baseUrl, permissions)
	}

	async validate(req, res, next) {
		const permissions = await super.validate(req)
		if (permissions.status === 200) next()
		else if (permissions.status === 403) throw new Error('ERR403')
		else if (permissions.status === 404) throw new Error('ERR404')
		else throw new Error(permissions.message)
	}
}

module.exports = PlayersPolitics
