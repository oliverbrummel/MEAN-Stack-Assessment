var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//Routes
var indexRouter = require('./routes/index.js');
var heroRouter = require('./routes/heroRoute.js');

var app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('server/public'));

//mongoDB
var mongoURI = 'mongodb://localhost/superhero_app';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('Error connecting to MongoDB', err);
});
MongoDB.once('open', function(){
  console.log('MongoDB started');
});



app.use('/', indexRouter);
app.use('/hero', heroRouter);





var server = app.listen(process.env.PORT || 3000, function(){
  var port = server.address().port;
  console.log('listening to port:', port);
});
