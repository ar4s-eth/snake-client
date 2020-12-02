//IP: 192.168.1.67 || "localhost" PORT: 50541
const net = require('net');

//establish a connection with the game server
const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  //intepret incoming data as text
  conn.setEncoding('utf8');

  //add event handler for a successful connection
  conn.on('data', (data) => {
    console.log(`Server says: `, data);
  })

  //connect event triggers a message to the client
  conn.on('connect', () => {
    conn.write('Name: ASH');
    console.log(`Ash has connected `)

  //send client name to server
  // conn.on('name', (name) => {
  //   console.log(`Name: ASH`, name);
  // })

  });
  
  return conn;
}

// connect();

module.exports = { connect };