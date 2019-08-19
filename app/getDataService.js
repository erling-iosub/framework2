assistant.factory(`getDataService`,
  function ($http) {
    return {
      getMoney: () => {
        return new Promise((resolve, reject) => {
          $http.get("http://localhost:8000/exchange")
            .then((response) => {
              var exchange = response.data.rates;
              resolve(exchange);
            }, (reason) => {
              //console.log(reason)
              reject(reason)
            })
        })
      },
      getWeather: () => {
        return new Promise((resolve, reject) => {
          $http.get("http://localhost:8000/weather?units=si")
            .then((response) => {
              var weather = response.data.currently;
              resolve(weather);
            }, (reason) => {
              //console.log("error")
              reject(reason)
            })
        })
      },
      getTime: () => {
        var time = new Date().toTimeString();
        var clock = time.split(":")[0] + ":" + time.split(":")[1]
        return clock;
      },
      getDay: () => {
        var dayNumber = new Date().getDay();
        var day;
        switch (dayNumber) {
          case 1:
            day = "Monday";
            break;
          case 2:
            day = "Tuesday";
            break;
          case 3:
            day = "Wednesday";
            break;
          case 4:
            day = "Thursday";
            break;
          case 5:
            day = "Friday";
            break;
          case 6:
            day = "Saturday";
            break;
          case 0:
            day = "Sunday";
            break;
        }
        return day;
      }
    }
  })