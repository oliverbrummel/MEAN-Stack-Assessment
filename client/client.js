var app = angular.module('heroApp', []);

app.controller('MainController', ['$http', function($http){
  var vm = this;

  vm.heroData = {};
  vm.allHeroes = [];



  // vm.powers = ['Power Blast', 'Animal Affinity'];
  // vm.power = [];

  vm.sendHeroData = function(){
    $http.post('/hero', vm.heroData).then(function(response){
      console.log(response);
      vm.heroData = {};
      vm.getHeroes();
    });
  };

  vm.getHeroes = function(){
    $http.get('/hero/all').then(function(response){
      vm.allHeroes = response.data;
      console.log(response.data);
    });
  };

  vm.deleteHero = function(hero){
    $http.delete('/hero/remove/' + hero._id).then(function(response){
      vm.getHeroes();
    });
  };

  vm.getHeroes();

}]);
