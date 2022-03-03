// const findSecondBiggest = function(n){
//     let maxNum = -Infinity;
//     let secondMax = - Infinity;
//     for(let i = 0 ; i < n.length ; i++){
//         if(n[i] > maxNum){
//             secondMax = maxNum;
//             maxNum = n[i];     
//         }else{
//             if(n[i] > secondMax)
//             secondMax = n[i];
            
//         }        
//     }
//     return secondMax;
// }
// console.log(findSecondBiggest([12, 9, 11, 0, 19]));


//

function findSecondBiggest(a){
    if(a.length < 2 ) 
    throw new console.error("Invald array. Must have atleast two elements");
    let b = (a[0] > a[1] ? a[0] : a[1]);
    let sb = ((a[0] === b ) ? a[1] : a[0]);
    for(let i = 2 ; i < a.length ; i ++){
        if(a[i] > b) {
            sb = b ;
            b = a[i];
        } else{
            if(a[i] > sb )
            sb = a[i];
        }
    }
    return sb;
}
console.log(findSecondBiggest([12, 9, 11, 0, 19]));