function fibonacciIterative(n){
    let result = 0;
    let add = 1;
    for(let i = 0; i < n; i++){
        result += add;
        add = result - add;
    }

    return result;
}

function fibonacciRecursive(n){
    if(n < 2){
        return n;
    }

    return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciIterative(7));
console.log(fibonacciRecursive(7));