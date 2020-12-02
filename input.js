//setup user input via stdin
const setupInput = () => {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('uft8');
  stdin.resume();
  //when the client receives 'data' from the server, we reference the callback handleUserInput
  //to log valid keystrokes
  stdin.on('data', handleUserInput)
  return stdin;
}

const handleUserInput = ('data', (keyInput) => {
    if (keyInput === '\u0003') {
      process.exit();
    }
});

module.exports = { setupInput }