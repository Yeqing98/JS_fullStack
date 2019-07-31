// 无序数组中 找出第K大数组

// 排序
// [K]
// [1,4,9,2,6,10]

function findKthLargest(arr, k) {
    return arr.sort((a, b) => b - a)[k-1]
}

console.log(findKthLargest([1,4,9,2,6,10], 2))