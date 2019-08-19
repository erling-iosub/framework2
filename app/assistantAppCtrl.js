assistant.controller(`assistantCtrl`,
  function assistantCtrl($scope, getDataService) {
    $scope.clock = getDataService.getTime();
    $scope.day = getDataService.getDay();

    $scope.money;
    $scope.weather;
    $scope.weatherTime;

    getDataService.getMoney().then( (resolve) => {
      $scope.money = resolve;
      $scope.$apply();
      
      console.log(`money `, $scope.money)
    }, (error)=>{
      reject(error)
    })

    getDataService.getWeather().then( (resolve) => {
      $scope.weather = resolve;
      $scope.weatherTime = (Date($scope.weather.timetime).split(" ")[4]).split(":")[0] + ":" +
        (Date($scope.weather.timetime).split(" ")[4]).split(":")[1]
      $scope.$apply();

      console.log(`weather `, $scope.weather)
      console.log(`weatherTime `, $scope.weatherTime)
    }, (error)=>{
      reject(error)
    })

    console.log(`clock `, $scope.clock)
    console.log(`day `, $scope.day)
  })