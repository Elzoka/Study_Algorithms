class HashTable {
    constructor(size){
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set(key, value){
        let address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
    }

    get(key){
        let address = this._hash(key);
        const currentBucket = this.data[address];
        let result = currentBucket ? currentBucket.find(arr => arr[0] === key)[1] : null;

        return result;
    }


    keys(){
        const keysArray = [];
        this.data.forEach(array => {
            if(array){
                array.forEach(item => keysArray.push(item[0]));
            }
        })
        return keysArray;
    }
}

const myHashTable = new HashTable(20);
myHashTable.set('grapes', 10000);
console.log(myHashTable.get('grapes'));

myHashTable.set('Hello', "Mahmoud");
myHashTable.set('oranges', 32);
myHashTable.set('Ahmed', 31);
console.log(myHashTable.keys());

