/*
 * Filename: /Users/tonymedrano/Desktop/zeromq-app/app.js
 * Path: /Users/tonymedrano/Desktop/zeromq-app
 * Created Date: Monday, March 25th 2019, 1:39:37 pm
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 Tony Medrano
 */

//. const producer = require('./producer/producer');
//. const pubber = require('./publisher/pubber');

const app = require('express')();
const express = require('express');
const http = require('http').Server(app);
const io = require('socket.io')(http);
const chalk = require('chalk');

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));

const error = chalk.bold.red;
const warning = chalk.keyword('orange');
const success = chalk.keyword('yellow');

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/index.html`);
});

io.emit('some event', {
    for: 'everyone'
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log(success('message: %s'), msg);
    });
});

io.on('connection', socket => {
    socket.on('chat message', msg => {
        io.emit('chat message', msg);
    });
})

http.listen(port, () => {
    console.log(success('listening on *:%s'), port);
});