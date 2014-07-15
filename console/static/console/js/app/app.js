/**
 * Created by carvee on 14-6-29.
 */

angular.module('bee_console', ['ngRoute','cached_temp','dashboard','explore','resume'])
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
        .when('/explore/tasks/:taskid',{
            templateUrl:  '/console/explore/tasks/detail',
            controller : 'TaskDetailCtrl'
        })
        .when('/resumes',{
            templateUrl: '/console/resumes',
            controller: 'ResumeController'
        })
        .when('/resume/:resumeId',{
            templateUrl: function(param){
                return '/console/resume/'+param.resumeId;
            },
            controller: 'ResumeDetailController'
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
            {title: '简历管理', code: 'resume', url: '/resumes', icon: 'users'}
        ];

        $rootScope.currentMenu = $scope.menus[0].code;

        $scope.sidebar_menu_nav = function(menu){
             $rootScope.currentMenu = menu;
        }
        $scope.if_collapse = false;

        $scope.js_sidebar_collapse = function(){
            $scope.if_collapse = !$scope.if_collapse;
        }


    }]);
