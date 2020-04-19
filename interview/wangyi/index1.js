function gongyue(a, b) {
    // let a = a;
    // let b = b;
    let Agongyue = [];
    let Bgongyue = [];
    let together = [];
    if(a < b) {
        for(let i = 0; i <= a; i++) {
            if(a % i == 0) {
                Agongyue.push(i)
            }
            if(b % i == 0) {
                Bgongyue.push(i)
            }
        }
        for(let j of Agongyue) {
            if(Bgongyue.indexOf(j) !== -1) {
                together.push(j)
            }
        }
    } else {
        for(let i = 0; i <= b; i++) {
            if(a % i == 0) {
                Agongyue.push(i)
            }
            if(b % i == 0) {
                Bgongyue.push(i)
            }
        }
        for(let j of Bgongyue) {
            if(Agongyue.indexOf(j) !== -1) {
                together.push(j)
            }
        }
    }
    return together.pop()
}
console.log(gongyue(4,6))