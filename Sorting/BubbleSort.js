function bubbleSort(array){
    const length = array.length;
    for(let i = 1; i < length; i++){
        // loop to until reach (length - i), as for each loop the last i indexes gets sorted
        for(let j = 0; j < length - i; j++){
            if(array[j] > array[j + 1]){
                let temp = array[j+1];
                array[j+1] = array[j];
                array[j] = temp;
            }
        }
    }

    return array;
}


const numbers = [99, 100, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
bubbleSort(numbers);
console.log(numbers);