function mergeSortedArrays(array1, array2){
    const length = array1.length + array2.length;
    const mergedArray = [];

    for (let i = 0, j = 0, k = 0; i < length; i++){
        if(array2[k] < array1[j]){
            mergedArray.push(array2[k]);
            k++;
        }else{
            mergedArray.push(array1[j]);
            j++;
        }
    }
    return mergedArray;
}

console.log(mergeSortedArrays([0,3,4,11,35,55], [4,6,30,45]));