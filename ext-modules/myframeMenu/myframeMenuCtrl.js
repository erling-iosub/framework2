myframeMenu.controller(`myframeMenuCtrl`,
  function myframeMenuCtrl($scope, $rootScope) {
    
    this.getActiveElement = function(){
      return $scope.activeElement
      
    };

    this.setActiveElement = (element) => {
      $scope.activeElement = element
      console.log($scope.activeElement)
    };
    this.setRoute = (route) => {
      $rootScope.$broadcast(`myframe-menu-item-selected-event`,
        { route: route }
      )
    };

  });