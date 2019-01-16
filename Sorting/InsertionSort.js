function insertionSort(array){
    for(let i = 0; i < array.length; i++){

        let index = i;
        while(i > 0 && array[index] < array[index - 1]){
            let temp = array[index];
            array[index] = array[index - 1];
            array[index -1] = temp;

            index--;
        }
    }

    return array;
}


const numbers = [99, 100, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
insertionSort(numbers);
console.log(numbers);