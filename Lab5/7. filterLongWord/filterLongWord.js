function filterLongWord(w, leng){
    let longWords = [];
    for(let i = 0 ; i < w.length ; i++){
        if(w[i].length > leng){
            longWords.push(w[i])
        }
    }
    return longWords;
}

// elements = new Array;

console.log(filterLongWord(['hydrogen', 'heran', 'momona'], 4));



