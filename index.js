const fs = require('fs');
fs.readFile('./files/starter.txt','utf8',(err,data)=>{
    if(err) throw err;
    console.log(data);
    }
)
    //exit on uncaught error
    process.on('uncaughtException',err=>{
        console.error('the uncaught error was identified:${err}');
        process.exit(1);
    })
