const fs = require('fs');
const readStream =fs.createReadStream('./docs/HugeFile.txt');
//
const writeStream =fs.createWriteStream('./docs/copyHugeFile.txt');
//readStream.on('data',(buffer)=>{
    //console.log('\nnew buffer\n');
    //console.log(buffer.toString());
    //writeStream.write('\nnew buffer\n');
    //writeStream.write(buffer);
//});
readStream.pipe(writeStream);