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

    size(){
        let count = 0;
        let current = this.head;

        while(current){
            current = current.next;
            count++;
        }

        return count;
    }

    headValue(){
        if(this.head === null) return undefined;

        return this.head.value;
    }

    tail(){
        if(this.head === null) return undefined;

        let current = this.head;
        while(current.next){
            current = current.next;
        }

        return current.value;
    }

    at(index){
        if(index < 0) return undefined;

        let count = 0;
        let current = this.head;

        while(current && count !== index){
            current = current.next;
            count++;
            }

        // Check for if current is null due to out of bounds index
        return current ? current.value : undefined;
    }

    pop(){
        if(this.head === null) return undefined;

        const value = this.head.value;
        this.head = this.head.next;

        return value;
    }
}

