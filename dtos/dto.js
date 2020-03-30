'use strict'

class Dto {
	constructor(schema) {
		this.schema = schema
	}

	async api() {
		const schema = { ...this.schema }
		return schema
	}

	async repository() {
		const schema = { ...this.schema }
		schema.created_at = 'created_at'
		schema.updated_at = 'updated_at'
		return schema
	}

	// Procesar un campo :
	// sponsor_id: {
	// 	path: 'sponsor_id',
	// 	fn: value => value + 2
	// },
}
module.exports = Dto
