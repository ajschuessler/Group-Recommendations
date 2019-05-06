const db = require('./index.js').db;
const Book = require('./index.js').Book;
const bookSchema = require('./index.js').bookSchema;


let getAllBooks = function(req, res) {
    Book.find(function (err, books) {
        if (err) {
            return console.error(err);
        } else {
            res.send(books);
        }
    })
}


module.exports = {
    getAllBooks: getAllBooks
}