myframeMenu.directive(`myframeMenuDir`,
  ($timeout) => {
    return {
      restrict: `E`,
      transclude: true,
      templateUrl: `/ext-modules/myframeMenu/myframeMenuTemplate.html`,
      scope: {

      },
      link: (scope, element, attr) => {
        
        $timeout(() => {
          var item = element.find('.myframe-selectable-item:first')
          item.trigger('click');
        })
      },
      controller: "myframeMenuCtrl"
    }
  })