function findSecondBiggest(n){
    let maxNum = n[0];
    let secondMax = maxNum;
    for(let i = 0 ; i < n.length ; i++){
        if(n[i] > maxNum){
            secondMax = maxNum;
            maxNum = n[i];     
        }else{
            if(n[i] > secondMax)
            secondMax = n[i];
            
        }        
    }
    return secondMax;
}
console.log(findSecondBiggest([12, 9, 11, 0, 19]));


//Alternative 

function findSecondBiggest(a){
    if(a.length < 2 ) 
    throw new console.error("Invalid array. Must have atleast two elements");
    let biggest = (a[0] > a[1] ? a[0] : a[1]);
    let secondBiggest = ((a[0] === biggest ) ? a[1] : a[0]);
    for(let i = 2 ; i < a.length ; i ++){
        if(a[i] > biggest) {
            secondBiggest = biggest ;
            biggest = a[i];
        } else{
            if(a[i] > secondBiggest )
            secondBiggest = a[i];
        }
    }
    return secondBiggest;
}
console.log(findSecondBiggest([12, 9, 11, 0, 19]));