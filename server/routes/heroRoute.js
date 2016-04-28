var router = require('express').Router();
//Model import
var Hero = require('../../models/hero.js');

router.post('/', function(request, response){
  console.log(request.body);
  Hero.create(request.body, function(err){
    if(err){
      console.log('Error saving hero.', err);
      response.sendStatus(500);
    } else {
      console.log('Successfully saved hero');
      response.sendStatus(200);
    }
  });
});

router.get('/all', function(request, response){
  Hero.find({}, function(err, heroes){
    if(err){
      console.log(err);
      response.sendStatus(500);
    } else {
      response.send(heroes);
    }
  });
});

router.delete('/remove/:id', function(request, response){
  Hero.findOneAndRemove({_id: request.params.id}, function(err, hero){
    if(err) {
      response.sendStatus(500);
      console.log('Problem deleting hero from DB', err);
    } else {
      response.sendStatus(200);
      console.log('Hero deleted');
    }
  });
});






module.exports = router;
