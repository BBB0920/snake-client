// Stores the active TCP connection object.
let connection;

const setupInput = function (conn) {
  connection = conn;

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  
  return stdin;
};

const handleUserInput = function (key) {
  // your code here

  if (key === '\u0003') {
    process.exit();
  }
  if (key === 'w') {
    // console.log('w was pressed');
    connection.write('Move: up');
  }
  if (key === 'a') {
    // console.log('a was pressed');
    connection.write('Move: left');
  }
  if (key === 's') {
    // console.log('s was pressed');
    connection.write('Move: down');
  }
  if (key === 'd') {
    // console.log('d was pressed');
    connection.write('Move: right');
  }
  if (key === '`') {
    connection.write('Say: Hello!');
  }
};

module.exports = setupInput;