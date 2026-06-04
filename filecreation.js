const fs = require('fs');
// if file exist means it return true if not false  statement will run and then if statement will run and create a folder docs
if(! fs.existsSync('./docs')){
fs.mkdir('./docs',(err)=>
{
    if(err){
        console.log(err.message);
    }
    console.log('Folder created');
})
}
//this  step is used to creat a file into  a folder docs 
fs.writeFile('./docs/file.txt','hi sem',(err)=>{
    if(err){
        console.log(err.message);
    }
    console.log('file created and data was written');
}
)