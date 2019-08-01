const a = {
    b: 1
};
function b() {
    console.log('a的值发生改变')
}
function bindData() {
    Object.keys(a).map(key => {
        let v = a[key];
        Object.defineProperty(a, key, {
            get: function() {
                console.log('你正在读取a里面的值');
                return v
            },
            set: function(newA) {
                v = newA;
                b()
            }
        })
    })
}
bindData();
a.b = 2;
console.log(a.b);