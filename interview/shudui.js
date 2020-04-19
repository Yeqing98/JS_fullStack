function shudui (n, k) {
    let x,y
    let arr = []
    for(let i = 1; i <= n; i++) {
        x = i
        for(let j = 1; j <= n; j++) {
            if(x % j >= k) {
                y = j
                arr.push({x,y})
            }
        }
    }
    return arr.length
}

console.log(shudui(88856,768))