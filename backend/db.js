const mongoose = require("mongoose")

mongoose.connect('mongodb+srv://akshat_mongodb:MEyuENS2kaEblgKt@cluster0.s4e7d.mongodb.net/Todo_datbase')

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    done: Boolean
})

const Todo =mongoose.model('Todo', todoSchema)

module.exports= {
    Todo
}