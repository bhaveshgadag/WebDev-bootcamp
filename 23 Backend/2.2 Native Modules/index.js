const fs = require("fs");

data = "Hello from blazerx again!";
fs.writeFile('message.txt', data, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
  });

fs.readFile('message.txt', 'utf-8', (err, data) => {
    if (err) throw err;
    console.log(data);
  }); 