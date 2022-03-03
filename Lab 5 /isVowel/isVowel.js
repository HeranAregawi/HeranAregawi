// var isVowel = function(c){
//     if(c.length == 1){
//         var vowels = new Array('a', 'e', 'i', 'o', 'u');
//         for(let i = 0; i < vowels.length ; i ++){
//             if(c === vowels[i])
//             return true
//         }
//     }
//     return false;
// }

// console.log(isVowel('i'));


function isVowel(c){
    let r = false;
    switch(c){
        case "a" :
        case "e" :
        case 'i' :
        case "o" :
        case "u" :
            
        r = true;
        break;

    }
    return  r;
}

console.log(isVowel('g'));
