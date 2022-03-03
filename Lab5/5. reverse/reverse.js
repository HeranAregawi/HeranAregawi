var reverse = function(s){
    let newString = "";
    for(let i =s.length - 1; i >= 0 ; i--){
        newString += s[i];
    }
    return newString;
}

console.log(reverse('heran'));

//Alternative
function reverse(a){
    let reverse = [];
    for(let i = a.length -1 ; i >= 0 ; i--){
        reverse.push(a[i]);
    }
    return reverse;
}
console.log(reverse('Mom ona'));
