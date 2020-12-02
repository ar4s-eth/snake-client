//IP: 192.168.1.67 || "localhost" PORT: 50541
const net = require('net');
//call connect module from client.js
const { connect } = require('./client.js');
console.log(`Connecting ...`);

connect()
