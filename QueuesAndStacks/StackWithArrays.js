class Stack {
    constructor(){
        this.array = [];
    }

    pop(){
        this.array.pop();
        return this;
    }

    push(value){
        this.array.push(value);
        return this;
    }

    peek(){
        this.array[this.array.length - 1];
        return this;
    }

    isEmpty(){
        return !this.array.length;
    }
}

const myStack = new Stack();

console.log(myStack.peek());
console.log(myStack.push("Google"));
console.log(myStack.push("udemy"));
console.log(myStack.push("youtube"));
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.isEmpty());