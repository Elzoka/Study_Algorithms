class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor(value){
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value){
        const newNode = new Node(value);

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    prepend(value){
        const newNode = new Node(value);
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

        newNode.next = leader.next;
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
        const unwantedNode = leader.next;
        leader.next = unwantedNode.next;
        this.length--;
        return this;
    }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(0, 99);
myLinkedList.insert(3, 102);
myLinkedList.insert(20, 200);
console.log(myLinkedList.printList());

myLinkedList.remove(3);

console.log(myLinkedList.printList());
