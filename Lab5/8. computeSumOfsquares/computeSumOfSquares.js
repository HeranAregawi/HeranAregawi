//Imprative
function computeSumOfSquare(n){
    let sum = 0;
    for(let i = 0; i < n.length; i++){
        sum += n[i] * n[i];
    }
    return sum;
}

console.log(computeSumOfSquare([1, 2, 3]));


// HOF - Declarative

function computeSumOfSquare(a){
    return a.reduce((sum, n) => sum + (n * n));
}
console.log(computeSumOfSquare([1, 2, 3]));

//Alternative

function computeSumOfSquare(n){
    return (n.map(n => n * n).reduce((sum, n) => sum + n));
}

console.log(computeSumOfSquare([1, 2, 3]));