var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '/../client/dist')));


app.listen(port, () => {
    console.log(`server running at: http://localhost:${port}`);
  });