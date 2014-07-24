/**
 * Created by carvee on 14-6-29.
 */

angular.module('bee_console', ['ngRoute','cached_temp','dashboard','explore','resume','project' ])

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
        .when('/projects',{
            templateUrl: 'console/projects',
            controller: 'ProjectsController'
        })
        .when('/project/:project_id',{
            templateUrl: function(param){
                return '/console/project/'+param.project_id;
            },
            controller: 'ProjectDetailController'
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
            {title: '简历管理', code: 'resumes', url: '/resumes', icon: 'users'},
            {title: '项目管理', code: 'projects', url: '/projects', icon: 'inbox'}


        ];

        $rootScope.currentMenu = $scope.menus[0].code;

        $scope.sidebar_menu_nav = function(menu){
             $rootScope.currentMenu = menu;
        }
        $scope.if_collapse = false;

        $scope.js_sidebar_collapse = function(){
            $scope.if_collapse = !$scope.if_collapse;
        }


    }])
    .controller('locatorController',['$scope','$rootScope','$location', function ($scope,$rootScope,$location) {
        $scope.template = {
            url:$rootScope.global.locator.template(),
            entry:{id:'nidjfdj23jjkfj234o3uj',name:'高级产品总监',company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox',is_fav:true,
                position_desc:'把最有价值的内容放在简历中，无关痛痒的不需要浪费篇幅，使用语言讲究平实、客观和精练，太感性的描述不宜出现。通常简历的篇幅为A4纸版面1-2页，不宜过长，也不宜有半页，出现一页半的情况时，最好能压缩为一页。简历中尽量提供能够证明自己工作业绩的量化数据，比如拓展了多少个新的市场客户，年销售业绩达到多少万元，每年发表学术论文多少篇等。最好还可以提供能够提高职业含金量的成功经历，比如完成了一个很难的项目，拿下了一个很大的客户等。对于自己独有的经历一定要保留，在著名公司工作、参加著名培训、与著名人物接触等都可以重点突出处理。',
                resumes:[
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'RECOMMEND',date:13458558555558,update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'RECOMMEND',date:13457557555557,update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'RECOMMEND',date:13456556555556,update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'RECOMMEND',date:13455555555555,update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'RECOMMEND',date:new Date(),update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'INTERVIEW',date:new Date(),update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'INTERVIEW',date:new Date(),update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'INTERVIEW',date:new Date(),update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'INTERVIEW',date:new Date(),update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'INTERVIEW',date:new Date(),update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'INTERVIEW',date:new Date(),update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'OFFER',date:new Date(),update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'OFFER',date:new Date(),update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'OFFER',date:new Date(),update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'OFFER',date:new Date(),update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'ONJOB',date:new Date(),update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'ONJOB',date:new Date(),update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'FINISHED',date:new Date(),update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'FINISHED',date:new Date(),update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                    {title : '产品总监',candidate: '李某某', base_info:'本科/5年/上海/阿里研究院',avatar:'/static/images/dog.jpg',progress:'FINISHED',date:new Date(),update_date:new Date(),operator:{id:'34dgf454f4',name:'刘某某'}},
                ]
            }

        }
        console.log('init')





    }])
    .run(['$rootScope','$document',function($rootScope,$document){
        $rootScope.site_title = '欢迎使用Raccoon！！！'
        $rootScope.global = {
            locator:{
                show:false,
                url:'',
                type:'',
                template:function(){
                    switch (this.type) {
                        case 'position':
                            return '/tpl/project/position';
                        default:
                            return '/tpl/project/position';
                    }
                },
                locator_toggle:function(event,entry_id,type){
                    this.type = type;
                    this.url = entry_id ? '/api/'+type+'/'+entry_id : '';
                    this.show = true;
                },
                locator_close:function(){
                    console.log('locator.close')
                    this.type = '';
                    this.url = '';
                    this.show = false;
                }
            }
        };

        $rootScope.model_event = function(entry,name,$event){
            $rootScope.$broadcast(name,entry,{pageX:$event.pageX,pageY:$event.pageY});
        }

    }])
