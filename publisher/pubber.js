/*
 * Filename: /Users/tonymedrano/Desktop/zeromq-app/publisher/pubber.js
 * Path: /Users/tonymedrano/Desktop/zeromq-app
 * Created Date: Monday, March 25th 2019, 1:54:52 pm
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 Tony Medrano
 */


const zmq = require('zeromq');
const sock = zmq.socket('pub');

sock.bindSync('tcp://127.0.0.1:3000');
console.log('Publisher bound to port 3000');

setInterval(() => {
    console.log('sending a multipart message envelope');
    sock.send(['kitty cats', 'meow!']);
}, 500);