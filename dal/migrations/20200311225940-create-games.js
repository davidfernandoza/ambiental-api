'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('games', {
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: Sequelize.INTEGER
			},
			id_users: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'users',
					key: 'id'
				}
			},
			id_questions: {
				allowNull: false,
				type: Sequelize.INTEGER,
				references: {
					model: 'questions',
					key: 'id'
				}
			},
			created_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			updated_at: {
				allowNull: false,
				type: Sequelize.DATE
			},
			deleted_at: {
				type: Sequelize.DATE
			}
		})
	},
	down: queryInterface => {
		return queryInterface.dropTable('games')
	}
}
