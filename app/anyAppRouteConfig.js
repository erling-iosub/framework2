`use strict`

anyApp.config ([`$routeProvider`, ($routeProvider)=>{
  
  var routes = [
    {
      url:'/asd1',
      config: {
        template:'<assistant-home-dir></assistant-home-dir>'
      }
    },
    {
      url:'/asd2',
      config: {
        template:'<assistant-weather-dir></assistant-weather-dir>'
      }
    },
    {
      url:'/asd3',
      config: {
        template:'<assistant-exchange-dir></assistant-exchange-dir>'
      }
    },
    {
      url:'/somevalues/value1',
      config: {
        template:'<assistant-somevalues-dir></assistant-somevalues-dir>'
      }
    },
    {
      url:'/somevalues/value2',
      config: {
        template:'<assistant-somevalues-dir></assistant-somevalues-dir>'
      }
    },
    {
      url:'/somevalues/value3',
      config: {
        template:'<assistant-somevalues-dir></assistant-somevalues-dir>'
      }
    },
  ]

  routes.forEach( (route) => {
    $routeProvider.when(route.url, route.config);
  });
    

}])