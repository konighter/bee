/**
 * Created by carvee on 14-6-29.
 */

angular.module('bee_console',[])
.config(['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
}])
//.config(['$routeProvider',function($routeProvider) {
//
// }])

.controller('sidebar_nav',['$scope',function($scope){
    $scope.menus = [{title:'nihao',code:'nihao',url:'/company',icon:'heart','class':'active'},
    {title:'nihao1',code:'nihao',url:'/company',icon:'heart'},
    {title:'nihao2',code:'nihao',url:'/company',icon:'heart'}];
    $scope.data = 'data';
    $scope.nav_c = function(menu){
        $scope.active_menu = menu;
    }
}])