function sum (n){

 console.log (n.reduce((accum, a) => accum + a ));
};

sum([5, 6, 7, 7]);

function multiply(n){
    return (n.reduce((accum, a) => accum * a));
}
console.log(multiply([1, 2, 3, 4]));