'use strict'
const mapper = require('automapper-js')
/*
 * Manejador de consultas a la base de datos
 */
class Repository {
	constructor(db, entityDto, entity) {
		this.db = db
		this.entity = entity
		this.entityDto = entityDto
	}

	getAll() {
		const entities = this.db[this.entity].findAll()
		return entities.map(item => mapper(this.entityDto, item))
	}

	get(id) {
		const entity = this.db[this.entity].findOne({ where: { id } })
		return mapper(this.entityDto, entity)
	}

	async create(entity) {
		entity = mapper(this.entityDto, entity)
		const created = await this.db[this.entity].create(entity)
		return mapper(this.entityDto, created)
	}

	async update(id, entity) {
		// TODO: verificar los campos de created_At y updated_At cuando se actualize

		entity.id = id
		entity = mapper(this.entityDto, entity)
		delete entity.created_at
		delete entity.updated_at
		return await this.db[this.entity].update(entity, { where: { id } })
	}

	async delete(id) {
		return await this.db[this.entity].destroy({ where: { id } })
	}
}
module.exports = Repository
