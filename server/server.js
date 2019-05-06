var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;
const getAllBooks = require('../database/models.js').getAllBooks;



app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/dist')));


app.get('/books', (req, res) => {
    getAllBooks(req, res);
});

app.listen(port, () => {
    console.log(`server running at: http://localhost:${port}`);
});