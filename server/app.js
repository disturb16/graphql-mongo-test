const express = require('express')
const graphHttp = require('express-graphql')
const schema = require('./Schema/schema')
const mongoose = require('mongoose')

mongoose.connect('mongodb://dist:Abc123@ds259855.mlab.com:59855/books-test')
mongoose.connection.once('open', ()=>{
    console.log('we are connected to database')
})

const app = express()
app.use('/graphql', graphHttp({
  schema,
  graphiql: true
}))

app.listen(4000, ()=>{
    console.log("running server")
})