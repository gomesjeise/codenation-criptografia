const ENDPOINT = 'https://api.codenation.dev/v1/challenge/dev-ps/generate-data?token=728c3d29117f172660ea49f86231d4a86ffc9f6c'

const http = require('https');
var sha1 = require('js-sha1');
var decript = require('../utils/decript');
var createFolder = require('../utils/createfolder');
var saveFile = require('../utils/savefile');

let jsonServer;

http.get(ENDPOINT, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    jsonServer = JSON.parse(data);
    console.log(jsonServer.cifrado);
    jsonServer.decifrado = decript.moduleDecript(jsonServer.cifrado, jsonServer.numero_casas);
    console.log(jsonServer.decifrado);
    
    //Create the sha1 hash
    sha1(jsonServer.decifrado);
    var hash = sha1.create();
    hash.update(jsonServer.decifrado);
    hash.hex();
    jsonServer.resumo_criptografico = hash.hex()
    console.log(jsonServer)
    
    //Save the json file
    saveFile.moduleSaveFile('../file/answer.json', JSON.stringify(jsonServer), sendToServer);
});
}).on("error", (err) => {
  console.log("Error: " + err.message);
});

var fs = require('fs');
const request = require('request');

var sendToServer = () => {
  let formData = {
    
    answer : fs.createReadStream('../file/answer.json')
  };
  request.post('https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=728c3d29117f172660ea49f86231d4a86ffc9f6c'
            , 
            {
              formData: formData
            }, callback);
}

var callback = (err, httpResponse, body) => {
  if (err) {
    return console.error('Post failed:', err);
  }
  console.log('Post successful!  Server responded with:', body);
}






//  var enviar = () => {

//     //POST
//     var FormData = require('form-data');
//     var fs = require('fs');
//     var data = '';
//     var form = new FormData();
//     form.append('answer', fs.createReadStream('../file/answer.json'));
//     console.log("a enviar ");
//     form.
//         submit('https://api.codenation.dev/v1/challenge/dev-ps/submit-solution?token=728c3d29117f172660ea49f86231d4a86ffc9f6c', 
//           function(err, res) {
//               // res – response object (http.IncomingMessage)  //
//               res.on('data', (chunk) => {
//                 data += chunk;
//               });
//               // The whole response has been received. Print out the result.
//               res.on('end', () => {
//                 jsonServer = data;
//                 console.log("enviado1 " + jsonServer);
//               });
//               res.resume(); 
//           });
// }