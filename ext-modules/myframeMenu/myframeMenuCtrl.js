myframeMenu.controller(`myframeMenuCtrl`,
  function myframeMenuCtrl($scope, $rootScope, $timeout, $window) {

    $scope.showMenu = true;

    this.getActiveElement = function(){
      return $scope.activeElement
      
    };

    this.setActiveElement = (element) => {
      $scope.activeElement = element
      console.log($scope.activeElement)
    };

    // use $broadcast to avoid depending on a particular routing system
    this.setRoute = (route) => {
      $rootScope.$broadcast(`myframe-menu-item-selected-event`,
        { route: route }
      )
    }


    // listen to the data broadcast by myFrameWorkCtrl to know if the menu is 
    // visible or not
    $scope.$on(`myframeMenu-show`, (event,data) => {
      $scope.showMenu = data.show
      console.log("Show Menu myframeMenu ", $scope.showMenu)
    })


  });