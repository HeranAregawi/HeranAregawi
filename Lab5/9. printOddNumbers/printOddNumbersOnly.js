// // Imperative
// function printOddNumbersOnly(n){
//     const oddNumbs = [];
//     for(let i = 0 ; i < n.length ; i ++){
//         if(n[i] % 2 != 0)
//         oddNumbs.push(n[i]);
//     }
//     return oddNumbs;
// }
//console.log(printOddNumbersOnly([2, 3, 4, 6, 7]));


// Declarative

function printOddNumbersOnly(n){
   console.log(n.filter(n => n % 2 ==1));
n.filter(n => n % 2 ==1 ).forEach(n => console.log(n));
};
printOddNumbersOnly([2, 3, 4, 6, 7]);