const net = require('net');
const { IP, PORT, playerName } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on("connect", () => {
    console.log("Successfully connected!!");  // Requirement 1
    console.log(`Name: ${playerName}`)
    conn.write('Name: LVJ'); // Requirement 3 - student might have removed this later. Can still pass if everything still works
    conn.write('Move: up'); // Requirement 4 - student might have removed this later. Can still pass if everything still works
  });
  conn.on('data', (data) => {
    console.log('message from server: ', data);
  });

  return conn;
};

module.exports = { connect };