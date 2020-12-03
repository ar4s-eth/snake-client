
//call connect module from client.js
const { connect } = require('./client.js');
//call setupInput module (which calls to handleUserInput)
const { setupInput } = require('./input.js')

console.log(`Connecting ...`);

// connect() === conn

//setup for user input via stdin
setupInput(connect());