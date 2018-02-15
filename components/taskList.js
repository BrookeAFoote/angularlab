(function(){
    var taskList = {
        binding: {
            list: "<"
        },
        templateUrl: "templates/taskList.html",
        controller: function(){
            var $ctrl = this;
            ng-repeat = "task in $ctrl.list"
            }
        }
}

angular.module("app")
    .component("taskList", taskList);
})();