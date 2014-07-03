/**
 * Created by carvee on 14-7-2.
 */

angular.module('dashboard',['ngRoute'])
//.config(['$routeProvider', '$locationProvider',function($routeProvider, $locationProvider) {
//        $routeProvider
//            .when('/console/',{
////                templateUrl:'/feeds',
//                controller : 'FeedsController',
//                template : 'content here is fine!!{$ active_tab_menu $}'
//            })
//            .when('/dashboard/feeds',{
////                templateUrl:'/feeds',
//                controller : 'FeedsController',
//                template : 'content here is fine!!{$ active_tab_menu $}'
//            })
//            .when('/dashboard/works',{
////                templateUrl:'/works' ,
//                controller :'WorksController',
//                template : 'content here is fine!!{$ active_tab_menu $}'
//            })
//            .when('/dashboard/contributes',{
////                templateUrl:'/contributes',
//                controller:'ContributesController',
//                 template : 'content here is fine!!{$ active_tab_menu $}'
//            }).otherwise({
//                template : 'content here is fine!!'
//            });
//
//
//         $locationProvider.html5Mode(true);
//
//    } ])

.controller('FeedsController',['$scope', '$rootScope','$route', '$routeParams', '$location',
        function($scope,$rootScope, $route, $routeParams, $location){
            $scope.feeds = [{actor:'李华',title:'new feeds-1!!'},{title:'new feeds-2!!'},{title:'new feeds-3!!'},{title:'new feeds-4!!'},{title:'new feeds-5!!'}]

        }])

.controller('WorksController',['$scope','$rootScope', '$route', '$routeParams', '$location',
        function($scope, $rootScope,$route, $routeParams, $location){
            $scope.works = [{title:'new feeds-1!!'},{title:'new feeds-2!!'},{title:'new feeds-3!!'},{title:'new feeds-4!!'},{title:'new feeds-5!!'}]
        }])

.controller('ContributesController',['$scope','$rootScope', '$route', '$routeParams', '$location',
        function($scope,$rootScope, $route, $routeParams, $location){
            $scope.contributes = [{title:'new feeds-1!!'},{title:'new feeds-2!!'},{title:'new feeds-3!!'},{title:'new feeds-4!!'},{title:'new feeds-5!!'}]
        }])

.controller('dashboardController', ['$scope','$rootScope', '$http', function ($scope, $rootScope,$http) {

        $scope.tab_menus = [
            {title:"最新动态",code:'feeds',url:'/dashboard/feeds'},
            {title:"我的任务",code:'tasks',url:'/dashboard/works'},
            {title:"参与项目",code:'mails',url:'/dashboard/contributes'}
        ];

        $scope.dashboard_current_tab_menu = $scope.tab_menus[0];
        $scope.linkCss= function(tab_menu) {
            return {active: tab_menu === $scope.dashboard_current_tab_menu}
        }
        $scope.dashboardTabNav = function(tab_menu){
            $scope.dashboard_current_tab_menu = tab_menu;
        }


    }])