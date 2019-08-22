`use strict`
myframeWork.controller(`myframeWorkCtrl`,
  function ($scope, $window, $timeout, $rootScope, $location) {


    $scope.isMenuVisible = true;
    $scope.isMenuButtonVisible = true;
    $scope.isMenuVertical = true;


    $scope.menuButtonClicked = () => {
      $scope.isMenuVisible = !$scope.isMenuVisible;
      broadcastMenuState();
    }

    var broadcastMenuState = () => {
      $rootScope.$broadcast("myframeMenu-show", {
        show: $scope.isMenuVisible,
        isVertical: $scope.isMenuVertical,
        allowHorizontalToggle: !$scope.isMenuButtonVisible
      })
    }

    $($window).on('resize.myframework', () => {
      $scope.$apply( () => {
        checkWidth();
        broadcastMenuState();
      })
    })

    $($window).on("destroy", () => {
      $($window).off("resize.myframework")
    })

    var checkWidth = () => {
      var width = Math.max($($window).width(), $window.innerWidth)
      $scope.isMenuVisible = (width >= 768);
      $scope.isMenuButtonVisible = !$scope.isMenuVisible;
    }


    $scope.$on(`myframe-menu-item-selected-event`,
      (evt, data) => {
        $scope.routeString = data.route;

        //
        $location.path(data.route);

        checkWidth();
        broadcastMenuState();
      })

    $scope.$on(`myframe-menu-toggle-orientation`,
      (evt, data) => {
        $scope.isMenuVertical = data.isMenuVertical;
      })

    // after the digest cicle call the checkWidth function 
    // to set the proper boolean value for isMenuButtonVisible
    $timeout(() => {
      checkWidth();
    }, 0)
  })