/**
 * Created by carvee on 14-6-29.
 */

angular.module('bee_console', ['cached_temp','dashboard'])
    .config(['$interpolateProvider', function ($interpolateProvider) {
        $interpolateProvider.startSymbol('{$');
        $interpolateProvider.endSymbol('$}');
    }])
//.config(['$routeProvider',function($routeProvider) {
//
// }])

    .controller('sidebar_nav', ['$scope','$location', function ($scope,$location) {
        $scope.menus = [
            {title: '工作台', code: 'dashboard', url: '/dashboard', icon: 'dashboard', 'active': true},
            {title: '发现', code: 'explore', url: '/explore', icon: 'calendar'},
            {title: 'nihao2', code: 'nihao', url: 'explore_top_tab23423.html', icon: 'heart'}
        ];

        $scope.currentMenu = $scope.menus[0];

        $scope.linkMenu = function(menu){
             return {active : menu === $scope.currentMenu}
        }

        $scope.sidebar_menu_nav = function(menu){
           $scope.currentMenu = menu;
        }



    }]);
