/**
 * Created by carvee on 14-6-30.
 */
angular.module("cached_temp", []).run(["$templateCache",
	function(e) {
		e.put("explore_top_tab23423.html", '<ul class="tabs"> <li> <a href="/explore" ng-class="{true: \'active\'}[browse_top_tab == \' \']">任务</a> </li> <li> <a href="/explore/files" ng-class="{true: \'active\'}[browse_top_tab == \'files\']">文件</a> </li> <li> <a href="/explore/posts" ng-class="{true: \'active\'}[browse_top_tab == \'posts\']">话题</a> </li> <li> <a href="/explore/pages" ng-class="{true: \'active\'}[browse_top_tab == \'pages\']">文档</a> </li> </ul> ')

        e.put("/position/interview.html",'<div><div class="pop_box"> <div class="pop_box_header"><h3>预约面试</h3><div class="closet" ng-click="pop_box_close()">X</div></div><div class="pop_box_body"> <div class="title">候选人: {$ entry.candidate $}</div><div class="ui form "> <div class="field">  <input placeholder="面试时间" type="text"></div><div class="field"> <input placeholder="联系人" type="text"></div> <div class="field"> <textarea placeholder="备注"></textarea>  </div>  </div> </div> <div class="pop_box_action"> <div class="ui small buttons"> <div class="ui  primary button" ng-click="book_interview(entry)">提交</div> <div class="ui secondary button" ng-click="pop_box_close()">取消</div> </div> </div></div></div>')

    }
])