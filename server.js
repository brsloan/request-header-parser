'use strict';

var http = require('http');

var server = http.createServer(function(req,res){
	var user = { ipaddress: req.headers['x-forwarded-for'],
				language: req.headers['accept-language'].split(',')[0],
				software: req.headers['user-agent'].match(/\(([^)]+)\)/)[1]
	};
	
    res.writeHead(200,{ 'Content-Type': 'application/json' });
	res.end(JSON.stringify(user));
});

var port = process.env.PORT || 8080;
server.listen(port,  function () {
	console.log('Node.js listening on port ' + port + '...');
});