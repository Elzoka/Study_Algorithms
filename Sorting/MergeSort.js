function mergeSort(array){
    if(array.length === 1){
        return array;
    }

    const splitIndex = Math.floor(array.length / 2);
    const left = array.slice(0, splitIndex);
    const right = array.slice(splitIndex);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
}

function merge(left, right){
    const newArray = [];
    let i = 0, j = 0;

    // while(left[i] && right[j]) won't work as js will coerce 0 into false and will exit the while loop
    while(typeof left[i] === 'number' && typeof right[j] === 'number'){
        if(left[i] < right[j]){
            newArray.push(left[i]);
            i++;
        }else{
            newArray.push(right[j]);
            j++;
        }
    }

    while(left[i]){
        newArray.push(left[i]);
        i++;
    }

    while(right[j]){
        newArray.push(right[j]);
        j++;
    }
    
    return newArray;
}

const numbers = [99, 100, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
console.log(mergeSort(numbers));