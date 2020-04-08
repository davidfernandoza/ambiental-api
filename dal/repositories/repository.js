'use strict'
const { morphism } = require('morphism')
/*
 * Manejador de consultas a la base de datos
 */
class Repository {
	constructor(db, entityDto, entity) {
		this.db = db
		this.entity = entity
		this.entityDto = entityDto
		this.codeError = 'ERR400'
	}

	async getAll() {
		try {
			const dto = await this.entityDto.repository()
			const entities = await this.db[this.entity].findAll()
			if (entities.length === 0) return null
			return entities.map(item => morphism(dto, item))
		} catch (error) {
			await this.errorHandle(error)
		}
	}

	async get(id) {
		try {
			const dto = await this.entityDto.repository()
			const entity = await this.db[this.entity].findOne({ where: { id } })
			if (!entity) return null
			return morphism(dto, entity)
		} catch (error) {
			await this.errorHandle(error)
		}
	}

	async getAttributes(attribut, match) {
		try {
			const dto = await this.entityDto.repository()
			const entity = await this.db[this.entity].findOne({
				where: { [attribut]: match }
			})
			if (!entity) return null
			return morphism(dto, entity)
		} catch (error) {
			await this.errorHandle(error)
		}
	}

	async create(entity) {
		try {
			const dto = await this.entityDto.repository('POST')
			entity = morphism(dto, entity)
			const created = await this.db[this.entity].create(entity)
			return morphism(dto, created)
		} catch (error) {
			await this.errorHandle(error)
		}
	}

	async update(id, entity, dto, attributes) {
		try {
			if (!dto) {
				dto = await this.entityDto.repository('PUT')
			}
			attributes = !attributes ? null : attributes
			entity.id = id
			entity = morphism(dto, entity)
			entity = await this.deleteUpload(entity, attributes)
			const result = await this.db[this.entity].update(entity, {
				where: { id }
			})
			if (result[0] == 0) return null
			return result[0]
		} catch (error) {
			await this.errorHandle(error)
		}
	}

	async delete(id) {
		try {
			const result = await this.db[this.entity].destroy({ where: { id } })
			if (result == 0) return null
			return result
		} catch (error) {
			await this.errorHandle(error)
		}
	}

	async errorHandle(error) {
		const objecError = JSON.parse(JSON.stringify(error))
		if (Object.entries(objecError).length === 0) {
			throw new Error(error)
		} else {
			throw new Error(`${this.codeError}:${objecError.parent.detail}`)
		}
	}

	async deleteUpload(entity, attributes) {
		delete entity.created_at
		delete entity.updated_at
		if (attributes) {
			if (Array.isArray(attributes)) {
				attributes.forEach(item => {
					delete entity[item]
				})
			}
		}
		return entity
	}
}
module.exports = Repository
