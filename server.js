const express = require("express");
const fs = require("fs");
require("dotenv").config();
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname,"/public")));

app.get("/",(req,res) => {
    res.sendFile(path.join(__dirname,"/views/index.html"));
});

app.listen(process.env.PORTA,() =>{
    console.log("server avviato");
});