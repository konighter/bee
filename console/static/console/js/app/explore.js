/**
 * Created by carvee on 14-7-8.
 */
angular.module('explore',[])

.controller('PositionController',['$scope','$rootScope', '$route', '$routeParams', '$location',
        function($scope,$rootScope, $route, $routeParams, $location){
            $rootScope.currentMenu = 'explore';
            $scope.position = {title:'web开发工程师',keypoints:['html/js/css3','jquery','nodejs','']}
        }])
.controller('TaskDetailCtrl',['$scope','$rootScope', '$route', '$routeParams', '$location',
        function($scope, $rootScope,$route, $routeParams, $location){
            $rootScope.currentMenu = 'explore';
            $scope.task = {
                title:'创维-射频工程师',
                steps :[{step:'寻访',logs:['5.1与部门经理确定招聘需求','5.5 与招聘经理明确职位要求']},
                    {step:'推荐',logs:['5.5 推荐候选人 王某某']},
                    {step:'面试'},
                    {step:'offer'},
                    {step:'入职'}]
            }
            $scope.position =  {title:'创维-射频工程师',jd:'岗位职责： 1．负责客户定制项目与运营商项目的跟进沟通,改进调试；2．负责个人通信产品中射频电路的设计和调试工作； 3．和部门内其他工程师紧密协作，保证整体射频电路设计指标的按期实现并满足可靠性/一致性要求； 4．和其它部门密切协作，保证整个产品的相关目标按期实现；5．负责客户定制项目与运营商项目的跟进沟通,改进调试；6． FTA,CTA,CE,FCC认证的技术支持；7．负责天线调试的技术支持；8．负责射频器件的认证与替换；9．完成其它相关工作。 职位要求： 1． 通信或微波专业本科，良好的英语沟通能力；2． 3年以上手机RF经验.；至少二年以上射频电路设计经验，熟悉射频系统及单元电路原理，熟悉射频测试仪器和EDA设计软件的使用，有手机射频电路，手机天线，EMC等设计经验者优先；具备系统的无线通信/电子工程专业基础知识；有欧美客户和运营商定制RF支持经验的优先；3． 良好的团队协作精神；良好的技术开发学习和攻关能力。'
                };

            $scope.company = {name:'北京某某公司',contract:'刘经理',tel:'13478675987',qq:'3658749098',desc:'不论你身处哪个行业，从事哪个工作，只要您有团队协作的需求，就是Worktile的用户'}

            $scope.active_step = function(step) {
                step.active = true;
            }

        }])