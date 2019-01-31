
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

	//CREATE
	push(val) {
		const newNode = new Node(val);

		if (!this.length) { //edge case- list is empty
			this.head=newNode; //then set head and tail to new node
			this.tail=newNode;

		} else {

			this.tail.next=newNode; //set the tail's next property to newNode
			this.tail= newNode; // move the tail to the newNode
		}

		this.length++; //update the length
		return this;
	}

	//READ
	traverse(){
		let current = this.head; //set a pointer to start at the head of list
		while (current) { //whilst the pointer is at a node(pointer is defined) 
			
			//log the item and then move on to the next item in the list
			console.log(current.val); 
			current= current.next;
		}
	}

	//DELETE
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
		this.length--;  // decrement the list length 

		return poppedItem; //return the item
	}

	//DELETE
	shift(){
		let poppedItem = this.head; // start a pointer at the head

		if (!poppedItem) return 'List is empty'; //edge case -- list is empty

		if (this.length==1) {//edge case -- list has a single item
			this.head=null;	//set head and tail to null
			this.tail=null;

		} else {
			this.head= poppedItem.next; //renagotiate the head
		    poppedItem.next=null; //sever the item from the list
		}

		
		this.length--; //reduce the list size
		return poppedItem //return the item
	}

	//CREATE
	unshift(val) {
		const newNode = new Node(val); // create a new node

		if (!this.head) { //edge case -- list is empty
			this.head = newNode; //point both the head and tail to the new node
			this.tail = newNode;
			this.length++; //increase the list size and return the  list
			return this;
		}

		newNode.next = this.head; // have the new node point to the head
		this.head = newNode; //have the head point to the new node
		this.length++;

		return this;

	}

	//READ
	get(index){
		//accept an index from the user

		//edge case  --
		//if the index is not valid i.e.
		if (index < 0 || index >= this.length) { //case**
			return null;
		}
		
			let current = this.head; //set a pointer to the head
			let currentIndex = 0; //define a indexer for the pointer

			while (currentIndex !== index) { //keep moving down the list until u reach the user defined index
				currentIndex++;
				current = current.next;
			}

			return current;
	}

	//UPDATE
	set(index, val){
		//Accept an index and a value

		//use the get function to get the item
		const item = this.get(index);

		if(item){ // if we get back an item
			item.val = val; //update the value at the node 
			return true; //and return true
		}
			//if we get nothing back then return false
			return false;
		
	}

	//CREATE
	insert(index, val) {
		//accept an index and a value

		//check for an invalid index
		if (index < 0 || index > this.length)
			return false;

		//edge case --
		//if the index is 0 then simply perform a unshift!
		if ( index === 0)
			return this.unshift(val) ? true : false;
		

		//edge case --
		//if the index is the length of the list then simply perform a push!
		if (index === this.length)
			return this.push(val) ? true : false;
		

		const newNode = new Node(val);

		//get the node before the index
		const pre = this.get(index-1);

		//let the new node point to the pre.next
		newNode.next = pre.next;

		//and have pre.next point to the new node
		pre.next = newNode;

		//increment the length
		this.length++;
		return true
	}

	//DELETE
	delete(index) {

		//accept an index

		//check for an invalid index
		if (index < 0 || index >= this.length)
			return null;

		//edge case --
		//if the index is 0 then simply perform a shift!
		if ( index === 0)
			return this.shift();
		

		//edge case --
		//if the index is the length-1 of the list then simply perform a pop!
		if (index === this.length-1)
			return this.pop();
		

		//get the node before the index
		const pre = this.get(index-1);

		//point to the item that pre points to
		const poppedItem = pre.next;

		//set pre.next to the poppedItem.next
		const pre.next = poppedItem.next;

		//sever poppedItem from ligt
		poppedItem.next = null;


		this.length--;//reduce the list size
		return poppedItem;
	}
}

const list = new SinglyLinkedList();
list.push('Hi');
console.log(list.get(0));
// console.log(list.shift());
// console.log(list.shift());
// list.traverse();
