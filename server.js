"use strict"

const express = require("express");

const server = express();

server.use(express.static("./public"))

const PORT = procces.env.PORT || 3000;

server.listen(PORT, () => {
    console.log("hello")
})