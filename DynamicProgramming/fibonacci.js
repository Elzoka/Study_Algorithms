function fibonacci(n){
    if(n < 2){
        return n;
    }

    return fibonacci(n - 1) + fibonacci(n - 2);
}


function fibonacciWithMemoization(n){
    const cache = {};
    return (function fib(n){
        if(n < 2){
            return n;
        }

        if(!cache[n]){
            cache[n] = fib(n - 1) + fib(n - 2);            
        }

        return cache[n];
    })(n)
}

console.log(fibonacci(15)); // 1973 new calculation
console.log(fibonacciWithMemoization(15)); // 14 new calculation
