class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    add(value){
        if(this.root == null){
            this.root = new Node(value);
            return this;
        }
        var runner = this.root;
        while(runner !== null){
            // is the runner value larger or smaller than the value we want to add
            if(value < runner.value){
                if(runner.left == null){ //if the new node is smaller than the current position and the left pointer is free
                    runner.left = new Node(value);
                    return this;
                }
                //if the runner.left position is already filled?
                runner = runner.left;
            }
            else{
                if(runner.right == null){
                    runner.right = new Node(value);
                    return this;
                }
                runner = runner.right;
            }
        }
    }
    contains(value){
        //check if the tree has a value in it. Return either True or False
        if(this.root == null){
            return false;
        }
        var runner = this.root;
        while(runner !== null){
            if(value == runner.value){
                return true;
            }
            else if(value < runner.value){
                runner = runner.left;
            }
            else{
                runner = runner.right;
            }
        }
        return false;
    }
    size(){
        if(this.root == null){ //empty tree, 0 nodes
            return 0;
        }
        function helper(runner){
            if(runner == null){
                return 0; //tell the runner to stop looping, there's no node here
            }
            return 1 + helper(runner.left) + helper(runner.right);
        }
        return helper(this.root);
    }
}

var myTree = new BST();
//console.log(myTree);
myTree.add(30).add(10).add(50).add(20);
console.log(myTree.contains(10));
console.log(myTree.contains(15));
myTree.size();