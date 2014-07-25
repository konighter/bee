/**
 * Created by carvee on 14-7-25.
 */

angular.module('uiComponent', ['PopBox'])

angular.module('PopBox', [])
    .directive('popBox', ['$document', function ($document) {
        return {
            restrict: 'AE',
            replace: true,
            templateUrl: function (element, attrs) {
                return attrs.templateUrl
            },
            link: function (scope, iElement, iAttrs) {
                console.log(scope.entry)
                scope.pop_box_close = function () {
                    iElement.remove();
                }
            }
        }
    }])
    .service('$pobBox', ['$document', '$compile', '$rootScope', function ($document, $compile, $rootScope) {


        return {

            open: function (options) {
                var body = $document.find('body').eq(0);
                var popDomEl = angular.element('<pop-box></pop-box>');
                popDomEl.attr({
                    'template-url': options.templateUrl
                });
                popDomEl.css({
                    top: options.target.pageY - 380,
                    left: options.target.pageX - 240,
                    right: 'auto'
                });
                var scope = (options.scope || $rootScope).$new();
                scope.entry = options.entry;
                var modalDomEl = $compile(popDomEl)(scope);
                this.body = modalDomEl;
                body.append(modalDomEl);

            },
            close: function () {
                this.body.remove();
            }
        }
    }]);