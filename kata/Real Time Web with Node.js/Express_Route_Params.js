var express = require('express');

var app = express.createServer();

var quotes = {
	//some quotes
}

app.get('/quotes/:name',function(request, response){
	var name = request.params.name;
	response.write(quotes.name);
	response.end();
});

options ={
	protocol: "http:",
	host:'search.twitter.com',
	pathname:'search.json',
	query:{
		q:"codeschool"
	}
}

searchURL = url.format(options);

app.listen(8080);
