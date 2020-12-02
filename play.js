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

  //add event handler 
  conn.on('data', (data) => {
    console.log(`Server says: `, data);
  })
  
  return conn;
}

console.log(`Connecting ... `);
connect();