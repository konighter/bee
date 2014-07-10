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
            $scope.feeds = [
                 {actor:{name:'李华',job:'北京某某科技公司/产品研发部/研发总监',avatar:'/static/images/dog.jpg'},title:'更新了职位:web开发工程师',url:'/explore/position/3',pubDate:'19:20'}
                ,{actor:{name:'李华',job:'北京某某科技公司/产品研发部/研发总监',avatar:'/static/images/dog.jpg'},title:'更新了职位:web开发工程师',url:'/explore/position/3',pubDate:'19:20'}
                ,{actor:{name:'李华',job:'北京某某科技公司/产品研发部/研发总监',avatar:'/static/images/dog.jpg'},title:'更新了职位:web开发工程师',url:'/explore/position/3',pubDate:'19:20'}
                ,{actor:{name:'李华',job:'北京某某科技公司/产品研发部/研发总监',avatar:'/static/images/dog.jpg'},title:'更新了职位:web开发工程师',url:'/explore/position/3',pubDate:'19:20'}
                ,{actor:{name:'李华',job:'北京某某科技公司/产品研发部/研发总监',avatar:'/static/images/dog.jpg'},title:'更新了职位:web开发工程师',url:'/explore/position/3',pubDate:'19:20'}]

        }])

.controller('TasksController',['$scope','$rootScope', '$route', '$routeParams', '$location',
        function($scope, $rootScope,$route, $routeParams, $location){
            $scope.tasks = [
                {title:'创维-射频工程师',url:'/explore/tasks/34fdf3vdf0985'},
                {title:'创维-射频工程师',url:'/explore/tasks/34fdf3vdf0985'},
                {title:'北京某某科技公司-2季度',url:'/explore/tasks/34fdf3vdf0985'},
                {title:'北京某某科技公司-2季度',url:'/explore/tasks/34fdf3vdf0985'},
                {title:'北京某某科技公司-2季度',url:'/explore/tasks/34fdf3vdf0985'}]
        }])

.controller('ProjectsController',['$scope','$rootScope', '$route', '$routeParams', '$location',
        function($scope,$rootScope, $route, $routeParams, $location){
            $scope.contributes = [{title:'new feeds-1!!'},{title:'new feeds-2!!'},{title:'new feeds-3!!'},{title:'new feeds-4!!'},{title:'new feeds-5!!'}]
        }])

.controller('DashboardController', ['$scope','$rootScope', '$http', function ($scope, $rootScope,$http) {
        $rootScope.currentMenu = 'dashboard';
        $scope.tab_menus = [
            {title:"最新动态",code:'feeds',url:'/console/dashboard/feeds'},
            {title:"我的任务",code:'tasks',url:'/console/dashboard/tasks'},
            {title:"参与项目",code:'projects',url:'/console/dashboard/contributes'}
        ];

        $scope.dashboard_current_tab_menu = $scope.tab_menus[0];
        $scope.linkCss= function(tab_menu) {
            return {active: tab_menu === $scope.dashboard_current_tab_menu}
        }
        $scope.dashboardTabNav = function(tab_menu){
            $scope.dashboard_current_tab_menu = tab_menu;
        }



    }])