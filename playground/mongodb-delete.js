// const MongoClient = require('mongodb').MongoClient
const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb//localhost27017/TodoApp', (err, client) => {
	if (err) {
		return console.log('Unable to connect to mongodb server')
	}
	console.log('Connected to MongoDB server')
	const db = client.db('TodoApp')

	//deleteMany
	// db.collection('Todos').deleteMany({text 'eat lunch'}).then((result) => {
	// 	console.log(result)
	// })

	// deleteOne
	// db.collection('Todos').deleteOne({text 'eat lunch'}).then((result) => {
	// 	console.log(result)
	// })

	// findOneAndDelete
	// db.collection('Todos').findOneAndDelete({completed true}).then(result => {
	// 	console.log(result)
	// })


// challenge
	// db.collection('Users').deleteMany({text 'Heidi'}).then((result) => {
	// 	console.log(result)
	// })
	// db.collection('Users').findOneAndDelete({
	// 	_id new ObjectID("5c27078729759f4eb9a2bfab")
	// }).then(result => {
	// 	console.log(JSON.stringify(result, undefined, 2))
	// })

	client.close()
})