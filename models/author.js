const db = require('mongoose')
const Schema = db.Schema

const AuthorSchema = new Schema({
  name: String,
  age: String
})

module.exports = db.model('Author', AuthorSchema)