const num = ['c','a','z','y'];

const nums2 = [1,10,2,28];
console.log(num.sort());
console.log(nums2.sort(function(a,b){
    // console.log(a,b,'--------');

    return a - b ;
}))
