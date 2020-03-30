'use strict'
const bcrypt = require('bcrypt')

module.exports = {
	up: async queryInterface => {
		const salt = await bcrypt.genSalt(10)
		const hash_1 = await bcrypt.hash('123456789', salt)
		const hash_2 = await bcrypt.hash('123456789', salt)
		const hash_3 = await bcrypt.hash('123456789', salt)
		const hash_4 = await bcrypt.hash('123456789', salt)
		return queryInterface.bulkInsert(
			'users',
			[
				{
					name: 'David Fernando Torres Zapata',
					email: 'dftorres88@misena.edu.co',
					password: hash_1,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'Victor Garjales',
					email: 'vmgrajales9@misena.edu.co',
					password: hash_2,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'Cristhian Arboleda',
					email: 'carboleda64@misena.edu.co',
					password: hash_3,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				},
				{
					name: 'Juan Camilo Agudelo',
					email: 'jcagudelo42@misena.edu.co',
					password: hash_4,
					created_at: new Date().toDateString(),
					updated_at: new Date().toDateString()
				}
			],
			{}
		)
	},

	down: queryInterface => {
		return queryInterface.bulkDelete('users', null, {})
	}
}
