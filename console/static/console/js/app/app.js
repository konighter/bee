/**
 * Created by carvee on 14-6-29.
 */

angular.module('bee_console', ['cached_temp'])
    .config(['$interpolateProvider', function ($interpolateProvider) {
        $interpolateProvider.startSymbol('{$');
        $interpolateProvider.endSymbol('$}');
    }])
//.config(['$routeProvider',function($routeProvider) {
//
// }])

    .controller('sidebar_nav', ['$scope', function ($scope) {
        $scope.menus = [
            {title: '工作台', code: 'dashboard', url: 'dashboard', icon: 'dashboard', 'active': true},
            {title: '发现', code: 'explore', url: 'explore', icon: 'calendar'},
            {title: 'nihao2', code: 'nihao', url: 'explore_top_tab23423.html', icon: 'heart'}
        ];
        $scope.data = 'data';
        $scope.active_menu = $scope.menus[0];
        $scope.nav_c = function (menu) {
            for (var i in $scope.menus) {
                $scope.menus[i].active = false;
            }
            menu.active = true;
            $scope.active_menu = menu;
        }
    }])

    .controller('dashboardController', ['$scope', '$http', function ($scope, $http) {

        // get dashboard content tab
//        $http.get('menus?type=H&belongTo=dashboard').success(function (menus, status) {
//            $scope.tab_menus = menus;
//            console.log(menus)
//        })
//        .error(function (data, status) {
//            $scope.current_error = data || '请求失败,请稍候再试！'
//        });
        $scope.tab_menus = [
            {title:"最新动态",code:'feeds',url:'feeds',active:true},
            {title:"我的任务",code:'tasks',url:'tasks'},
            {title:"我的邮件",code:'mails',url:'mails'},
        ]

        $scope.current_tab_menu = $scope.tab_menus[0];


        $scope.change_tab_status = function(menu){
             for (var i in $scope.menus) {
                $scope.tab_menus[i].active = false;
             }
             menu.active = true;
             $scope.current_tab_menu = menu;
        }


    }]);
