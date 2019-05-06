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

let addNewBookToList = function(req, res) {
    let newBook = new Book({
        title: req.body.title,
        author: req.body.author,
        upvotes: 0,
        link: req.body.link
    });

    newBook.save(err => {
        if (err) {
            console.log('error saving to db');
            res.send('error saving to db');
        } else {
            console.log('saved to db');
            res.send('saved to db');
        }
    });
}

let updateVoteCount = function(req, res) {
    let query = {'title': req.body.title};
    Book.findOneAndUpdate(query, {upvotes: req.body.newUpvotes}, {upsert: true}, (err, doc) => {
        if (err) {
            console.log(err);
        } else {
            console.log('success');
            res.send('success');
        }
    })
}


module.exports = {
    getAllBooks: getAllBooks,
    addNewBookToList: addNewBookToList,
    updateVoteCount: updateVoteCount
}