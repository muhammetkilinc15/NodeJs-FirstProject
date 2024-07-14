var http = require("http");

// function requestLister(request,response){
//     response.end("sfsd")
// }

var server = http.createServer((request, response) => {
  console.log(request.url, request.method);
  console.log(response.statusCode);
  response.end();
});

server.listen(3000);

console.log("Node js server at port 3000");
