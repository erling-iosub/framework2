myframeMenu.directive(`myframeMenuGroupItemDir`,
  function(){
    return{
      restrict: `E`,
      transclude: true,
      require: `^myframeMenuDir`,
      templateUrl: `/ext-modules/myframeMenu/myframeMenuGroupItemTemplate.html`,
      scope: {
        label:`@`,
        icon: `@`,

      },
      link: (scope,element,attr,ctrl) => {
        // flag and function to open/close a group item menu
        scope.isOpen = false;

        scope.clicked = () => {
          scope.isOpen = !scope.isOpen;

          if ( element.parents('.myframe-menu-group-item').length === 0) {
            scope.setSubmenuPosition();
          }
        }

        scope.isVertical = () => {
          return ctrl.isVertical() || element.parents('.myframe-menu-group-item').length > 0;
        }

        scope.setSubmenuPosition = () => {
          var pos = element.offset(); // jquery function that gives left and top css styles
          //console.log('pos: ',pos);
          // jquery css function to set the left and top position 
          $('.myframe-menu-group-item').css( {'margin-left': pos.left+20, 'margin-top': 0} )
        }

      }
    }
  })