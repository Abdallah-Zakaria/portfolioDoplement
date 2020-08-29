"use strict"

const express = require("express");

const server = express();

server.use(express.static("./public"))

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log("hello")
})
server.get("/test", (request , response )=>{
    response.send("<h1>you are live</h1>")
})

server.get("/help",(request,response)=> {
    let help = [
        {"info": "hello"},
        {"problem": "yes"}
    ]
    response.json(help)
})