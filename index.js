'use strict';

const events = require('events');
const http = require('http');
const util = require('util');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('database-js-mysql');

let urlencodedParser = bodyParser.urlencoded({ extended: false });
let app = new express();


app.set('view engine', 'ejs');
app.use('/public', express.static('public'));

app.get('/', function(req, res) {
   res.render('index');
});

app.get('/news/:id', function(req, res) {
   res.render('news', {newsId: req.params.id});   
});

app.get('/form', function(req, res) {
   res.render('form');
});

app.post('/form', urlencodedParser, function(req, res) {
   if (!req.body) return res.sendStatus(400);
   console.log(req.body);
   res.render('form');
});

app.listen(3000);
// let Eventw = new events.EventEmitter();

// var server = http.createServer(function(req, res){
//    if (req.url === '/' || req.url === '/main'){
//       res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//       fs.createReadStream('index.html').pipe(res);
//    } else if(req.url === '/about'){
//       res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
//       fs.createReadStream('about.html').pipe(res);
//    } else {
//       res.writeHead(400, {'Content-Type': 'text/html; charset=utf-8'});
//       fs.createReadStream('404.html').pipe(res);
//    }
// });

// server.listen(3000, '127.0.0.1');

// var Holods = function(model) {
//    this.model = model;
// }

// util.inherits(Holods, events.EventEmitter);

/*
   Мы используем синхронное 
   запись и чтение, асинхронная 
   без Sync. Синхронная - 
   обрабатыевается только этот кусок 
   кода, другой не работает, без Sync -  
   весь код интерпритируется сразу
*/ 

// Eventw.on('click', function(nameFile, coding, typeClick, text){
//    switch(typeClick){
//       case 1:
//          console.log(fs.readFileSync(nameFile, coding));
//       break;
//       case 2:
//          fs.writeFileSync(nameFile, text);
//          console.log(fs.readFileSync(nameFile, coding));
//       break;
//    }
// });

// Eventw.emit('click', 'text.txt', 'utf-8', 2, 'Привет другой мир');
// console.log(counter.funct_1([1,3,6,5,3,5,6,4,3]));

// var samsung = new Holods('samsung');
// var simens = new Holods('simens');
// var lg = new Holods('lg');
// var korit = new Holods('korit');

// var holod = [samsung, simens, lg, korit];

// holod.forEach(function(holods){
//    holods.on('speed', function() {
//       console.log(holods.model);
//    });
// });

// samsung.emit('speed');
