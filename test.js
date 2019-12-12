var http = require('http');


http.createServer((req,res)=>{
res.end('welcome code works');
}).listen(3000);
