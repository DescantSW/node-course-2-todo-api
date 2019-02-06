var env = process.env.NODE_ENV || 'development';

if (env === 'development' || env === 'test') {
	const config = require('./config.json')
	const envConfig = config[env]

	Object.keys(envConfig).forEach(key => {
		process.env[key] = envConfig[key]
	})
}

// Heroku set env to production console.count(label);
// pacage.json script 'test' sets env to 'test'
// server.js sets env to 'development' as a default
// if (env === 'development') {
// 	process.env.PORT = 3000;
// 	process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoApp';
// } else if (env === 'test') {
// 	process.env.PORT = 3000;
// 	process.env.MONGODB_URI = 'mongodb://127.0.0.1:27017/TodoAppTest';
// }
