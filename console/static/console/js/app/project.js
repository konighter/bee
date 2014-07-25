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
    $scope.project = {id:'nidjfdj23jjkfj234o3uj',name:'某某项目',is_star:false,company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox'};
    $scope.positions = [
        {id:'nidjfdj23jjkfj234o3uj',name:'高级产品总监',company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox',is_fav:false},
        {id:'nidjfdj23jjkfj234o3uj',name:'高级产品总监',company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox',is_fav:false},
        {id:'nidjfdj23jjkfj234o3uj',name:'高级产品总监',company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox',is_fav:true},
        {id:'nidjfdj23jjkfj234o3uj',name:'高级产品总监',company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox',is_fav:true},
        {id:'nidjfdj23jjkfj234o3uj',name:'高级产品总监',company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox',is_fav:true},
    ];
}])

.controller('PositionController',['$scope', '$rootScope','$route', '$routeParams', '$location','$pobBox',
        function($scope,$rootScope, $route, $routeParams, $location ,$pobBox){
        var position = $rootScope.global.locator.entry;
        console.log(position)

        $scope.position = {id:'nidjfdj23jjkfj234o3uj',name:'高级产品总监',company:'某某公司',principal:'李某某',cust_client:'李经历',icon:'inbox',is_fav:true,
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

      $scope.book_interview = function(entry){
          console.log(entry)
          console.log('book interview')
          entry.progress = 'INTERVIEW';
          // 更新候选人状态


          $pobBox.close();
      }

      $scope.position_options = [{label:'已推荐',value:'RECOMMEND'},
                        {label:'面试中',value:'INTERVIEW'},
                        {label:'offer',value:'OFFER'},
                        {label:'已入职',value:'ONJOB'},
                        {label:'已回款',value:'FINISHED'},
      ];

      $scope.js_show_popbox = function(event,r){
         $pobBox.open({
             scope:$scope,
             target:event,
             templateUrl:'get_interview.html',
             entry:r
         });
      }



}])

