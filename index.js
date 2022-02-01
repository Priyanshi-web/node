var express = require('express');
var mongoose = require('mongoose');
var router = require('./route')
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/movies').then(() => {
    console.log(" students db connected")
    var app = express();

    app.use(bodyParser.urlencoded({extended:false}));
    app.use('/api',router)

    app.get('/', (req,res)=>{
        res.sendFile('index.html',{root:__dirname})
    })
    
    app.listen((process.env.PORT||3000),()=>{
        console.log('server started')
    })
    /*
    app.listen(3000,()=>{
        console.log("server started")
    })*/
}).catch((e)=>{
    console.log(e.toString())
})