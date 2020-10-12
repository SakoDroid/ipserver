const ht = require("http");
const url = require("url");

const server = ht.createServer((rq,rp)=>{
    let r = url.parse(rq.url).pathname;
    console.log("request for " + r + " received!");
    if (r === "/"){
        rp.writeHead(200,{"content-type" : "text/plain"});
        rp.write(rq.socket.remoteAddress.split(":")[3]);
    }else{
        rp.writeHead(404,{"content-type" : "text/HTML"});
        rp.write("<html><head><title>Not found!</title></head><body><h1>404 NOT FOUND!</h1></body></html>");
    }
    rp.end();
});
server.listen(8081);