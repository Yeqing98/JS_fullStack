function information({name,sex,money,birthday,color,likes,follow,age}) {
    return `${name} ${sex} ${money} ${birthday} ${color} ${likes} ${follow} ${age}`
}

let user = {name: '李丹', sex: '女', money: '一个亿', birthday: '5-22', color: '绿', likes: 'kanju', follow: 'zjl', age: '16'};
// let name = name;
information(user)