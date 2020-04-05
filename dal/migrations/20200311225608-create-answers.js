'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('answers', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			id_questions: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'questions',
					key: 'id'
				}
			},
			description: {
				allowNull: false,
				type: Sequelize.STRING
			},
			is_correct: {
				allowNull: false,
				defaultValue: false,
				type: Sequelize.BOOLEAN
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			}
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('answers')
	}
}
