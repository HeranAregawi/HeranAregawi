function findeLongestWord(w){
    let maxLength = 0;
    for(let i = 0 ; i   < w.length ; i++){
        if(w[i].length > maxLength)
        maxLength = w[i].length;
    }
    return maxLength;
}
console.log(findeLongestWord(['Heran', 'Mome', 'Fifi', 'Kidst']));






