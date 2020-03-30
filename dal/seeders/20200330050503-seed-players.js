'use strict'
const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		const salt = await bcrypt.genSalt(10)
		const hash = await bcrypt.hash('123456789', salt)
		return queryInterface.bulkInsert(
			'players',
			[
				{
					username: 'caballo_loco',
					password: hash,
					score: 435,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					username: 'elMono',
					password: hash,
					score: 245,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					username: 'ultraGamer',
					password: hash,
					score: 533,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					username: 'SantiPower',
					password: hash,
					score: 789,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					username: 'LocoDt',
					password: hash,
					score: 432,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					username: 'DarioGomez',
					password: hash,
					score: 42,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},

	down: queryInterface => {
		return queryInterface.bulkDelete('players', null, {})
	}
}
