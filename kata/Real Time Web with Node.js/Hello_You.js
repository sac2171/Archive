var http = require('http');

http.createServer(function(request,response){
	
	//Give the response a 200 (successful) status header
	response.writeHead(200);
	
	//Write a message to the response body in the form
	//Hello, this is <your name here.>
	response.write("Hello, this is Shane.");

	//Tell the response to end so the client knows
	//it has recieved all data.
	response.end();
	
});