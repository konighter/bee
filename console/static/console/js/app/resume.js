/**
 * Created by carvee on 14-7-14.
 */
angular.module('resume',['ngRoute'])
.controller('ResumeController',['$scope','$rootScope',function($scope,$rootScope){
        $rootScope.currentMenu = 'resumes';
        $scope.resumes = [
            {avatar:'/static/images/dog.jpg',name:'李某某',job:'某某公司/产品总监',url:'/resume/df873fie8r3r',resume_name:'产品总监',level:'4'},
             {avatar:'/static/images/dog.jpg',name:'李某某',job:'某某公司/产品总监',url:'/resume/df873fie8r3r',resume_name:'产品总监',level:'4'},
             {avatar:'/static/images/dog.jpg',name:'李某某',job:'某某公司/产品总监',url:'/resume/df873fie8r3r',resume_name:'产品总监',level:'4'},
             {avatar:'/static/images/dog.jpg',name:'李某某',job:'某某公司/产品总监',url:'/resume/df873fie8r3r',resume_name:'产品总监',level:'4'},
             {avatar:'/static/images/dog.jpg',name:'李某某',job:'某某公司/产品总监',url:'/resume/df873fie8r3r',resume_name:'产品总监',level:'4'},
             {avatar:'/static/images/dog.jpg',name:'李某某',job:'某某公司/产品总监',url:'/resume/df873fie8r3r',resume_name:'产品总监',level:'4'},
             {avatar:'/static/images/dog.jpg',name:'李某某',job:'某某公司/产品总监',url:'/resume/df873fie8r3r',resume_name:'产品总监',level:'4'},
             {avatar:'/static/images/dog.jpg',name:'李某某',job:'某某公司/产品总监',url:'/resume/df873fie8r3r',resume_name:'产品总监',level:'4'},
             {avatar:'/static/images/dog.jpg',name:'李某某',job:'某某公司/产品总监',url:'/resume/df873fie8r3r',resume_name:'产品总监',level:'4'},
             {avatar:'/static/images/dog.jpg',name:'李某某',job:'某某公司/产品总监',url:'/resume/df873fie8r3r',resume_name:'产品总监',level:'4'},
             {avatar:'/static/images/dog.jpg',name:'李某某',job:'某某公司/产品总监',url:'/resume/df873fie8r3r',resume_name:'产品总监',level:'4'},
             {avatar:'/static/images/dog.jpg',name:'李某某',job:'某某公司/产品总监',url:'/resume/df873fie8r3r',resume_name:'产品总监',level:'4'},
             {avatar:'/static/images/dog.jpg',name:'李某某',job:'某某公司/产品总监',url:'/resume/df873fie8r3r',resume_name:'产品总监'},
             {avatar:'/static/images/dog.jpg',name:'李某某',job:'某某公司/产品总监',url:'/resume/df873fie8r3r',resume_name:'产品总监'},
             {avatar:'/static/images/dog.jpg',name:'李某某',job:'某某公司/产品总监',url:'/resume/df873fie8r3r',resume_name:'产品总监'},
             {avatar:'/static/images/dog.jpg',name:'李某某',job:'某某公司/产品总监',url:'/resume/df873fie8r3r',resume_name:'产品总监'},
             {avatar:'/static/images/dog.jpg',name:'李某某',job:'某某公司/产品总监',url:'/resume/df873fie8r3r',resume_name:'产品总监'},


        ];

    }])

