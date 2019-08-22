myframeMenu.directive(`myframeDashboardDir`,
  () => {
    return {
      restrict: `E`,
      transclude: true,
      templateUrl:`/ext-modules/myframeDashboard/myframeDashboardTemplate.html`,
      scope: {
        
      },
      link: function (scope,element,attr) {

      },
      controller:"myframeMenuCtrl"
    }
  })