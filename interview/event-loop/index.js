console.log(1);

setTimeout(() => {
    console.log(2);
}, 0)

const A = function() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(3);
            resolve();
        }, 0)
    })
}

A()
.then(() => {
    console.log(4);
})

console.log(5);