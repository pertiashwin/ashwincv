function add(x,y){
    return x + y;
}


let add1 = x => x*x;

console.log(add1(5))
var names = ["john", "Peter", "Parker"]
var greeting = n => n.length

// let lengths = names.map((i) => i.length)

let lengths = names.map((i) => {
    return i.length
});

names.map((i) => {
    return i.length
});

console.log(lengths)

// for(var i=0;i<=names.length;i++){
// console.log(names[i].length)
// }