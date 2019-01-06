class Node {
    constructor(value){
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}
class DoublyLinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head; 
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    prepend(value){
        const newNode = new Node(value);
        this.head.prev = newNode;
        newNode.next = this.head;
        this.head = newNode;
        this.length++;

        return this;
    }
    printList(){
        const array = [];
        let currentNode = this.head;
        while(currentNode){
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }

        return array;
    }
    insert(index, value){
        if(index >= this.length){
            return this.append(value);
        }

        if(index === 0){
            return this.prepend(value);
        }

        const newNode = new Node(value);
        const leader = this.traverseToIndex(index - 1); 

        const follower = leader.next;
        follower.prev = newNode; 
        newNode.next = follower;
        newNode.prev = leader;
        leader.next = newNode;

        this.length++;
        return this;
    }
    traverseToIndex(index){
        let currentNode = this.head;
        for(let i = 0; i < index; i++){
            currentNode = currentNode.next;
        }

        return currentNode;
    }

    remove(index){
        const leader = this.traverseToIndex(index - 1);
        if(index === 0){
            let follower = leader.next;
            follower.prev = null;
            this.head = follower;
        }

        const unwantedNode = leader.next;
        const follower = unwantedNode.next;
        leader.next = follower;
        follower.prev = leader;
        this.length--;
        return this;
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(0, 99);
console.log(myLinkedList.insert(1, 102));
myLinkedList.insert(20, 200);

console.log(myLinkedList.printList());

console.log(myLinkedList.remove(1));

console.log(myLinkedList.printList());
