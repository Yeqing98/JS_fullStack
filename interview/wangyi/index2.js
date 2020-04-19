var name = 'window';
var person = {
    name: 'person',
}
var doSth = function(){
    console.log(this.name);
    return function(){
        console.log('return:');
    }
}
var Student = {
    name: '若川',
    doSth: doSth,
}

doSth()

Student.doSth.call(person)