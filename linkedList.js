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

    contains(value){
        let current = this.head;

        while(current){
            if(current.value === value) return true;

            current = current.next;
        }

        return false;
    }

    findIndex(value){
        let index = 0;
        let current = this.head;

        while(current){
            if(current.value === value) return index;

            current = current.next;
            index++;
        }

        return -1;
    }

    toString(){
        if(this.head === null) return "";

        let current = this.head;
        let result = "";

        while(current){
            result += `( ${current.value} ) -> `;
            current = current.next;
        }

        result += "null";

        return result;
    }

    insertAt(index, ...values){
        if(index < 0 || index > this.size()) throw new RangeError("Index out of bounds");

        let firstNewNode = new Node(values[0]);
        let lastNewNode = firstNewNode;

        for(let i = 1; i < values.length; i++){
            lastNewNode.next = new Node(values[i]);
            lastNewNode = lastNewNode.next;
        }

        // Case for inserting at the head
        if(index === 0){
            lastNewNode.next = this.head;
            this.head = firstNewNode;
            return;
        }

        // Case for inserting at the middle or tail
        let current = this.head;
        let count = 0;

        while(count < index -1){
            current = current.next;
            count++;
        }

        lastNewNode.next = current.next;
        current.next = firstNewNode;
    }

    removeAt(index){
        if(index < 0 || index >= this.size()) throw new RangeError("Index out of bounds");

        // Case for removing head
        if(index === 0){
            this.head = this.head.next;
            return;
        }

        // Case for removing middle or tail
        let current = this.head;
        let count = 0;

        while(count < index - 1){
            current = current.next;
            count++;
        }

        current.next = current.next.next;
    }
}

export { LinkedList };