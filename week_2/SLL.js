class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

var first_node = new Node("Maria");
var second_node = new Node("Raj");
var third_node = new Node("William");

// console.log(first_node);

class SLL{
    constructor(){
        this.head = null;
    }
    //method that adds a new node to the front of the list
    addToFront(value){
        var new_node = new Node(value);
        // what if the head is currently empty?
        if(this.head == null){
            this.head = new_node;
            return this;
        }
        //what if the head is NOT empty?
        new_node.next = this.head; //store the current head with the pointer of the new node
        this.head = new_node; //update the head of the list.
        return this;
    }

    displayList(){
        if(this.head == null){
            console.log("Empty List");
            return this;
        }
        var runner = this.head;
        while(runner !== null){ //if a node is at that position
            console.log(`Node:${runner.value}`); //print the node in console
            runner = runner.next; //increment the runner
        }
        return this;
    }
}

var my_sll = new SLL();
my_sll.displayList();
my_sll.addToFront("David").addToFront("Amanda").addToFront("Michelle").displayList();

