'use strict'
const Repository = require('./repository')
// const { Op } = require('sequelize')
const { morphism } = require('morphism')

class QuestionsRepository extends Repository {
	constructor({ DB, QuestionDto }) {
		super(DB, QuestionDto, 'questions')
	}

	async getAll() {
		const dto = await this.entityDto.repository()
		const entities = await this.db[this.entity].findAll({
			include: [
				{
					model: this.db.answers,
					as: 'answers'
				}
			]
		})

		return entities.map(item => morphism(dto, item))
	}
	// Aqui van las consultas especializadas
}
module.exports = QuestionsRepository
