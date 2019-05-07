var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;
const getAllBooks = require('../database/models.js').getAllBooks;
const morgan = require('morgan');
const addNewBookToList = require('../database/models.js').addNewBookToList;
const updateVoteCount = require('../database/models.js').updateVoteCount;
const deleteItemFromDb = require('../database/models.js').deleteItemFromDb;


app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/../client/dist')));


app.get('/books', (req, res) => {
    getAllBooks(req, res);
});

app.post('/addBook', (req, res) => {
    addNewBookToList(req, res);
});

app.put('/updateVoteCount', (req, res) => {
    updateVoteCount(req, res);
})

app.delete('/deleteItem/:id', (req, res) => {
    deleteItemFromDb(req, res);
})

app.listen(port, () => {
    console.log(`server running at: http://localhost:${port}`);
});