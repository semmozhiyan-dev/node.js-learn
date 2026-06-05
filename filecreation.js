const fs = require('fs');
// if file exist means it return true if not false  statement will run and then if statement will run and create a folder docs
//mkdir-> make directory
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
//these code tells to read a file which is existed
if(! fs.existsSync('./docs/file.txt')){

fs.readFile('./docs/file.txt',(err,data)=>{
    if(err){
        console.log(err.message);


    }else{
        console.log(data.toString());
    }
}

)}
//to delete a file  in a folder
if(fs.existsSync('./docs/file.txt')){
    fs.unlink('./docs/file.txt',(err)=>{
        if(err){
            console.log(err.message);
        }
        else{
            console.log('file deleted');
        }
    }
)
}
//to delete a folder
if(fs.existsSync('./docs')){
fs.rmdir('./docs',(err)=>{
    if(err){
        console.log(err.message);
    }else{
        console.log('folder deleted');
    }
}
)
}
