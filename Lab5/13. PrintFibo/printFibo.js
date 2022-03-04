function printFibo(l, a, b){
    let n1 = a, n2 = b, fibonacci;

    for(let i = 1 ; i <= l ; i++){
        console.log(n1);
        fibonacci = n1 + n2;
        n1 = n2;
        n2 = fibonacci;
    }
}
printFibo(1, 0, 1);

// Alternative

function printFibo(n , a , b){
    if(n == 0 ) console.log("");
    if(n ==1 ) console.log(a);
    if(n === 2) console.log(a + " , " + b);
    if(n > 2) {
        let s = a + " , " + b ;
        let currA = a;
        let currB = b;
        for(let i = 2; i <= n ; i++){
            let nextFibo = currA + currB;
            currA = currB;
            currB = nextFibo;
            s += ", " + nextFibo;
        }
        console.log(s);
    }
}
printFibo(6, 0, 1);

