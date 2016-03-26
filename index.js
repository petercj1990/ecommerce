/////// imports ////////
//var express = require('express');
// var bodyParser = require('body-parser');
// var cors = require('cors');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var mongoose = require('mongoose');
var mongo = require('mongojs')
//var app = express();
var port = process.env.port || 9001;

var express = require('./api/config/express/express');
var app = express();
//////// middleware ////////

//app.use(mongodb())
app.listen(port, function() {
    console.log('Server listening on port ' + port);
  });


//////// database ////////
// mongo.connect("mongodb://localhost:27017/products", function(err, db) {
//   if(!err) {
//     console.log("We are connected");
//   }
// });

var port = 9001;
var db = mongo('ecommerce', ['products']);

//////// API ////////
app.get('/api/test', function(req, res){//
    res.send('hello im working');
});
app.post('/api/products', function(req, res){//
	console.log(db.products);
    db.products.save(req.body , function(err, response){
    	if(err){
    		return res.status(500).json(err);
    	}
    	return res.status(200).json(response);
    })
	
});

app.get('/api/products', function(req, res){//
  var query = req.query;
  db.products.find(query, function(err, response){
    if(err) {
      res.status(500).json(err);
    } else {
      res.json(response);
    }
  });
});

app.put('/api/products/:id', function(req, res){//
	if(!req.params.id){
		return res.status(400).send('id query needed');
	}
	var query = {
		_id: mongo.ObjectId(req.params.id)
	};
	db.products.update(query, req.body, function(error, response){
		if(error) {
			return res.status(500).json(error);
		} else {
			return res.json(response);
		}
	});
});

app.delete('/api/products/:id', function(req, res){
	if(!req.params.id){
		return res.status(400).send('id query needed');
	}
	var query = {
		_id: mongo.ObjectId(req.params.id)
	};
	db.products.remove(query, function(error, response){
		if(error) {
			return res.status(500).json(error);
		} else {
			return res.json(response);
		}
	});
});

