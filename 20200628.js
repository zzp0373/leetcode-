// 给定一个含有 n 个正整数的数组和一个正整数 s ，找出该数组中满足其和 ≥ s 的长度最小的连续子数组，并返回其长度。如果不存在符合条件的连续子数组，返回 0。

// 输入: s = 7, nums = [2,3,1,2,4,3]
// 输出: 2
// 解释: 子数组 [4,3] 是该条件下的长度最小的连续子数组
var minSubArrayLen = function (s, nums) {
    let n = nums.length
    if (n === 0) {
        return 
    }
    var ans = 999
    console.log(ans,11,n)
    for (var i = 0; i < n ; i ++) {
        var sum = 0
        for (var j = i; j < n; j ++) {
            sum = sum + nums[j]
            if (sum >= s) {
                ans = Math.min(ans, j - i + 1);
            }
        }
    }
    return ans === 999 ? 0 : ans
}
console.log(3)
console.log(4)