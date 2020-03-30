'use strict'

module.exports = {
	ERR400: {
		name: 'Forbidden',
		status: 403,
		code: 'ERR400',
		message: 'El cuerpor de la consulta es incorrecto'
	},
	ERR401: {
		name: 'Forbidden',
		status: 403,
		code: 'ERR401',
		message: 'El token del cliente es incorrecto'
	},
	ERR402: {
		name: 'Forbidden',
		status: 403,
		code: 'ERR402',
		message: 'Las credenciales son incorrectas'
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
	ERR405: {
		name: 'Forbidden',
		status: 403,
		code: 'ERR405',
		message: 'El token de verificación es incorrecto'
	},
	ERR500: {
		name: 'Internal Server Error',
		status: 500,
		code: 'ERR500',
		message: 'Error interno del servidor'
	}
}
