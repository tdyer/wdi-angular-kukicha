(function(){
  'use strict';

  angular
    .module('TaskManager')
    .controller('TaskFormCtrl', TaskFormCtrl);

  TaskFormCtrl.$inject = ['$http', 'TaskFactory'];

  function TaskFormCtrl($http, TaskFactory){
    var vm = this;

    vm.upsertTask = function(task){
      TaskFactory.upsertTask(task).then(function(response){
        vm.resetTask();
      },
                                         function(response){
                                           console.log('failed!!!');
                                           console.log(response);
                                         });
    };

    vm.resetTask = function(){
      vm.task = {
        name: ''
      };
    };

    vm.resetTask();

    //TaskFactory.getTasks();

    vm.tasks = TaskFactory.tasks;
  }
})();
