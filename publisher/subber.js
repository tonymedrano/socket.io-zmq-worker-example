/*
 * Filename: /Users/tonymedrano/Desktop/zeromq-app/publisher/subber.js
 * Path: /Users/tonymedrano/Desktop/zeromq-app
 * Created Date: Monday, March 25th 2019, 1:55:46 pm
 * Author: tonymedrano
 * 
 * Copyright (c) 2019 Tony Medrano
 */


const zmq = require('zeromq');
const sock = zmq.socket('sub');

sock.connect('tcp://127.0.0.1:3000');
sock.subscribe('kitty cats');
console.log('Subscriber connected to port 3000');

sock.on('message', (topic, message) => {
    console.log('received a message related to:', topic, 'containing message:', message);
});