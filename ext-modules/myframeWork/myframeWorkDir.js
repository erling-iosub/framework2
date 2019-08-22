`use strict`
myframeWork.directive(`myframeWorkDir`,
  function () {
    return {
      restrict: `E`,
      transclude: true,
      scope:{
        title: "@",
        subtitle: "@",
        iconFile: "@"
      },
      controller: `myframeWorkCtrl`,
      templateUrl:`/ext-modules/myframeWork/myframeWorkTemplate.html`
    };
  });