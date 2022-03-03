var max = function(x, y, z){
    return ((x > y) ? ((x > z) ? x : z)  : (y > z) ? y : z)
}

console.log(max(4,8,6));