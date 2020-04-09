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
			tableName: 'answers',
			createdAt: 'created_at',
			updatedAt: 'updated_at'
		}
	)
	answers.associate = function (models) {
		/*
		 * Muchas respuestas pertenecen a una pregunta (M:1)
		 */
		models.answers.belongsTo(models.questions, {
			foreignKey: 'id_questions',
			targetKey: 'id',
			as: 'questions',
			onDelete: 'cascade'
		})
	}
	return answers
}
