function LinkedList(){
    this.head = null;

    this.addNodeFromHead = function(value){
        var node = new Node(value, null);
        if (this.head === null){
            this.head = node;
        }
        else{
            node.next = this.head;
            this.head = node;
        }
    }

    this.addNodeFromTail = function(value){
        var node = new Node(value, null);

        var head = this.head;
        if (this.head === null){
            this.head = node;
        }
        else{
            while (head.next !== null){
                head = head.next;
            }
            head.next = node;
        }
    }

    this.delete = function(value){
        var head = this.head;
        var prev = head;
        var notFound = true;
        console.log("Deleting "+value);
        while (head !== null){
            
            if (head.value === value){
                //delete
                prev.next = head.next;
                head.next = null;
                notFound = false;
                console.log("Deleted Successfully");
                break;
            }
            else{
                prev = head;
                head = head.next;
            }
        }

        if (notFound){
            console.log(value+ " not found in the linked list");
        }
        
    }

    this.printLinkedList = function(){
        var head = this.head;
        while(head!=null){
            console.log(head.value);
            head = head.next;
        }
    }

}

function Node(value, next){
    this.value = value;
    this.next = next;
}

var LL = new LinkedList();

LL.addNodeFromHead(12);
LL.addNodeFromHead(13);
LL.addNodeFromHead(14);
LL.addNodeFromHead(15);
LL.addNodeFromHead(16);
LL.addNodeFromHead(17);
LL.addNodeFromHead(18);
LL.addNodeFromTail(19);
LL.addNodeFromTail(21);
LL.addNodeFromTail(22);
LL.addNodeFromTail(145);
LL.addNodeFromTail(19);

LL.printLinkedList();
LL.delete(11);
