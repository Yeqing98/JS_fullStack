function total(l,r) {
    let start = 1;
    let other = 1;
    const end = r;
    let arr = []
        num = 0
    while(other <= end) {
        arr.push(start);
        other = other + 1
        let string = start + other.toString();
        start = Number(string);
    }
    for(let i = l; i < arr.length; i++) {
        if(arr[i] % 3 == 0) {
            num++
        }
    }
    console.log(arr)
    return num
}

console.log(total(10,20))