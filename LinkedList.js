
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
		let poppedItem = this.head;

		if(!poppedItem) return console.log('List is empty'); //edge case -- list is empty

		

		if(this.length===1){ //edge case -- list has one item
			this.head=null;
			this.tail=null;
			return console.log(poppedItem);
			this.length--; 
		}

		while(poppedItem.next !==this.tail){
			poppedItem = poppedItem.next;
		}//stops at item before tail

		this.tail = poppedItem;
		poppedItem  = poppedItem.next;
		this.tail.next= null;
		this.length--; 

		console.log(poppedItem);
	}
}

const list = new SinglyLinkedList();
list.push('Hi');
list.pop();
list.traverse();