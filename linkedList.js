class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }

    append(value){
        const newNode = new Node(value);

        // If list is empty and first node in list
        if(this.head === null){
            this.head = newNode;
            return;
        }

        // If list is not empty
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        // Update previous tail node to point to new node
        current.next = newNode;
    }

    prepend(value){
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;
    }
}

