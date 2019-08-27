var fs = require('fs');

module.exports = {
 // writeFile function with filename, content and callback function
 moduleSaveFile: saveFile = (fileName, fileContent, callback) => {
   fs.writeFile(fileName, fileContent, function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
    callback();
  })
  }
}