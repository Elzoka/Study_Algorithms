function factorialRecursive(number){
    return number > 1 ? number * factorialRecursive(number - 1) : 1;
}

function factorialIterative(number){
    let total = number;
    while(number > 1) total *= --number;

    return total;
}

console.log(factorialRecursive(5));
console.log(factorialIterative(5));