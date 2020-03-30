'use strict'
module.exports = (sequelize, DataTypes) => {
	const games = sequelize.define(
		'games',
		{
			id: {
				allowNull: false,
				autoIncrement: true,
				primaryKey: true,
				type: DataTypes.INTEGER
			},
			id_users: {
				allowNull: false,
				type: DataTypes.INTEGER
			},
			id_questions: {
				allowNull: false,
				type: DataTypes.INTEGER
			}
		},
		{
			timestamps: true,
			paranoid: true,
			tableName: 'games',
			createdAt: 'created_at',
			updatedAt: 'updated_at',
			deletedAt: 'deleted_at'
		}
	)
	games.associate = function(models) {
		/*
		 * (1:M) Tabla pivote para los jugadores
		 */
		models.games.belongsTo(models.players, {
			foreignKey: 'id_players',
			targetKey: 'id',
			as: 'players'
		})

		/*
		 * (1:M) Tabla pivote para las preguntas
		 */
		models.games.belongsTo(models.questions, {
			foreignKey: 'id_questions',
			targetKey: 'id',
			as: 'questions'
		})
	}
	return games
}
