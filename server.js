const axios = require("axios").default;
const express = require("express");
const fs = require("fs");
require("dotenv").config();
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "/public")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('.html', require('ejs').renderFile);

const api_key = process.env.API;

app.get("/", (req, res) => {
    res.render("index.html");
});

app.listen(process.env.PORTA, () => {
    console.log("server avviato");
});

app.post("/search", (req, res) => {
    var s = req.body.search;
    //console.log(s);
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${s},it&appid=${api_key}&units=metric&lang=it`)
        .then(info => {
            //console.log(info);
            return res.render('search',{weather:info.data,error:false});
        })
        .catch(error => {
            console.log(error.message);
            res.render('search',{weather:null,error:true})
        });
});