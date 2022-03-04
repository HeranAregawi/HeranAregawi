// const computeSumOfEvensOnly = function(n){
//     let sum = 0;
//     for(let i =0 ; i < n.length ; i++){
//         if(n[i] % 2 == 0){
//             sum += n[i] * n[i];
//         }
//     }
//     return sum;
// }
//console.log(computeSumOfEvensOnly([1,2,3,4,5]));

// Declarative

function computeSumOfEvensOnly(n){
     return n.filter(n => n % 2 ==0).map(n => n * n).reduce((sum, n) => sum + n);  
} 
console.log(computeSumOfEvensOnly([1,2,3,4,5]));

