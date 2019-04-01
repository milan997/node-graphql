const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const authorSchema = new Schema({
    // id se implicitno dodaje 
    name: String,
    age: Number,
    authorId: String
});

module.exports = mongoose.model('Author', authorSchema);