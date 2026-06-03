const amount = 12
if(amount <10){
    console.log('small number')
}
else{
    console.log('large number')
}
console.log('its my first node problem')
//while loop
let i=0;
while(i<5){
    console.log(i);
    i++;
}
//call function
function greet(){
    console.log("hello");
}
greet();
//parameters
function greet(name){
    console.log("hello" +name);

}
greet("sem");
//return
function add(a,b=6){

    return a+b;
} 
