// 1. 宏任务 和微任务
// https://www.jianshu.com/p/bfc3e319a96b
// console.log('start')

// setTimeout(() => {
//   console.log('setTimeout')
// }, 0)

// new Promise((resolve) => {
//   console.log('promise')
//   resolve()
// })
//   .then(() => {
//     console.log('then1')
//   })
//   .then(() => {
//     console.log('then2')
//   })

// console.log('end')


// 2. 解析 arguments 中 c的值还是1 不会变成10，因为a 函数加了默认值，就按 es的方法解析， es6是有
// 块 级作用域的，所以c 的值是不会改变的
// 一旦设置了参数的默认值，函数进行声明初始化，参数会形成一个单独的作用域，等到初始化结束，这个作用域就会消失，
// 这种语法行为，在不给函数设置默认值时，是不会出现的
// https://www.bbsmax.com/A/B0zq3V1n5v/         https://blog.csdn.net/ws9029/article/details/91344623
 function side(arr) {
   arr[0] = arr[2]
 }
 function a(a,b, c = 5 ) {
   c = 10;
   side(arguments)
   console.log(a, 'a')
   console.log(b, 'b')
   console.log(c, 'c')
   return a + b + c
 }
 

 // 3.  Math.min 的参数是0个 或者多个，如果多个参数很容易理解，返回参数中最小的，如果没有参数，则返回 Infinity 
 // Math.max 0 个参数的返回值是 -Infinity 所以输出返回false  Infinity 和 -Infinity 无法比较大小
 var min = Math.min()
 max = Math.max()
 console.log(min < max)