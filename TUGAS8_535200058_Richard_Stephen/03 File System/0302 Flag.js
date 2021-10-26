var fs = require("fs");

// Asynchronous - Opening File
console.log("Going to open file!");
fs.open("input.txt", "r+", function (err, data) {
  if (err) {
    return console.error(err);
  }
  console.log("FIle opened successfully");
});
