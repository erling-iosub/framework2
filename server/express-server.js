`use strict`
const express = require(`express`)
const path = require(`path`)

const server = express();
const rootPath = path.normalize(__dirname+"/../app")

server.use(express.static(rootPath));

server.listen(8000,()=>{
  console.log("server on port 8000")
})