'use strict'
const { join } = require('path')
const Politics = require(join(__dirname, './politics'))

class UsersPolitics extends Politics {
	constructor() {
		const rol = 'user'
		const authRol = 'rolUser'
		const baseUrl = '/api/'
		const permissions = {
			answers: {
				subRoutes: 'all',
				status: 'enable'
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
						status: 'enable'
					},
					{
						route: '/:id',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/top',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'enable'
					},
					{
						route: '/new-token',
						method: 'POST',
						status: 'disable'
					},
					{
						route: '/:id',
						method: 'PUT',
						status: 'enable'
					},
					{
						route: '/password',
						method: 'PATCH',
						status: 'disable'
					},
					{
						route: '/:id',
						method: 'DELETE',
						status: 'enable'
					}
				]
			},
			questions: {
				subRoutes: 'all',
				status: 'enable'
			},
			users: {
				subRoutes: [
					{
						route: '/',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/:id',
						method: 'GET',
						status: 'enable'
					},
					{
						route: '/',
						method: 'POST',
						status: 'enable'
					},
					{
						route: '/new-token',
						method: 'POST',
						status: 'enable'
					},
					{
						route: '/',
						method: 'PUT',
						status: 'enable'
					},
					{
						route: '/password',
						method: 'PATCH',
						status: 'enable'
					},
					{
						route: '/',
						method: 'DELETE',
						status: 'enable'
					}
				]
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

module.exports = UsersPolitics
