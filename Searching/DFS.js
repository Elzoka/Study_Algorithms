const BinarySearchTree = require('../Tree/BinarySearchTree');

class BinarySearchTreeWithDFS extends BinarySearchTree {
    constructor(){
        super();
    }

    deapthFirstSearch(type){
        let newArray;
        switch(type){
            case 'preOrder':
                newArray = this._preOrder(this.root, []);
                break;
            case 'postOrder':
                newArray = this._postOrder(this.root, []);
                break;                
            case 'inOrder':
            default:
                newArray = this._inOrder(this.root, []);
                break;
        }
        return newArray;
    }

    _preOrder(node, list){
        list.push(node.value);

        if(node.left){
            this._preOrder(node.left, list);
        }

        if(node.right){
            this._preOrder(node.right, list)
        }

        return list;
    }
    _postOrder(node, list){
        if(node.left){
            this._postOrder(node.left, list);
        }

        if(node.right){
            this._postOrder(node.right, list)
        }

        list.push(node.value);

        return list;
    }
    _inOrder(node, list){
        if(node.left){
            this._inOrder(node.left, list);
        }

        list.push(node.value);

        if(node.right){
            this._inOrder(node.right, list)
        }

        return list;
    }
}


const tree = new BinarySearchTreeWithDFS();

tree.insert(9);
tree.insert(4)
tree.insert(6)
tree.insert(20)

tree.insert(170)
tree.insert(15)
tree.insert(1);

console.log(tree.deapthFirstSearch('inOrder'));
// console.log(tree.deapthFirstSearch('preOrder'));
// console.log(tree.deapthFirstSearch('postOrder'));