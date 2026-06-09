const http = require('http');
const server=http.createServer((req,res)=>{
    //request body
    console.log("request made");
    console.log(req.url);
    //localhost:3000/home => output will be: /home
    console.log(req.method); 
    //method=GET,POST,PUT ETC
    //response body
    res.setHeader('Content-Type','text/html');
    res.write('<h1>Subscribe to my app</h1>');
    res.end();
});
server.listen(3000,'localhost',()=>{
    console.log("server listening");
})