.controller('ResumeDetailController',['$scope', '$rootScope','$route', '$routeParams', '$location',
        function($scope,$rootScope, $route, $routeParams, $location){
    $rootScope.currentMenu = 'resumes';
    var resumeId = $routeParams.resumeId
    console.log(resumeId);
    $scope.resume = {
        title : '产品总监',
        candidate: '李某某',
        base_info:'本科/5年/上海/阿里研究院',
        avatar:'/static/images/dog.jpg',
        work_experience:
        [
            {date_start:'1993',date_end:'1999',company:'某某公司',company_scale:'1000人以上',title:'研发工程师',leaders:'5',response_for:'研发经理',introduction:'把最有价值的内容放在简历中，无关痛痒的不需要浪费篇幅，使用语言讲究平实、客观和精练，太感性的描述不宜出现。通常简历的篇幅为A4纸版面1-2页，不宜过长，也不宜有半页，出现一页半的情况时，最好能压缩为一页。简历中尽量提供能够证明自己工作业绩的量化数据，比如拓展了多少个新的市场客户，年销售业绩达到多少万元，每年发表学术论文多少篇等。最好还可以提供能够提高职业含金量的成功经历，比如完成了一个很难的项目，拿下了一个很大的客户等。对于自己独有的经历一定要保留，在著名公司工作、参加著名培训、与著名人物接触等都可以重点突出处理。'},
            {date_start:'1993',date_end:'1999',company:'某某公司',company_scale:'1000人以上',title:'研发工程师',leaders:'5',response_for:'研发经理',introduction:'把最有价值的内容放在简历中，无关痛痒的不需要浪费篇幅，使用语言讲究平实、客观和精练，太感性的描述不宜出现。通常简历的篇幅为A4纸版面1-2页，不宜过长，也不宜有半页，出现一页半的情况时，最好能压缩为一页。简历中尽量提供能够证明自己工作业绩的量化数据，比如拓展了多少个新的市场客户，年销售业绩达到多少万元，每年发表学术论文多少篇等。最好还可以提供能够提高职业含金量的成功经历，比如完成了一个很难的项目，拿下了一个很大的客户等。对于自己独有的经历一定要保留，在著名公司工作、参加著名培训、与著名人物接触等都可以重点突出处理。'},
            {date_start:'1993',date_end:'1999',company:'某某公司',company_scale:'1000人以上',title:'研发工程师',leaders:'7',response_for:'研发经理',introduction:'把最有价值的内容放在简历中，无关痛痒的不需要浪费篇幅，使用语言讲究平实、客观和精练，太感性的描述不宜出现。通常简历的篇幅为A4纸版面1-2页，不宜过长，也不宜有半页，出现一页半的情况时，最好能压缩为一页。简历中尽量提供能够证明自己工作业绩的量化数据，比如拓展了多少个新的市场客户，年销售业绩达到多少万元，每年发表学术论文多少篇等。最好还可以提供能够提高职业含金量的成功经历，比如完成了一个很难的项目，拿下了一个很大的客户等。对于自己独有的经历一定要保留，在著名公司工作、参加著名培训、与著名人物接触等都可以重点突出处理。'},
            {date_start:'1993',date_end:'1999',company:'某某公司',company_scale:'1000人以上',title:'研发工程师',leaders:'1',response_for:'研发经理',introduction:'把最有价值的内容放在简历中，无关痛痒的不需要浪费篇幅，使用语言讲究平实、客观和精练，太感性的描述不宜出现。通常简历的篇幅为A4纸版面1-2页，不宜过长，也不宜有半页，出现一页半的情况时，最好能压缩为一页。简历中尽量提供能够证明自己工作业绩的量化数据，比如拓展了多少个新的市场客户，年销售业绩达到多少万元，每年发表学术论文多少篇等。最好还可以提供能够提高职业含金量的成功经历，比如完成了一个很难的项目，拿下了一个很大的客户等。对于自己独有的经历一定要保留，在著名公司工作、参加著名培训、与著名人物接触等都可以重点突出处理。'},
        ],
        proj_experience:
        [
            {date_start:'1993',date_end:'1999',name:'某某某某项目',duty:'研发工程师','introduction':' Java and/or JVM based languages such as Scala Web frameworks/technologies (JSP, JSF)• Application servers (Geronimo, Glassfish, JBoss)• Scripting languages (JavaScript, Python)• Contemporary and emerging platforms - Node.js, Play• Multiple OS (Windows, Linux, Mac)• Eclipse• SCM systems - preferably Git• OSGI• Build management tools (Maven, Ivy) '},
            {date_start:'1993',date_end:'1999',name:'某某某某项目',duty:'研发工程师','introduction':' Java and/or JVM based languages such as Scala Web frameworks/technologies (JSP, JSF)• Application servers (Geronimo, Glassfish, JBoss)• Scripting languages (JavaScript, Python)• Contemporary and emerging platforms - Node.js, Play• Multiple OS (Windows, Linux, Mac)• Eclipse• SCM systems - preferably Git• OSGI• Build management tools (Maven, Ivy) '},
            {date_start:'1993',date_end:'1999',name:'某某某某项目',duty:'研发工程师','introduction':' Java and/or JVM based languages such as Scala Web frameworks/technologies (JSP, JSF)• Application servers (Geronimo, Glassfish, JBoss)• Scripting languages (JavaScript, Python)• Contemporary and emerging platforms - Node.js, Play• Multiple OS (Windows, Linux, Mac)• Eclipse• SCM systems - preferably Git• OSGI• Build management tools (Maven, Ivy) '},
            {date_start:'1993',date_end:'1999',name:'某某某某项目',duty:'研发工程师','introduction':' Java and/or JVM based languages such as Scala Web frameworks/technologies (JSP, JSF)• Application servers (Geronimo, Glassfish, JBoss)• Scripting languages (JavaScript, Python)• Contemporary and emerging platforms - Node.js, Play• Multiple OS (Windows, Linux, Mac)• Eclipse• SCM systems - preferably Git• OSGI• Build management tools (Maven, Ivy) '},
            {date_start:'1993',date_end:'1999',name:'某某某某项目',duty:'研发工程师','introduction':' Java and/or JVM based languages such as Scala Web frameworks/technologies (JSP, JSF)• Application servers (Geronimo, Glassfish, JBoss)• Scripting languages (JavaScript, Python)• Contemporary and emerging platforms - Node.js, Play• Multiple OS (Windows, Linux, Mac)• Eclipse• SCM systems - preferably Git• OSGI• Build management tools (Maven, Ivy) '},
            {date_start:'1993',date_end:'1999',name:'某某某某项目',duty:'研发工程师','introduction':' Java and/or JVM based languages such as Scala Web frameworks/technologies (JSP, JSF)• Application servers (Geronimo, Glassfish, JBoss)• Scripting languages (JavaScript, Python)• Contemporary and emerging platforms - Node.js, Play• Multiple OS (Windows, Linux, Mac)• Eclipse• SCM systems - preferably Git• OSGI• Build management tools (Maven, Ivy) '}
        ],
        skills:['java','tomcat','webservice','big data','hadoop','jquery','angularJs','more......'],
        evaluation : '把最有价值的内容放在简历中，无关痛痒的不需要浪费篇幅，使用语言讲究平实、客观和精练，太感性的描述不宜出现。通常简历的篇幅为A4纸版面1-2页，不宜过长，也不宜有半页，出现一页半的情况时，最好能压缩为一页。简历中尽量提供能够证明自己工作业绩的量化数据，比如拓展了多少个新的市场客户，年销售业绩达到多少万元，每年发表学术论文多少篇等。最好还可以提供能够提高职业含金量的成功经历，比如完成了一个很难的项目，拿下了一个很大的客户等。对于自己独有的经历一定要保留，在著名公司工作、参加著名培训、与著名人物接触等都可以重点突出处理。',
        target:'',
        communication_records : [
            {date:1405491156191,assign:'刘某某',comment:'继续跟进1~~~~~~~~~~~~~~~~~'},
            {date:1405491156191,assign:'刘某某',comment:'继续跟进2~~~~~~~~~~~~~~~~~'},
            {date:1405491156191,assign:'刘某某',comment:'继续跟进3~~~~~~~~~~~~~~~~~'},
            {date:1405491156191,assign:'刘某某',comment:'继续跟进4~~~~~~~~~~~~~~~~~'},
            {date:1405491156191,assign:'刘某某',comment:'继续跟进5~~~~~~~~~~~~~~~~~'},
            {date:1405491156191,assign:'刘某某',comment:'继续跟进6~~~~~~~~~~~~~~~~~'},
        ]
    };

    $scope.resume_tab = 'work_experience';

    $scope.js_resume_tab = function(tab){
        $scope.resume_tab = tab;
    }

    $scope.add_communication_record = function(r){
         $scope.resume.communication_records.unshift({
             date:new Date(),
             assign:'李某某',
             comment:r
         })
    }

}])
