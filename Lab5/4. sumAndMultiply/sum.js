function sum(num){
    let sum = 0;
    for(let i = 0 ; i < num.length ; i++){
        sum += num[i];
    }
    return sum;
}

function multiply(num){
    let sum = 1;
    for(let i = 0 ; i < num.length ; i++){
        sum *= num[i];
    }
    return sum;
}
console.log(sum([1, 2, 3, 4]));
console.log(multiply([1 ,2 ,3 ,4]))