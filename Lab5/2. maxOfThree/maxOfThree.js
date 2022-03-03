//Using Ternary

function max(x, y, z){
    return ((x > y) ? ((x > z) ? x : z)  : (y > z) ? y : z)
}

console.log(max(4,8,6));

// Altenative

function max(x, y, z){
    let max = x;
    if( y > max)
    max = y ;
    if( z > max)
    max = z;

    return max;
}
console.log(max(4,8,6));


