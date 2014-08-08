/**
 * Created by carvee on 14-7-25.
 */

angular.module('uiComponent', ['rightClick','scollerBar'])

angular.module('rightClick',[])
    .directive('ngRightClick', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
            });
        });
    };
});

angular.module('scollerBar',[])
.directive('scollerPanel',[function(){

        console.log('scollerPanel')
        return {
            restrict:'C',
            link:function(scope, iElement, iAttrs, controller){
                iElement.mCustomScrollbar({
            theme:"minimal-dark"
        });
            }
        }


    }])