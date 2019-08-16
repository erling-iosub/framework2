`use strict`
myframeWork.controller(`myframeWorkCtrl`, 
    function ($scope){
      $scope.$on(`myframe-menu-item-selected-event`,
      (evt, data)=>{
        $scope.routeString = data.route;
      })
  })