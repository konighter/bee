/**
 * Created by carvee on 14-7-8.
 */
angular.module('explore',[])

.controller('PositionController',['$scope','$rootScope', '$route', '$routeParams', '$location',
        function($scope,$rootScope, $route, $routeParams, $location){
            $rootScope.currentMenu = 'explore';
            $scope.position = {title:'web开发工程师',keypoints:['html/js/css3','jquery','nodejs','']}
        }])