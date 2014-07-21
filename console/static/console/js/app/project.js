/**
 * Created by carvee on 14-7-17.
 */
angular.module('project',['ngRoute'])
.controller('ProjectsController',['$scope', '$rootScope','$route', '$routeParams', '$location',
        function($scope,$rootScope, $route, $routeParams, $location){
    $rootScope.currentMenu = 'projects';

    $scope.projects = [
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:true,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:true,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:true,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:true,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:true,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:true,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:true,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:true,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
        {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'},
    ];

    $scope.js_toggle_project_fav = function(project){
        project.is_star = !project.is_star;
    }

}])

.controller('ProjectDetailController',['$scope', '$rootScope','$route', '$routeParams', '$location',
        function($scope,$rootScope, $route, $routeParams, $location){
    $rootScope.currentMenu = 'projects';
     $scope.project =   {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'};


}])
