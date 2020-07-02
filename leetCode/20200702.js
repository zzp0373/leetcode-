// 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
// 输入: "abcabcbb"
// 输出: 3 
// 解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

// let str = 'abcabcbb'
// let result = (str) => {
//     let obj = {}
//     for (var i = 0; i < str.length; i ++) {
//         console.log(str[i])
//         if (!obj[str[i]]) {
//             obj[str[i]] = 1
//         }
//     }
//     let stri = ''
//     for (var j in obj) {
//         stri = stri + j
//     }
//     return stri
// }
// console.log(result(str))


// 给定一个字符串，请你找出其中重复次数最多的字母 并且输出次数
// 输入: "abcabcbb"
// 输出: 4
// 解释: 


let str = 'abcabcbb'
let result = (str) => {
    let obj = {}
    for (var i = 0; i < str.length; i ++) {
        console.log(str[i])
        if (obj[str[i]]) {
            obj[str[i]] =  obj[str[i]] + 1
        } else {
            obj[str[i]] =  1
        }
    }
    console.log(obj)
    let num = 0
    let stri = ''
    for (var j in obj) {
        if (obj[j] > num) {
            num = obj[j] 
            stri = j
        }
    }
    return {num,stri}
}
console.log(result(str))
