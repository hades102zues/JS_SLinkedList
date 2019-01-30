
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

		if(!poppedItem) return 'List is empty'; //edge case -- list is empty

		

		if(this.length===1){ //edge case -- list has only one item
			this.head=null;
			this.tail=null;
			this.length--;
			return poppedItem;
			 
		}

		while(poppedItem.next !==this.tail){//go to item before tail
			poppedItem = poppedItem.next;
		}

		this.tail = poppedItem; //set to the new tail for the list
		poppedItem  = poppedItem.next; //capture the last item of the list
		this.tail.next= null; //cut off the last item from list
		this.length--; 

		return poppedItem;
	}

	shift(){
		let poppedItem = this.head;

		if (!poppedItem) return 'List is empty'; //edge case -- list is empty

		if (this.length==1) {//edge case
			this.head=null;
			this.tail=null;
			this.length--;
			return poppedItem;
		}

		this.head= poppedItem.next; //renagotiate the head
		poppedItem.next=null; //sever the item from the list
		this.length--;

		return poppedItem


	}
}

const list = new SinglyLinkedList();
list.push('Hi');
list.push('Mom');
console.log(list.shift());
console.log(list.shift());
console.log(list.shift());
list.traverse();
