const boxes = ['a', 'b', 'c', 'd'];

function logAllPairsOfArray(boxes){
    boxes.forEach(x => {
        boxes.forEach(y => {
            console.log(x, y);
        });
    });
}

logAllPairsOfArray(boxes);