class Node {
    constructor(data, left, right) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(arr) {
        this.root = null;
        let p = null;
        let q = [];
        for(let i=0; i< arr.length; i++) {
            if (this.root == null) {
                this.root = new Node(arr[i], null, null);
                p = this.root;
            } else if (p.left == null) {
                p.left = new Node(arr[i], null, null);
                q.push(p.left);
            } else if(p.right == null) {
                p.right = new Node(arr[i], null, null);
                q.push(p.right);
                p = q.shift();
            }
        }        
    }
    printLevelOrderTraversal() {
        let p = this.root;
        let q = [];
        q.push(p);
        while(q.length) {
            p = q.shift();
            process.stdout.write(p.data + " ");
            if (p.left) {
                q.push(p.left);
            }
            if (p.right) {
                q.push(p.right);
            }
        }
    }
    inorderTraversal() {
        this.#inorder(this.root);
    }
    #inorder(root) {
        if (root) {
            this.#inorder(root.left);
            process.stdout.write(root.data + " ");
            this.#inorder(root.right);
        }
    }
    
}

let arr = [1,2,3,4,5,6,7];

let bt = new BinaryTree(arr);

console.log("Level Order Traversal")
bt.printLevelOrderTraversal();

console.log("\nInorder Traversal");
bt.inorderTraversal();