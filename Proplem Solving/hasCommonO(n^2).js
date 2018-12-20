function hasCommonItem(array1, array2){
    let found = false;
    for(let i of array1) {
        if(array2.some(j => i == j)){
            found = true;
        }
        if(found === true){
            break;
        }
    };

    return found;
}
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'a', 'i'];

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
console.log(hasCommonItem(array1, array2));