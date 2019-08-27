var http = require('http');

var server = http.createServer(
    function(req, res) {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end('{"text":"Hello world"}\n');
});
var port = 3001
server.listen(port, function() {
    console.log('Server is running at ' + port)
});
