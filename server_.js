const http = require('http');
const fs=require('fs');
const server=http.createServer((req,res)=>{
    //request body
    console.log("request made");
    console.log(req.url);
    //localhost:3000/home => output will be: /home
    console.log(req.method); 
    //method=GET,POST,PUT ETC
    //response body
    res.setHeader('Content-Type','text/html');
    let path ='./docs/';

    if(req.url == '/home' || req.url == '/'){
        path+= 'index.html';

    }
    else if(req.url == '/join'){
        path+='join.html';

    }
    else if(req.url  == '/about'){
        path+='about.html';
    }
    else{
        path+='notfound.html';
        res.statusCode=404;
    }

    fs.readFile(path,(err,data)=>{
        if(err){
            console.log(err.message);
            res.end();
        }
        else{
            res.write(data);
            res.end();
            //if we give response for just one data means we can use this method
            //res.end(data);
        }
    })
    //res.write('<h1>Subscribe to my app</h1>');
    //res.end();
});
server.listen(3000,'localhost',()=>{
    console.log("server listening");
})