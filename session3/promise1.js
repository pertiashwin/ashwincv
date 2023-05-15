// Promise

var sayHi = () => {
    return new Promise((resolve, reject) => {
        let res = true;
        if (res) {
            resolve('yes promises fulfilled');
            } 
        else {
                reject('I failed my Promise');
            }
        });
        // setTimeout(() => {
        //     console.log('Hi');
        //     resolve();
        //     }, 1000);
        //     });
};

// console.log(sayHi())
sayHi().then(res=>console.log(res)).catch(err=>console.log(err))

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))