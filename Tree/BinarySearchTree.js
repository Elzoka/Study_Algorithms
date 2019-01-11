class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }

    insert(value){
        const newNode = new Node(value);
        if(!this.root){
            this.root = newNode;
            return this;
        }

        let currentNode = this.root;

        // Get the direction to go
        let direction = newNode.value > currentNode.value ? "right" : "left";
        while(currentNode[direction]){
            
            currentNode = currentNode[direction];
            // no duplicate are allowed in BST
            if (newNode.value === currentNode.value){
                return null;
            }
            // update the direction to check in the while loop when to top
            direction = newNode.value > currentNode.value ? "right" : "left";
        }

        currentNode[direction] = newNode;

        return this;
        
    }

    lookup(value){
        let currentNode = this.root;
        let direction;

        // if the updated node exist and equal the givin value don't enter the loop again
        while(currentNode && currentNode.value !== value){
            // get the direction
            direction = value > currentNode.value ? "right" : "left";
            // update the current node to the right direction
            currentNode = currentNode[direction];
        }
        // if found will return the node if not will return null (which is alway the last node)
        return currentNode;
    }

    remove(value){
        let currentNode = this.root;
        let direction;

        let parentNode = null;
        let unwantedNode = null;
        let replacementNode = null;
        let replacementParentNode = null;

        // if the updated node exist and equal the givin value don't enter the loop again
        while(currentNode && currentNode.value !== value){
            // get the direction
            direction = value > currentNode.value ? "right" : "left";

            // Get the parent as well
            if(currentNode[direction] && currentNode[direction].value === value){
                parentNode = currentNode;
            }
            // update the current node to the right direction
            currentNode = currentNode[direction];
        }
        unwantedNode = currentNode;

        if(currentNode && currentNode.right){
            replacementParentNode = currentNode;

            currentNode = currentNode.right;            
            replacementNode = currentNode;
        }

        while(currentNode){
            if(!currentNode.left){
                if(currentNode !== unwantedNode){
                    replacementNode = currentNode;
                }
                break;
            }
            replacementParentNode = currentNode;
            currentNode = currentNode.left;
        }

        if(!unwantedNode){
            return false;
        }

        if(!replacementNode){
            // connect children then remove
            parentNode[direction] = unwantedNode['right'];

            return true;
        }
        // if the replacement has children on the right pass it to the replacement Parant
        const directionOfReplacement = replacementParentNode.right === replacementNode ? 'right' : 'left';
        replacementParentNode[directionOfReplacement] = replacementNode.right ? replacementNode.right : null;


        replacementNode.left = unwantedNode.left;
        replacementNode.right = unwantedNode.right;

        // if there is no parentNode then it's the root
        if(parentNode){
            parentNode[direction] = replacementNode;
        }else{
            this.root = replacementNode;
        }
        
        return true;
    }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4)
tree.insert(6)
tree.insert(20)

tree.insert(30)
tree.insert(15)
tree.insert(1)
tree.insert(90);
tree.insert(41)
tree.insert(62)
tree.insert(24)
tree.insert(84)
tree.insert(57)
tree.insert(10)

// console.log(tree.lookup(170));
// console.log(JSON.stringify(traverse(tree.root), null, 2));
// console.log(JSON.stringify(traverse(tree.root)));

tree.remove(90);
// console.log(JSON.stringify(traverse(tree.root), null, 2));
// console.log(tree);
console.log(JSON.stringify(traverse(tree.root)));

//     9
//  4     20
//1  6  15  170

//     9
//  4     20
//   6    

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}