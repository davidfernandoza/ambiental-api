'use strict'
const { join } = require('path')
const bcrypt = require('bcrypt')
const { morphism } = require('morphism')
const { DoneString } = require(join(__dirname, '../../strings'))

class Auth {
	constructor(EntityController, EntityDto, TokenServices, DataEntity) {
		this.entityController = EntityController
		this.dataEntity = DataEntity
		this.tokenServices = TokenServices
		this.entityDto = EntityDto
	}

	async login(req, res) {
		const { identity, password } = req.body
		const dataEntity = await this.entityController.getAttributes(
			this.dataEntity.attribute,
			identity
		)
		if (!dataEntity) throw new Error('ERR401')

		// Comparar el password del usuario o jugador
		const result = await bcrypt.compare(password, dataEntity.password)
		if (!result) throw new Error('ERR401')
		const authToken = await this.tokenServices.create(
			dataEntity.id,
			this.dataEntity.rol
		)

		if (authToken.status != 200) throw new Error('ERR401')
		dataEntity.token = authToken.payload.token
		const dto = await this.entityDto.api()
		const entity = morphism(dto, dataEntity)
		DoneString.DON200.payload = entity
		return res.status(DoneString.DON200.status).send(DoneString.DON200)
	}
}

module.exports = Auth
