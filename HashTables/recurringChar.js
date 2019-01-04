function recurringChar(arr){
    const past = new Set();

    for(let i = 0; i < arr.length; i++){
        if(past.has(arr[i])){
            return arr[i];
        }
        past.add(arr[i]);
    }
    return null;
}

// function recurringChar2(arr){
    
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             if(arr[i] === arr[j]){
//                 return arr[i];
//             }
//         }
//     }
//     return null;
// }


const array = [2,1,1,2,3,5,1,2,4];
console.log(recurringChar(array));
// console.log(recurringChar2(array));