var http = require("http");
const routeHandler = require("./routes");

// function requestLister(request,response){
//     response.end("sfsd")
// }

var server = http.createServer(routeHandler);

server.listen(5000);

console.log("Node js server at port 3000");


