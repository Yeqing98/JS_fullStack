
function A1() {
    setTimeout(() => {
        let a1 = 10
        return a1
    }, 1000)
}



function A2() {
    setTimeout(() => {
        let a2 = 20
        return a2
    }, 1000)
    
}

function B(a, b) {
    return a + b;
}



async function request() {
    let a1 = await A1()
    let a2 = await A2()
    let b = await B(a1, a2)
    console.log(b)
}
// request()
// console.log(request())