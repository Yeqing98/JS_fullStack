// 数组是最廉价的数据结构
let enc_qq=[6,3,1,7,5,8,9,2,4],
  qq=[],
  head = 0 ,    //对首指针，要移除的元素位置
  tail = 9;     //队尾指针，要加入的元素位置
// 第一个数移除
while(head<tail)
{
qq.push(enc_qq[head]);
head++;
enc_qq[tail]=enc_qq[head];
tail++;
head++;
}
// enc_qq.shift();
console.log(typeof qq);
// enc_qq.shift();     删除第一位
// console.log(enc_qq);
// enc_qq.unshift(0);    在首位增加一个数字
// console.log(enc_qq);
// enc_qq.pop();       删除末尾最后一位
// console.log(enc_qq);
// enc_qq.push(0);        在末尾增加一位数字
// console.log(enc_qq);
// console.log(enc_qq.length,enc_qq[0]);