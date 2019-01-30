
//Definition of a simply NODE

class Node {
	constructor(val){
		this.val=val;
		this.next= null;
	}
}

class SinglyLinkedList {
	constructor() {
		this.length=0;
		this.head=null;
		this.tail=null;
	}

	push(val) {
		const newNode = new Node(val);

		if (!this.length) { //edge case- list is empty
			this.head=newNode;
			this.tail=newNode;

		} else {

			//set the tail's next property to newNode
			this.tail.next=newNode;
			this.tail= newNode;
		}

		this.length++;
		return this;
	}

	traverse(){
		let current = this.head;
		while (current) {
			console.log(current.val);
			current= current.next;
		}
	}

	pop(){
		let pre = this.head;

		while(pre.next!==this.tail){}
	}
}

const list = new SinglyLinkedList();
list.push('Hi');
list.push('Mom');
list.push(4);
list.traverse();