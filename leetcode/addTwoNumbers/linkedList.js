// 将数字的每一位 变成一个类   变成ListNode的一个实例
// 既不是字符串， 也不是数值， 而是线性的数据结构 
function ListNode(val) {
    this.val = val;
    // 指针
    this.next = null;
}

let number = 12345678;
let n1 = new ListNode(1);
console.log(n1);
let n2 = new ListNode(2)
n1.next = n2;
let n3 = new ListNode(3)
n2.next = n3;
let n4 = new ListNode(4)
n3.next = n4;

// 遍历链表, travel 一下
let node = n1;
while(node) {
    console.log(node.val);
    node = node.next;
}