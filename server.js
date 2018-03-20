// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const logger = require("morgan");
const mongoose = require("mongoose");

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the index file
// app.get('/', (req, res) => {
//   res.send("server.js - get ....");
// });

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

// -------------------------------------------------

// MongoDB Configuration configuration (Change this URL to your own DB)
Promise = require('bluebird');
mongoose.Promise = Promise;
mongoose.connect("mongodb://public:quizdinh@ds143132.mlab.com:43132/quizfullstackjs");
var db = mongoose.connection;

db.on("error", function (err) {
  console.log("Mongoose Error: ", err);
});

db.once("open", function () {
  console.log("Mongoose connection successful.");
});

require("./server/routes/api-routes.js")(app);
require("./server/routes/html-routes.js")(app);
// -------------------------------------------------

var defaultQuiz = require("./server/data/saveQuizController.js");
var defaultData = require("./server/data/sample.js");

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, () => {
  defaultQuiz(defaultData);
  setTimeout(function () {
    console.log("App listening on PORT: " + port);
  }, 500)
});