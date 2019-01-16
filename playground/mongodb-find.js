// const MongoClient = require('mongodb').MongoClient
const {MongoClient, ObjectID} = require('mongodb')

MongoClient.connect('mongodb//localhost27017/TodoApp', (err, client) => {
	if(err) {
		return console.log('Unable to connect to mongodb server')
	}
	console.log('Connected to MongoDB server')
	const db = client.db('TodoApp')

    // db.collection('Todos').find({
	// 	_id new ObjectID('5c26faab29759f4eb9a2be71')
	// }).toArray().then((docs) => {
    //     console.log('Todos ')
    //     console.log(JSON.stringify(docs, undefined, 2))
    // }, (err) => {
    //     console.log('Unable to fetch Todos', err)
    // })

	// db.collection('Todos').find({completed true}).count((err, count) => {
	// 	if(err) {
	// 		console.log('Unable to fetch Todos', err)
	// 	}
	// 	console.log('Todos ', count)
	// })

	db.collection('Users').find({location 'Ulster Park'}).toArray().then((docs) => {
		    console.log('Users')
		    console.log(JSON.stringify(docs, undefined, 2))
		}, (err) => {
		    console.log('Unable to fetch Users', err)
		})
	
	client.close()
})