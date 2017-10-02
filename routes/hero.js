var express = require('express');
var router = express.Router();
var Hero = require('../models/heroModel');

// get all heros
router.get('/', function(req, res) {
  // TODO: add code to return all heros from the db
  Hero.find({}, function(err, obj) { // queries the entire DB and returns all the data
    if(err) {
      console.log('Hero Find Error ->', err);
      res.sendStatus(500);
    } else {
      console.log('Hero Find Results ->', obj);
      res.send(obj); // sends DB data to client side service
    } // end else
  }); // end Find
}); // end GET

// post to create a new hero
// DO NOT MODIFY
router.post('/', function(req, res) {
  console.log('inside hero post', req.body);

  var newHero = new Hero(req.body);

  newHero.save(function(err) {
    console.log('here');
    if(err){
      console.log(err);
      res.sendStatus(500);
    }else{
      console.log('successful hero created');
      res.sendStatus(201);
    }
  });
});

module.exports = router;
