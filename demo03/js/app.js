(function() {
  'use strict';

  angular
    .module('Demo', []);

  angular
    .module('Demo')
    .controller('MainCtrl', MainCtrl)
    .filter('capitalize', capitalize)
    .filter('base64Encode', base64Encode)
    .filter('truncate', truncate);

  function MainCtrl() {
    var vm = this;
    vm.someString = "Whatever this is, I just don't know?";

    vm.users = [{
      firstName: 'dan',
      lastName: 'johnson'
    }, {
      firstName: 'ella',
      lastName: 'johnson'
    }, {
      firstName: 'ava',
      lastName: 'johnson'
    }];

    vm.lowercase = 'this is all lowercase to start';
  }

  function truncate() {
    return function(input, length, suffix, preserve) {
      length = length || 3;
      preserve = preserve || false;
      suffix = suffix || '...';

      if(input.length <= length){
        return input;
      }
      return input.substring(0, length) + suffix;
    };
  }

  function base64Encode(){
    return function(str){
      return btoa(str);
    };
  }

  function capitalize() {
    return function(param) {
      if (param) {
        return param.split(' ').map(function(word) {
          return word[0].toUpperCase() + word.slice(1);
        }).join(' ');
      }
    };
  }

})();
