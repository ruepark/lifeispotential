var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var webpackDevHelper = require('./hotReload.js');

// Require routes.
var index = require('./routes/index');

var app = express();

console.log("DEVELOPMENT: Turning on WebPack middleware...");
app = webpackDevHelper.useWebpackMiddleware(app);
console.log(__dirname);
app.use('/css', express.static(path.join(__dirname, 'public/css')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set up our routes.
app.use('/blogs', index);
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'public/index.html'))
});

// Export our app (so that tests and bin can find it)
module.exports = app;