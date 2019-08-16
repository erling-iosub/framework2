`use strict`
const express = require(`express`)
const path = require(`path`)
const bodyParser = require("body-parser")

const server = express();
const appPath = path.normalize(__dirname+"/../app")
const externalResPath = path.normalize(__dirname+"/../")

server.use(express.static(appPath));
server.use(express.static(externalResPath));


server.listen(8000,()=>{
  console.log(appPath)
  console.log(externalResPath)
  console.log("server on port 8000")
})