// const computeSumOfSquare = function(n){
//     let sum = 0;
//     for(let i = 0; i < n.length; i++){
//         sum += n[i] * n[i];
//     }
//     return sum;
// }

// console.log(computeSumOfSquare([1, 2, 3]));


//

function computeSumOfSquare(a){
    return a.reduce((sum, n) => sum + (n * n));
}
console.log(computeSumOfSquare([1, 2, 3]));