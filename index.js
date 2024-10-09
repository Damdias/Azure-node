const http = require("http");

const server = http.createServer((request,response)=>{
    response.writeHead(200,{"content-type":"text/plain"});
    response.end("Hello world! It's ");
})


const port = process.env.PORT  || 1337;
server.listen(port);

console.log("Server running http://localhost:%d",port);