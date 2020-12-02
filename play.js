//IP: 192.168.1.67 || "localhost" PORT: 50541
const net = require('net');
//call connect module from client.js
const { connect } = require('./client');
console.log(`Connecting ...`);
connect();
