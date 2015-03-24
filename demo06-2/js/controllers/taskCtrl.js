(function(){
  'use strict';

  angular
    .module('TaskManager')
    .controller('TaskCtrl', TaskCtrl);

  TaskCtrl.$inject = ['$http', 'TaskFactory'];

  function TaskCtrl($http, TaskFactory){
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

    vm.deleteTask = function(task){
      TaskFactory.deleteTask(task);
    };

    vm.editTask = function(task){
      vm.task = task;
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
