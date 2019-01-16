function quickSort(array){
    if(array.length < 2){
        return array;
    }

    // sort left and right then split them at the pivot
    const pivotIndex = array.length - 1;
    const left = [];
    const right = [];

    for(let i = 0; i < pivotIndex; i++){
        if(array[i] > array[pivotIndex]){
            right.push(array[i]);
        }else{
            left.push(array[i]);
        }
    }

    return new Array().concat(
        quickSort(left),
        array[pivotIndex],
        quickSort(right)
    );
}

const numbers = [99, 100, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(quickSort(numbers));