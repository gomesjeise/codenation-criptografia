var fs = require('fs')

let callbackReadFile = (err, data) => {
    console.log(data);
}

fs.readFile('text/test.txt', 'utf8', callbackReadFile);