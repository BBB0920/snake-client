const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',// IP address here,
    port: '50541'// PORT number here,
  });

  conn.on("connect", () => {
    // prints out when successfully connected
    console.log("Successfully connected to game server");
    conn.write("Name: BBB");
  })

  conn.on("data", () => {
    // code that does something when the connection is first established
    console.log('data received');
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  return conn;
};

module.exports = connect; 