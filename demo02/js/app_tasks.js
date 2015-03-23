(function() {
    'use strict';

    // initialize the app
    angular
        .module('TGDDemo', []);

    // main controller
    angular
        .module('TGDDemo')
        .controller('TaskCtrl', TaskCtrl);

    function TaskCtrl() {
        var vm = this;



      vm.allTasks = [
        {name: "Eat Lunch"},
        {name: "Fix Car"}
      ];
    }

})();
