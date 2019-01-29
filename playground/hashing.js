const { SHA256 } = require('crypto-js')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const user  = {
	password: 'abc123'
}


// bcrypt.genSalt(10, (err, salt) => {
// 	bcrypt.hash(user.password, salt, (err, hash) => {
// 		console.log(user.password, hash)
// 	})
// })

const hashedPassword ='$2a$10$CFNSlEnQq8zZJbNOS3lbb.shsf9yb5/8WgSz9c4N159Ce5EVimcvO'

bcrypt.compare(user.password, hashedPassword, (err, res) => {
	console.log(res)
})

// const data = {
// 	id: 10
// }
// const token = jwt.sign(data, '123abc')
// console.log(token)

// const decoded = jwt.verify(token + '1', '123abc')
// console.log('decoded ', decoded)



/*
// how to encrypt using SHA256
const message = 'I am user number 3'
const hash = SHA256(message).toString()
console.log(`Message ${message}\nHash ${hash}`)

// 1. create the token  "sign"
const data = {
	id 4
}
const token = {
	data,
	hash SHA256(JSON.stringify(data) + 'somesecret').toString()
}
console.log(data)

// 2. "verify" the token
const resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()

if (resultHash === token.hash)
	console.log('Data was not changed')
	else
	console.log('Attention data has been changed')

*/