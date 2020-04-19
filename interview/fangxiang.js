var a = readline()
function fangxiang(times, arr) {
    let left = 0
        right = 0
        times = 0
        arrs = arr.split
    for(let i of arrs) {
        if(i === "L") {
            left = left + 1
        } else {
            right = right + 1
        }
    }
    if(left < right) {
        times = right - left
        let time = times % 4
        if(time == 1) {
            return "E"
        } else if(time == 2) {
            return "S"
        } else {
            return "W"
        }
    } else if(right < left) {
        times = left - right
        let time = times % 4
        if(time == 1) {
            return "W"
        } else if(time == 2) {
            return "S"
        } else {
            return "E"
        }
    } else {
        return "N"
    }
}

console.log(fangxiang(a[0], a[1]))