function selectionSort(array){
    // loop across the entire array
    for(let i = 0; i < array.length; i++){
        // get the smallest number and it's index
        let smallest = array [i];
        let index = i;
        
        // loop in the array for the smallest number
        for(let j = i; j < array.length; j++){
            if(array[j] < smallest){
                smallest = array[j];
                index = j;
            }
        }

        // swap the numbers
        array[index] = array[i];
        array[i] = smallest;
    }

    return array;
}


const numbers = [99, 100, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
selectionSort(numbers);
console.log(numbers);