// const printOddNumbersOnly = function(n){
//     const oddNumbs = [];
//     for(let i = 0 ; i < n.length ; i ++){
//         if(n[i] % 2 != 0)
//         oddNumbs.push;
//     }
//     return oddNumbs;
// }
// console.log(printOddNumbersOnly([2, 3, 4, 6]));


// 
function printOddNumbersOnly(n){
   // console.log( n.filter(n => n % 2 != 0));
   n.filter(n => n % 2 ==1 ).forEach(n => console.log(n));
       
   

};
printOddNumbersOnly([2, 3, 4, 6]);