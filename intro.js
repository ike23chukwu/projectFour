const os = require('os')
const data = require('./data')

// console.log("Welcome to Class")

const greeting = (name) => {
    console.log(`Good morning ${name}`)
}

// greeting("Daniel")

// console.log(os)
// console.log(__dirname)
// console.log(__filename)

console.log(data)

const { users, age } = data

console.log(users)
console.log(age)

