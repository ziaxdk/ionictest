angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state) {
  $scope.user = {};
  $scope.signIn = function (user) {
    // console.log(user, $scope.user, $scope);
    if (user.email === '1' && user.password === '2') {
      $state.go('app.current');
    }
  };


})

.controller('CurrentCtrl', function($scope, $ionicGesture) {
    $scope.items = [{ count: 2, text: 'l mælk' }, { count: 6, text: 'stk æg' }];
    console.log($ionicGesture);

    $scope.tap = function() {
      console.log('tap');
    }

  })

.controller('AppCtrl', function($scope) {
});
