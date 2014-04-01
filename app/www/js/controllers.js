angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state) {
  $scope.user = {};
  $scope.signIn = function (user) {
    // console.log(user, $scope.user, $scope);
    if (user.email === 'ziaxdk@gmail.com' && user.password === '12') {
      console.log('ojk');
    }
  };


})

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
