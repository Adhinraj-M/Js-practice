// let x = 7

// function getName(){
//     console.log('Namaste Javascript')
// }

// getName()
// console.log(x);
// console.log(getName);

//

// var n = 2;

// function square (num){
//     var ans = num * num ;
//     return ans ;
// }

// var square2  = square(n)
// var square4 = square(4)

// TEmperal Dead Zone

// console.log(bar);
// console.log(foo);

// var bar = 1
// const foo = 2

// var x = 1 ;
// a();
// b();

// console.log(x);

// function a(){
//     var x = 10
//     console.log(x)
// }

// function b(){
//     var x =100
//     console.log(x);

// }

// lexical environment

//
//          window // global

// var a= 10;

// function b(){
//     var x=10;
// }

// console.log(window.a);
// console.log(a)
// console.log(this.a)
// console.log(x) // x can't access because x is not in the window object (i.e , the x is not in the outside of the function)

//

// var a =10;
// b()
// function b(){
//     c();
//     function c(){
//         d()
//         function d(){
//             h()
//             function h()
//             {
//                 console.log(a)
//             }
//         }
//     }
// }

// function convertFarenheit(degree){
//     let farenheit = (degree * (9/5))+32
//     return `${farenheit} F`
// }

// console.log(convertFarenheit(23))

//

// function fibonacci(num){
//     let fib = [0,1]
//     for(let i=0;i<num-2;i++){
//         let newFib = fib[i] + fib[i+1]
//         fib.push(newFib)
//     }
//     return fib
// }

// console.log(fibonacci(10))

// function a(){
//     c()
//     function c(){
//         console.log(b)
//     }
// }

// const b = 10

// a()



// function z() {
//   var b = 900;
//   function x() {
//     var a = 7;
//     function y() {
//       console.log(a, b);
//     }
//     y();
//   }
//   x();
// }
// z();

// function x(){
//     var i = 1;
//     setTimeout(function (){
//         console.log(i)
//     },3000)
// }

// x()


// function mergeArray(arr1,arr2){
//     let merged = []
//     let totalLength = arr1.length + arr2.length

//     for(let i= 0 ;)
// }


// const array1 = [1, 3, 5];
// const array2 = [2, 4, 6, 8, 10];
// let merged = []

// function mergeArray(arr1,arr2){
//     let totalLength = arr1.length + arr2.length
//     let j=0;
//     let k=0
//     for(let i=0 ; i< totalLength ;i++){
//         if( j < arr1.length){
//             merged[i] = arr1[j]
//             i++;
//             j++;
//         }
//         if( k < arr2.length)
//         {
//             merged[i] = arr2[k]
//             k++;
//         }
//     }
//     return merged
// }

// console.log(mergeArray(array1,array2));

