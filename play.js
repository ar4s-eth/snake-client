//IP: 192.168.1.67 || "localhost" PORT: 50541
const net = require('net');
//call connect module from client.js
const { connect } = require('./client.js');
console.log(`Connecting ...`);

connect()

//setup for user input via stdin

const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('uft8');
  stdin.resume();
  stdin.on('data', handleUserInput)
  return stdin;
}

const handleUserInput = ('data', (keyInput) => {
    if (keyInput === '\u0003') {
      process.exit();
    }
});