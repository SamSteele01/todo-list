const express = require('express');
const app = express();
const path = require('path');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const todo = require('./todo.js');


app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

// app.use(express.static(__dirname+'/public'));
// if I want css
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


var todoArray = [];
var completeArray = [];

app.get('/', function(req, res){
  res.render('index', {todoArray: todoArray, completeArray: completeArray});
});

app.post('/', function(req, res){
  todoArray.push(req.body.addTodo);

  res.redirect('/');
});

app.post('/mark', function(req, res){
  completeArray.push(req.body.complete);

  todoArray.pop(this);

  res.redirect('/');
});

app.listen(3000, function () {
  console.log('Successfully started express application!');
})
