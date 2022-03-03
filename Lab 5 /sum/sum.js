var sum = function(num){
    let sum = 0;
    for(let i = 0 ; i < num.length ; i++){
        sum += num[i];
    }
    return sum;
}
var multiply = function(num){
    let sum = 1;
    for(let i = 0 ; i < num.length ; i++){
        sum *= num[i];
    }
    return sum;
}
console.log(sum([1, 2, 3, 4]));
console.log(multiply([1 ,2 ,3 ,4]))