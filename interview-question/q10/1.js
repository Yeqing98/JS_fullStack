function Father() {
    this.colors = ["red", "yellow", "blue"]
}

function Son() {
    this.name = "hanhan"
}

var father = new Father()

Son.prototype = new Father();

var son = new Son()

son.colors.push("black")

var son1 = new Son()

console.log(son1.colors)

console.log(son.colors)