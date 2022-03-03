function isVowel(c){
    if(c.length == 1){
        const vowels = new Array('a', 'e', 'i', 'o', 'u');
        for(let i = 0; i < vowels.length ; i ++){
            if(c === vowels[i])
            return true;
        }
    }
    return false;
}

console.log(isVowel('i'));

// ALtenative 
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

console.log(isVowel('i'));

//Alternative

function isVowel(c){
    return (c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u');
}
console.log(isVowel('i'));
