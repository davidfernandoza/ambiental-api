module.exports = {
	PORT: process.env.PORT,
	ORIGIN: process.env.ORIGIN,
	TOKEN_KEY: process.env.TOKEN_KEY,
	DB: {
		username: process.env.USER_DEV,
		password: process.env.PASS_DEV,
		database: process.env.DB_DEV,
		host: process.env.HOST_DEV,
		dialect: process.env.DIAL_DEV,
		loggin: true
	}
}
