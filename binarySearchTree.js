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

BST.prototype.breadthFirstTraversal = function(iteratorFunc){
    var queue = [this];
    while (queue.length){
        var treeNode = queue.shift();
        iteratorFunc(treeNode);
        if (treeNode.left) queue.push(treeNode.left);
        if (treeNode.right) queue.push(treeNode.right);
    }
}

BST.prototype.getMinVal = function(){
    this.breadthFirstTraversal(findMin);
};

BST.prototype.getMaxVal = function(){
    this.breadthFirstTraversal(findMax);
};

BST.prototype.minVal = null;
BST.prototype.maxVal = null;

function findMin(node){
    if (BST.prototype.minVal == null) BST.prototype.minVal = node.value;
    if (BST.prototype.minVal > node.value) BST.prototype.minVal = node.value;
}

function findMax(node){
    if (BST.prototype.maxVal == null) BST.prototype.maxVal = node.value;
    if (BST.prototype.maxVal < node.value) BST.prototype.maxVal = node.value;
}

var bst = new BST(50);

bst.insert(0);
bst.insert(10);
bst.insert(45);
bst.insert(60);
bst.insert(90);
bst.insert(85);
console.log(bst.contains(90));

function log(value){
    console.log(value.value);
}
// bst.depthFirstTraversal(log, 'post-order');

bst.breadthFirstTraversal(log);
console.log(bst.maxVal);
bst.getMaxVal();
console.log(bst.maxVal);