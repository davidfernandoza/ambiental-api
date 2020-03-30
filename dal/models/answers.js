'use strict'
module.exports = (sequelize, DataTypes) => {
	const answers = sequelize.define(
		'answers',
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			id_questions: {
				allowNull: false,
				type: DataTypes.INTEGER
			},
			description: {
				allowNull: false,
				type: DataTypes.STRING
			},
			is_correct: {
				allowNull: false,
				defaultValue: false,
				type: DataTypes.BOOLEAN
			}
		},
		{
			timestamps: true,
			paranoid: true,
			tableName: 'answers',
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			deletedAt: 'deleted_at'
		}
	)
	answers.associate = function(models) {
		/*
		 * Muchos clientes pertenecen a un pais (M:1)
		 */
		models.answers.belongsTo(models.questions, {
			foreignKey: 'id_questions',
			targetKey: 'id',
			as: 'questions'
		})
	}
	return answers
}
