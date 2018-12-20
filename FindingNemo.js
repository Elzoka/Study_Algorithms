const large = new Array(10000).fill('nemo');

function findingNemo(array){
    let t0 = Date.now();
    for(let i = 0; i < array.length; i++){
        if(array[i] === 'nemo'){
            console.log('Found NEMO!');
        }
    }

    let t1 = Date.now();

    console.log('Call to find Nemo took ' + (t1 - t0) + ' millisecond');
}

// it took 497 milliseconds
findingNemo(large);