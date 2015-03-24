(function(){
  'use strict';

  angular
    .module('TaskManager')
    .controller('TaskListCtrl', TaskListCtrl);

  TaskListCtrl.$inject = ['$http', 'TaskFactory'];

  function TaskListCtrl($http, TaskFactory){
    var vm = this;
    vm.tasks = TaskFactory.tasks;

    vm.editTask = function(task){
      vm.task = task;
    };

    vm.deleteTask = function(task){
      TaskFactory.deleteTask(task);
    };
  }
})();
