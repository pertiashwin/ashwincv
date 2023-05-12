var odd = [1,3,5,7,9,11]
var even = [2,4,6,8,10,12]

var arr = odd.concat(even)
// console.log(arr)

//Spread Operator
var combined = [...odd, 'A', ...even]
console.log(combined)
console.log(...odd)

// 1,2,3,4,5,6,7,8,9,10,11,12
// let a = odd[0]
// let b = odd[1]
// let c = odd[2]
// let d = odd[3]
// let e = odd[4]

// let[a,b,c,d,e] = odd

// for selective destructuring
let[a,b,,,f] = odd
console.log(a,b)
// 1,2,3,4,5

let person = {
    name: "Amit",
    country: "Nigeria",
    job: "Developer"
};
// Destructure an Object
let {name, country, job} = person
console.log(name, country, job)
