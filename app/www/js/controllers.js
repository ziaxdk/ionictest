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

.controller('CurrentCtrl', function($scope) {
    $scope.items = [{ count: 2, text: 'l mælk' }, { count: 6, text: 'stk æg' }];
  })

.controller('AppCtrl', function($scope) {
});
