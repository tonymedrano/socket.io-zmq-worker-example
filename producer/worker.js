/*
 * Filename: /Users/tonymedrano/Desktop/zeromq-app/zmq/worker.js
 * Path: /Users/tonymedrano/Desktop/zeromq-app
 * Created Date: Monday, March 25th 2019, 1:46:15 pm
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 Tony Medrano
 */


const zmq = require('zeromq');
const sock = zmq.socket('pull');

sock.connect('tcp://127.0.0.1:3000');
console.log('Worker connected to port 3000');

sock.on('message', (msg) => {
    console.log('work: %s', msg.toString());
});