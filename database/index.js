var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/groupRecs', {useNewUrlParser: true});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('connected to database');
});

var bookSchema = new mongoose.Schema({
    title: String,
    author: String,
    upvotes: Number,
    purchaseUrl: String,
    imageUrl: String
  });

var Book = mongoose.model('Book', bookSchema);




module.exports = {
    db: db,
    bookSchema: bookSchema,
    Book: Book
}