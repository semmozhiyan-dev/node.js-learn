//express
const exp = require('express');

const app =exp();

app .listen(3000);

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