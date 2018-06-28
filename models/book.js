const db = require('mongoose')
const Schema = db.Schema

const BookSchema = new Schema({
  name: String,
  genre: String,
  authorId: String
})

module.exports = db.model('Book', BookSchema)