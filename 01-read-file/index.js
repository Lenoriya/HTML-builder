#!javascript
// Load the fs (filesystem) module.
var fs = require('fs');
// Read the contents of the file into memory.
fs.readFile('01-read-file/text.txt', function (err, logData) {
// If an error occurred, throwing it will
  // display the exception and kill our app.
  if (err) throw err;
// logData is a Buffer, convert to string.
  var text = logData.toString();

console.log(text);

});