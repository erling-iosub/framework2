myframeMenu.directive(`myframeMenuItemDirective`,
  () => {
    return {
      restrict: `E`,
      transclude:true,
      require: `^myframeMenuDirective`,
      templateUrl: `/ext-modules/myframeMenu/myframeMenuItemTemplate.html`,
      scope: {
        label:`@`,
        icon: `@`,
        route:`@`
      },
      link: function (scope,element,attr,ctrl) {
        scope.isActive = function(){
          return element === ctrl.getActiveElement()
        };

        //jquery on function
        element.on(`click`, (evt)=>{
          evt.stopPropagation();
          evt.preventDefault();
          // because jquery manages the event, angular does not know about it, so
          // scope.$apply
          scope.$apply( function () {
            ctrl.setActiveElement(element)
            ctrl.setRoute(scope.route)
          })
        })
      },
    }
  })