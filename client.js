const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: 'localhost',// IP address here,
    port: '50541'// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("data", (data) => {
    // code that console logs data when data is received
    console.log(data);
  });

  // const moveUp = () => {conn.write("Move: up")}; // callback function made for setTimeout & setInterval

  conn.on("connect", () => {
    // prints out when successfully connected
    console.log("Successfully connected to game server");

    conn.write("Name: BBB");
    // conn.write("Move: up");      // Moves the snake up by one square
    // setTimeout(moveUp, 1500);    // Moves the snake up by one, after 1.5 second
    // setInterval(moveUp, 1500);   // Moves the snake up by one every 1.5 seconds
  })

  return conn;
};

module.exports = connect; 