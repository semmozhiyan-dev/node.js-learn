//express
const exp = require('express');
const morgan = require('morgan');
const app =exp();

app.listen(3000);

app.use(morgan('dev'));

//middleware
//app.use((req,res,next)=>{
    //console.log('request received 1');
    //console.log(req.host);
    //console.log(req.path);
    //console.log(req.method);
    //next();// this is used to execute next middleware
//})

//app.use((req,res,next)=>{
    //console.log('request received 2');
    //next();
//})

app.get('/',(req,res)=>{
    res.sendFile('./docs/index.html', {root: __dirname});

})
app.get('/about',(req,res)=>{
        res.sendFile('./docs/about.html', {root: __dirname});
})

app.get('/join',(req,res)=>{
        res.sendFile('./docs/join.html', {root: __dirname});
})

//to redirect to another page 
app.get('/joinus',(req,res)=>{
    res.redirect('/join');
})
//app.use is a middleware 
app.use((req,res)=>{
    res.sendFile('./docs/notfound.html',{root: __dirname});
})


// define middleware
//browser -> request-> server(middleware)-> response-> browser
