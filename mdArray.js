class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// Example usage:
let node1 = new Node(10);
let node2 = new Node(20);
node1.next = node2;

console.log("Node 1 data:", node1.data);
console.log("Node 1 next node data:", node1.next.data);
