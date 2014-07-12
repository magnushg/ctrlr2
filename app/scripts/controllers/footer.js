angular.module('yoAngularApp')
	.controller('footerCtrl', function ($scope, automatrService) {
    $scope.heartBeat = automatrService.getHeartBeat();
});