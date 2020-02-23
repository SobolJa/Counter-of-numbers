// let a = +prompt('Write a number one')
// let b = +prompt('Write a number two')
// let c = +prompt('Writea  number three')
// let d = +prompt('Write a number four')
//
// function numMax(a,b,c,d){
//     if(a>b && a>c && a>d){
//         return a}
//     else if(b>c && b>d){
//         return b}
//     else if(c>d){
//         return c}
//     else {
//         return d}
// }
// console.log(numMax(a,b,c,d))
//
//
//
//                      TASK 2

let b = +prompt('Enter the counter of numbers')
 if(b <= 0){
     alert('The number must be > 0')
 }
 else {
    let q = +prompt('Enter the num') 
    function getProgression(b, q){
     let b1 = 1;
     let res = 1;

     for(i = 1; i < b; i++){
         b1 *= q
         res += b1
     }
     console.log(res)
 }
 getProgression(b,q)
 }