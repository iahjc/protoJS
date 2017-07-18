var http = require('http');

var serv = http.createServer(function(req,res){
	res.writeHeader(200,{
		'content-type':'text/html'
	});

	res.write('这是正文');
	res.end();
}).listen(8888);
