/*
 * Filename: /Users/tonymedrano/Desktop/zeromq-app/zmq/producer.js
 * Path: /Users/tonymedrano/Desktop/zeromq-app
 * Created Date: Monday, March 25th 2019, 1:45:18 pm
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 Tony Medrano
 */


const zmq = require('zeromq');
const sock = zmq.socket('push');

sock.bindSync('tcp://127.0.0.1:3000');
console.log('Producer bound to port 3000');

setInterval(() => {
    console.log('sending work');
    sock.send('some work');
}, 500);