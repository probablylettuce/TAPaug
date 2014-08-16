// Decalre Requirements
var express = require("express");

var Request = require('request');
// Just like on the client side.
var _ = require('underscore');

//Create the app
var app = express();
var server   = require('http').createServer(app);

// Set up the public directory to serve our Javascript file
app.use(express.static(__dirname + '/public'));
// Set EJS as templating language
app.engine('.html', require('ejs').__express);

app.set("views", __dirname + '/views');

app.set('view engine', 'html');

app.use(express.json());
app.use(app.router);

// Set up Express error handling
app.use(express.errorHandler());

//ROUTES
app.get("/", function(request, response){
	response.render('index');
});

// app.get("/about", function(request, response){
// 	response.render('about');
// });

// app.get("/music", function(request, response){
// 	response.render('music');
// });

// app.get("/contact", function(request, response){
// 	response.render('contact');
// });

// Start the server
server.listen(process.env.PORT || 3000);
console.log('Express started on port 3000');
