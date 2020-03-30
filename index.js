const injection = require('./api/injection')
const app = injection.resolve('app')
const config = injection.resolve('config')
app
	.start()
	.then(async data => {
		console.info(`Aplicacion corriendo en ${config.ORIGIN}:${data}/`)
	})
	.catch(error => {
		console.log(error)
		process.exit()
	})
