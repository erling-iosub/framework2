myframeMenu.directive(`myframeMenuItemDir`,
  () => {
    return {
      restrict: `E`,
      transclude: true,
      require: `^myframeMenuDir`,
      templateUrl: `/ext-modules/myframeMenu/myframeMenuItemTemplate.html`,
      scope: {
        label:`@`,
        icon: `@`,
        route:`@`
      },
      link: function (scope,element,attr,ctrl) {
        scope.isActive = () => {
          return element === ctrl.getActiveElement()
        };

        scope.isVertical = () => {
          return ctrl.isVertical() || element.parents('.myframe-menu-group-item').length>0;
        
        }

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