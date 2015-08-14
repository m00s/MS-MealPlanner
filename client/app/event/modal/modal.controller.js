'use strict';

angular.module('msMealPlannerApp.calendar')
  .controller('ModalCtrl', function ($scope, $modalInstance, $filter, date, events, Recipe) {
    $scope.events = organizeMeal(events);
    $scope.inputDate = date._d;
    $scope.outputDate = $filter('date')($scope.inputDate, 'fullDate');
    Recipe.getList().then(function (response) {
      $scope.recipes = response.plain();
    });

    $scope.close = function () {
      $modalInstance.close();
    };

    $scope.submit = function () {
      console.log('Event lunch:',$scope.events[0]);
      console.log('Event dinner:',$scope.events[1]);
    };

    $scope.openDatepicker = function($event) {
      $event.preventDefault();
      $event.stopPropagation();
      $scope.opened = true;
    };

    $scope.today = function() {
      $scope.outputDate = new Date();
    };

    $scope.today();

    $scope.clear = function () {
      $scope.outputDate = null;
    };

    $scope.dateOptions = {
      formatYear: 'yy',
      startingDay: 1
    };

    function organizeMeal(events) {
      if(events.length){
        if(events[0].meal === 'Lunch' && !events[1]){
          events.push({});
        }
        else{
          if(events[0].meal === 'Dinner'){
            events.unshift({});
          }
        }
      }

      return events;
    }

    $scope.getDayClass = function(date, mode) {
      if (mode === 'day') {
        var dayToCheck = new Date(date).setHours(0,0,0,0);

        for (var i=0;i<$scope.events.length;i++){
          var currentDay = new Date($scope.events[i].date).setHours(0,0,0,0);

          if (dayToCheck === currentDay) {
            return $scope.events[i].status;
          }
        }
      }

      return '';
    };

  });
