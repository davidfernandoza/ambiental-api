module.exports = {
	PORT: process.env.PORT,
	ORIGIN: process.env.ORIGIN,
	TOKEN_KEY: process.env.TOKEN_KEY,
	DB: {
		username: process.env.USER,
		password: process.env.PASS,
		database: process.env.DB,
		host: process.env.HOST,
		dialect: process.env.DIAL,
		loggin: false
	}
}
