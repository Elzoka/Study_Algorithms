function hasCommonItem(array1, array2){
    const set2 = new Set(array2);
    let found = false;
    for(let i of array1) {
        if(set2.has(i)){
            found = true;
        }
        if(found === true){
            break;
        }
    };

    return found;
}
const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];

// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z', 'y', 'x'];
console.log(hasCommonItem(array1, array2));