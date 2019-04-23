// s 5
// a 3
// b 2
// c 1

let stratigies = {
    'S': function(salary) {
        return salary * 5;
    },
    'A': function(salary) {
        return salary * 3;
    },
    'B': function(salary) {
        return salary * 2;
    },
    'C': function(salary) {
        return salary * 1;
    }
}
function calculate(level, salary) {
    return stratigies[level](salary);
    // if (level === "S"){
    //     return salary * 5;
    // }
    // if (level === "A"){
    //     return salary * 3;
    // }
    // if (level === "B"){
    //     return salary * 2;
    // }
    // if (level === "C"){
    //     return salary * 1;
    // }
}

console.log(calculate('S', 10000));