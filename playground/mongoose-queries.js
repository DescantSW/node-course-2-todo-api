const {ObjectID} = require('mongodb')

const {mongoose} = require('./../server/db/mongoose')
const {Todo} = require('./../server/models/todo')
const {User} = require('./../server/models/user')

let id = '6c2ef7626ae11826d0ecf648' 

if(!ObjectID.isValid(id)) {
	console.log('ID not valid')
}

// Todo.find({
// 	_id id
// }).then(todos => {
// 	if(todos.length === 0) {
// 		return console.log('ID not found')
// 	}
// 	console.log('Todos ', todos)
// })

// Todo.findOne({
// 	_id id
// }).then(todo => {
// 	if(!todo) {
// 		return console.log('ID not found')
// 	}
// 	console.log('Todo ', todo)
// })

// Todo.findById(id).then(todo => {
// 	if(!todo) {
// 		return console.log('ID not found')
// 	}
// 	console.log('Todo by id ', todo)
// }).catch(e => console.log(e))

id = '5c2bf7d1f8a831174c348e1c'
User.findById(id).then(user => {
	if(!user) {
		return console.log('ID not found')
	}
	console.log(JSON.stringify(user, undefined, 2))
}, e => {
	console.log(e)
})
