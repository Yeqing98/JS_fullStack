// 位移运算符 （右移）
// 二进制位 0000 1011
// 右移一位 0000 0101
// console.log(11 >> 1)

// 利用位移运算，向左移 （*2），向右移（/2）


// 猛哥给蜗牛买香蕉， 买了  
// N piles of bananas       没挂香蕉上的香蕉数量不一样
// 使用数组  []
// [3,6,7,11],  H 小时内吃完  一小时吃几根香蕉
// 一小时内吃mid根香蕉，  一次只能吃一把，  一小时最少吃几根， 可以在H小时内吃完

/**
 * @desishc 最少吃香蕉的速度，在规定时间内吃完
 * @param {number[]} piles 
 * @param {number} H
 * @param {number}
 */
function minEatingSpeed(piles,H){
    let lo = 1,
        hi = Math.max(...piles);
    // 二分查找  一次丢一半
    while(lo <= hi){
        // lo++
        let mid = lo + ((hi - lo) >> 1);
        if (canEatAllBananas(piles,H,mid)){
            hi = mid - 1;
        }else{
            // 没有吃完  怎么吃完？
            // 小的值没有意义了，
            lo = mid + 1;
        }
    }
    return lo;
}
/**
 * @desc  判断能否吃完香蕉
 * @param {number[]} piles 
 * @param {number} H 
 * @param {number} mid 
 * @return {boolean}
 */
function canEatAllBananas(piles,H,mid){ 
    let h = 0;
    for (let pile of piles) {
        h += Math.ceil(pile / mid);
    }
    return h <= H;
}

let piles = [3,6,7,11];
console.log(canEatAllBananas(piles,8,4));
console.log(minEatingSpeed([3,6,7,11],8));

// - 吃完香蕉是我们的目标
// H 小时内吃完，
// - 最小的一个数