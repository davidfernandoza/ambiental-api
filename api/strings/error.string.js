'use strict'

module.exports = {
	ERR400: {
		name: 'Bad Request',
		status: 400,
		code: 'ERR400',
		message: 'Consulta incorrecta'
	},
	ERR401: {
		name: 'Unauthorized',
		status: 401,
		code: 'ERR401',
		message: 'No autorizado para solicitar recursos'
	},
	ERR403: {
		name: 'Forbidden',
		status: 403,
		code: 'ERR403',
		message: 'No existen los permisos suficientes'
	},
	ERR404: {
		name: 'Not Found',
		status: 404,
		code: 'ERR404',
		message: 'Recurso no encontrado'
	},
	ERR500: {
		name: 'Internal Server Error',
		status: 500,
		code: 'ERR500',
		message: 'Error interno del servidor'
	}
}
