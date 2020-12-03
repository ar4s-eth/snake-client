let connection;

//setup user input via stdin
const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  //when the client receives 'data' from the server, we reference the callback handleUserInput
  //to log valid keystrokes
  stdin.on('data', handleUserInput)
  return stdin;
}

const handleUserInput = ('data', (keyInput) => {
    if (keyInput === '\u0003') {
      process.exit();
    } else if (keyInput === 'w') {
      connection.write('Move: up')
    } else if (keyInput === 's') {
      connection.write('Move: down')
    } else if (keyInput === 'a') {
      connection.write('Move: left')
    } else if (keyInput === 'd') {
      connection.write('Move: right')
    } else if (keyInput === 'o') {
      connection.write('Say: OMG')
    }
});

module.exports = { setupInput }