function BST(value){
    this.value = value;
    this.left = null;
    this.right = null;
}

BST.prototype.insert = function(value){
    if (value <= this.value){
        if (!this.left) this.left = new BST(value);
        else this.left.insert(value);
    }
    else{
        if (!this.right) this.right = new BST(value);
        else this.right.insert(value);
    }
};

BST.prototype.contains = function(value){
    if (value === this.value) return true;
    else {
        if (value < this.value){
            if (!this.left) return false;
            else return this.left.contains(value);
        }
        else{
            if (!this.right) return false;
            else return this.right.contains(value);
        }
    }
}

BST.prototype.print = function(){
    console.log(this.value);
    
    if (this.left) this.left.print();
    if (this.right) this.right.print();
}

BST.prototype.depthFirstTraversal = function(iteratorFunc, order){
    if (order === 'pre-order') iteratorFunc(this.value, order);
    if (this.left) this.left.depthFirstTraversal(iteratorFunc, order);
    if (order === 'in-order') iteratorFunc(this.value, order);
    if (this.right) this.right.depthFirstTraversal(iteratorFunc, order);
    if (order === 'post-order') iteratorFunc(this.value, order);
}

var bst = new BST(50);

bst.insert(70);
bst.insert(40);
bst.insert(45);
bst.insert(60);
bst.insert(90);
bst.insert(85);
console.log(bst.contains(90));

function log(value){
    console.log(value);
}
bst.depthFirstTraversal(log, 'post-order');