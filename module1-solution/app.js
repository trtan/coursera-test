(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController($scope) {
  $scope.lunchMenu = "";
  $scope.message = "";

  $scope.checkMenu = function () {
    var menus = $scope.lunchMenu.split(",");
    var itemCount = 0;
    for (let indx = 0; indx < menus.length; indx++) {
      //Don't count the empty item
      if (menus[indx].trim().length > 0) {
        itemCount++;
      }
    }

    $scope.message = "Enjoy!";

    if(itemCount == 0) {
      $scope.message = "Please enter data first!";
    } else if (itemCount > 3) {
      $scope.message = "Too much!";
    }

  }
}


})();
