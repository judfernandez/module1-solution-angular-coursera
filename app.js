(function () {
  'use strict';

  angular.module('MyApp', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function LunchCheckController($scope) {
    $scope.lunchInput = '';
    $scope.message = '';

    $scope.sayMessage = function () {
      var itemsLunch = $scope.lunchInput.split(',');
      if ((itemsLunch[0] === '') && (itemsLunch.length === 1)) {
        $scope.message = ('Please enter data first');
      } else if (itemsLunch.length <= 3) {
        $scope.message = ('Enjoy');
      } else {
        $scope.message = ('Too much!');
      }
    };
  }

})();
