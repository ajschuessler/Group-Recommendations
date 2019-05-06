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
    imageUrl: String
  });

var bookConstructor = mongoose.model('Book', bookSchema);

// var testEntry = new bookConstructor({
//     title: 'testTitle',
//     author: 'testAuthor',
//     upvotes: 4,
//     imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51j5p18mJNL._SX330_BO1,204,203,200_.jpg'
// });

// testEntry.save(err => {
//     if (err) {
//         console.log('error saving to db');
//     } else {
//         console.log('saved to db');
//     }
// });