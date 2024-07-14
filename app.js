var http = require("http");
var fs = require("fs");
// function requestLister(request,response){
//     response.end("sfsd")
// }

var server = http.createServer((request, response) => {
  //   console.log(request.url, request.method);
  //   console.log(response.statusCode);
  // response.setHeader("Content-Type","text/html");
  // response.statusCode=200;
  // response.statusMessage= "OKAY"

  // response.write("<h1>Ana Sayfa</h1>")
  // response.write("<a>Ürünler</a>")

  if (request.url == "/") {
    fs.readFile("index.html", (error, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  } else if (request.url == "/blogs") {
    fs.readFile("blogs.html", (error, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  }
  else if (request.url == "/create" && request.method == "POST") {
    const data = [];
    request.on("data",(chunck)=>{
       
        data.push(chunck);
    })

    request.on("end",()=>{
        const result = Buffer.concat(data).toString();
        const parsedData = result.split("=")[1];
        fs.appendFile("blogs.txt", parsedData, (err) => {
            if (err) {
              console.log(err);
            } else {
              response.statusCode = 302;
              response.setHeader("Location","/")
              response.end();
            }
          });
    })

    
  } 
  else if (request.url == "/create") {
    fs.readFile("create.html", (error, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  }  else {
    fs.readFile("404.html", (error, html) => {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(html);
      response.end();
    });
  }
});

server.listen(5000);

console.log("Node js server at port 3000");
