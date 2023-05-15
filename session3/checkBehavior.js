console.log("First Statement")

console.log("Second Statement")
var res=0;
for(var i=0;i<100000000; i++){
    res += i;
}
console.log(res)
console.log("Third Statement")

var x = setInterval(function(){
    console.log("Interval Statement")
},3000);

setInterval(function(){
    console.log("BYE BYE")
},2000);

clearInterval(x)