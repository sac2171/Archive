var http = require('http');
var fs = require('fs');


// Read a File into a Server without blocking
http.createServer(function(request,response){
	response.writeHead(200);
	fs.readFile('index.html',function(err,contents){
		response.write(contents);
		response.end();
	});
	
}).listen(8080);

