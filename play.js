const connect = require('./client.js');

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");

  const handleUserInput = function () {
    // your code here

    stdin.on('data', (key) => {
      if (key === '\u0003') {
        process.exit();
      }
    });
    
  };

  stdin.on("data", handleUserInput);

  stdin.resume();
  return stdin;
};

console.log("Connecting ...");
connect();
setupInput();