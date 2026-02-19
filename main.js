import { LinkedList } from "./linkedList.js";

const list = new LinkedList();

list.append("dog");
list.append("cat");
list.append("parrot");
list.append("hamster");
list.append("snake");
list.append("turtle");

console.log(list.toString());
console.log(`\nSize of linked list: ${list.size()}`);
console.log(`Index of parrot: ${list.findIndex("parrot")}`);
console.log(`Value at index 4: ${list.at(4)}`);
console.log(`Does list contain dog: ${list.contains("dog")}`);

list.insertAt(1, 10, 11);
console.log(list.toString());
console.log(list.removeAt(2));
console.log(list.toString());

