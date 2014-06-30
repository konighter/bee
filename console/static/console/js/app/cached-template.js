/**
 * Created by carvee on 14-6-30.
 */
angular.module("cached_temp", []).run(["$templateCache",
	function(e) {
		e.put("explore_top_tab23423.html", '<ul class="tabs"> <li> <a href="/explore" ng-class="{true: \'active\'}[browse_top_tab == \' \']">任务</a> </li> <li> <a href="/explore/files" ng-class="{true: \'active\'}[browse_top_tab == \'files\']">文件</a> </li> <li> <a href="/explore/posts" ng-class="{true: \'active\'}[browse_top_tab == \'posts\']">话题</a> </li> <li> <a href="/explore/pages" ng-class="{true: \'active\'}[browse_top_tab == \'pages\']">文档</a> </li> </ul> ')
	}
])