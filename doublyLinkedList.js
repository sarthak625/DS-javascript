function Node(value, next, prev){
    this.value = value;
    this.next = next;
    this.prev = prev;
}

function LinkedList(){
    this.head = null;
    this.tail = null;
}

LinkedList.prototype.addToHead = function(value){
    var newNode = new Node(value, this.head, null);
    if (this.head) this.head.prev = newNode;
    else this.tail = newNode;

    this.head = newNode;
    
};

LinkedList.prototype.display = function(){
    var head = this.head;
    var tail = this.tail;
    while(head !== tail.next){
        console.log(head.value);
        head = head.next;
    }
}

LinkedList.prototype.addToTail = function(value){
    var newNode = new Node(value, null, this.tail);

    if (this.tail)  this.tail.next = newNode;
    else this.head = newNode;

    this.tail = newNode;
}

LinkedList.prototype.removeHead = function(){
    if (! this.head){
        console.log("List is empty");
        return null;
    }

    var val = this.head.value;

    if (this.head.next != null){
        this.head = this.head.next;
        this.head.prev = null;
    }else{
        this.head = null;
    }

    return val;
}

LinkedList.prototype.removeTail = function(){
    if (! this.tail){
        console.log("List is empty");
        return null;
    }

    var val = this.tail.value;
    this.tail = this.tail.prev;
    if (this.tail) this.tail.next = null;
    else this.head = null;

    return val;
}

LinkedList.prototype.search = function(searchValue){
    var currNode = this.head;

    while (currNode != null){
        if (currNode.value === searchValue){
            console.log("Found");
            break;
        }
        currNode = currNode.next;
    }
}

LinkedList.prototype.indexOf = function(value){
    var currNode = this.head;
    var indexes = [];
    var i = 0;
    while (currNode != null){
        if (currNode.value === value) indexes.push(i)
        currNode = currNode.next;
        i+=1;
    }
    return indexes;
}

var LL = new LinkedList();
// LL.removeHead();
LL.addToTail("one");
LL.addToTail(12);
LL.addToTail(100);
LL.addToTail("three");

LL.addToHead(100);
LL.addToHead(100);
LL.removeTail();
LL.display();

LL.search(12);
console.log(LL.indexOf(100));
// console.log(LL);