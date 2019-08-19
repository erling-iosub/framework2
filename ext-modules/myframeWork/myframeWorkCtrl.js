`use strict`
myframeWork.controller(`myframeWorkCtrl`,
  function ($scope, $window, $timeout, $rootScope) {
    $scope.isMenuVisible = true;
    $scope.isMenuButtonVisible = true;

    
    $scope.$on(`myframe-menu-item-selected-event`,
      (evt, data) => {
        $scope.routeString = data.route

        checkWidth()
        broadcastMenuState()
      })

    $scope.menuButtonClicked = () => {
      $scope.isMenuVisible = !$scope.isMenuVisible;
      // need to pass this value to its child (myframeWorkCtrl)
      broadcastMenuState();
      console.log("isMenuVisible", $scope.isMenuVisible)
      //$scope.$apply();
    }

    var broadcastMenuState = () => {
      $rootScope.$broadcast("myframeMenu-show", {
        show: $scope.isMenuVisible
      })
    }


    // to hide the menu button when the width of the page is big enough to 
    //show the menu

    // wrap window as a jquery object and call the on function to 
    //handle an event
    // myframework is a namespace used later on to destroy the menu button
    $($window).on('resize.myframework', () => {
      $scope.$apply(() => {
        checkWidth();

        // on resize broadcast the isMenuVisible State
        broadcastMenuState();
      })
    })

    // let off the resize event after the checkWidth function is called and 
    // the var s are set
    $($window).on("destroy", () => {
      $($window).off("resize.myframework")
    })

    var checkWidth = () => {
      // $window.innerWidth() is not good enough. 
      // 
      var width = Math.max($($window).width(), $window.innerWidth)
      $scope.isMenuVisible = (width >= 768);
      $scope.isMenuButtonVisible = !$scope.isMenuVisible;
    }

    // immediately (0 milliseconds) after the digest cicle call the checkWidth function 
    // to check the width of the window and 
    // set the proper boolean value for isMenuButtonVisible
    $timeout(() => {
      checkWidth()
    }, 0)
  })