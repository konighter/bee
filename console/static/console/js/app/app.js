/**
 * Created by carvee on 14-6-29.
 */

angular.module('bee_console',['cached_temp'])
.config(['$interpolateProvider', function($interpolateProvider) {
    $interpolateProvider.startSymbol('{$');
    $interpolateProvider.endSymbol('$}');
}])
//.config(['$routeProvider',function($routeProvider) {
//
// }])

.controller('sidebar_nav',['$scope',function($scope){
    $scope.menus = [{title:'cached tmp',code:'nihao',url:'explore_top_tab23423.html',icon:'dashboard','active':true},
                    {title:'nihao1',code:'nihao',url:'explore_top_tab23423.html',icon:'calendar'},
                    {title:'nihao2',code:'nihao',url:'explore_top_tab23423.html',icon:'heart'}
                   ];
    $scope.data = 'data';
    $scope.active_menu = $scope.menus[0];
    $scope.nav_c = function(menu){
        for(var i in $scope.menus) {
            $scope.menus[i].active = false;
        }
        menu.active = true;
        $scope.active_menu = menu;
    }
}])
