class MyNode {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = undefined;
    }
    addNode(data) {
        let node = new MyNode(data, undefined, undefined);
        if(this.root == undefined) {
            this.root = node;
        } else {
            this.#placeNode(this.root, node);
        }
    }
    #placeNode(treeNode, newNode) {
        if (treeNode.data > newNode.data) {
            if (treeNode.left) {
                this.#placeNode(treeNode.left, newNode)
            } else {
                treeNode.left = newNode;
            }
        } else {
            if (treeNode.right) {
                this.#placeNode(treeNode.right, newNode);
            } else {
                treeNode.right = newNode;
            }
        }
    }
    bfs() {
        if (!this.root) {return;}
        console.log("BFS: ")
        let queue = [];
        queue.push(this.root);
        while(queue.length) {
            let n = queue.shift();
            process.stdout.write(n.data + " ");
            if(n.left) queue.push(n.left);
            if(n.right) queue.push(n.right);
        }
    }
    dfs() {
        if (!this.root) { return; }
        console.log("DFS: ");
        let stack = [];
        stack.push(this.root);
        while(stack.length) {
            let n = stack.pop();
            process.stdout.write(n.data + " ");
            if(n.right) stack.push(n.right);
            if(n.left) stack.push(n.left);
        }
    }
}

let bst = new BinarySearchTree();

bst.addNode(5);
bst.addNode(3);
bst.addNode(6);
bst.addNode(2);
bst.addNode(4);
bst.bfs();
bst.dfs();
// console.log(bst);