/**
 * Created by carvee on 14-6-29.
 */

angular.module('bee_console', ['ngRoute','cached_temp','dashboard','explore'])
    .run(['$rootScope',function($rootScope){
        $rootScope.site_title = '欢迎使用Raccoon！！！'
    }])
    .config(['$interpolateProvider', function ($interpolateProvider) {
        $interpolateProvider.startSymbol('{$');
        $interpolateProvider.endSymbol('$}');
    }])
    .config(['$routeProvider','$locationProvider',function($routeProvider,$locationProvider) {

        $routeProvider.when('/console',{
            templateUrl:'/console/dashboard',
            controller:'DashboardController'
        })
        .when('/dashboard',{
            templateUrl:'/console/dashboard',
            controller:'DashboardController'
        })
        .when('/explore/position/:id',{
            templateUrl:'/console/explore/position',
            controller:'PositionController'
        })
        .when('/explore',{
            templateUrl:'/console/explore/position',
            controller:'PositionController'
        })
        .otherwise(
            {
                template:'OH! MY GOD ,How you enter here!!'
            }
        );
        $locationProvider.html5Mode(true);

    }])

    .controller('sidebar_nav', ['$scope','$rootScope','$location', function ($scope,$rootScope,$location) {
        $scope.menus = [
            {title: '工作台', code: 'dashboard', url: '/dashboard', icon: 'dashboard', 'active': true},
            {title: '发现', code: 'explore', url: '/explore', icon: 'calendar'},
            {title: 'nihao2', code: 'nihao', url: 'explore_top_tab23423.html', icon: 'heart'}
        ];

        $rootScope.currentMenu = $scope.menus[0].code;

        $scope.sidebar_menu_nav = function(menu){
             $rootScope.currentMenu = menu;
        }


    }]);
