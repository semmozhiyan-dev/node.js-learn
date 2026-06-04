const hello =(hname)=>{
    console.log('hello '  + hname);
}
hello('sem');
//timeout function-> it just print the statement after 2 seconds 
setTimeout(()=>
{
    console.log('This is a timeout session');
    //what htis clearinterval function do which means to stop the iteration continuosly we use clearinterval 
    clearInterval(intFunc);
},
5000
);
// setinterval function acts different which means it prints continuously until we stop eg., i given 1000 as time which means every one sec it will print 
const intFunc=setInterval(()=>
{
    console.log('This is an interval function');
},
1000
);
//output -> This is an interval function
//This is an interval function
//This is an interval function
//This is an interval function
//This is a timeout session
