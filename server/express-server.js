`use strict`
const express = require(`express`)
var request = require("request");
const path = require(`path`)
const bodyParser = require("body-parser")

const server = express();

const appPath = path.normalize(__dirname+"/../app")
const externalResPath = path.normalize(__dirname+"/../")


server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json());

server.use(express.static(appPath));
server.use(express.static(externalResPath));

//proxy for weather App
server.get('/weather', function (req, res) {
  request(`https://api.darksky.net/forecast/826e6c1a03c8a1bc134b1956748b1021/44.4268,26.1025?units=si&exclude=minutely,daily,hourly`,
    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        res.send(body)
        res.end();
      }
    });
});

//proxy for Exchange App
server.get('/exchange', function (req, res) {
  request(`https://api.exchangeratesapi.io/latest`,
    function (error, response, body) {
      if (!error && response.statusCode === 200) {
        res.send(body)
        res.end();
      }
    });
});


server.listen(8000,()=>{
  console.log(appPath)
  console.log(externalResPath)
  console.log("server on port 8000")
})