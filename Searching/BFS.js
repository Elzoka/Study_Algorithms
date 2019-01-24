const BinarySearchTree = require('../Tree/BinarySearchTree');
const Queue = require('../QueuesAndStacks/Queue');

class BinarySearchTreeWithBFS extends BinarySearchTree {
    constructor(){
        super();
    }
    breadthFirstSearch() {
        let currentNode;
        const list = [];
        const newQueue = new Queue();

        newQueue.enqueue(this.root);
        
        currentNode = newQueue.peek();

        while(currentNode){
            list.push(currentNode.value);
            
            newQueue.dequeue();
            if(currentNode.left){
                newQueue.enqueue(currentNode.left);
            }

            if(currentNode.right){
                newQueue.enqueue(currentNode.right);                
            }

            currentNode = newQueue.peek();
        }

        return list;
    }
}

const tree = new BinarySearchTreeWithBFS();

tree.insert(9);
tree.insert(4)
tree.insert(6)
tree.insert(20)

tree.insert(170)
tree.insert(15)
tree.insert(1);

console.log(tree.breadthFirstSearch());

//     9
//  4     20
//1  6  15  170

//     9
//  4     20
//   6    

