class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }
  insertFirst(data) {
    //prepend(value)
    this.head = new Node(data, this.head);
    this.size++;
  }
  insertLast(data) {
    //append(value)
    let node = new Node(data);
    let current;
    if (!this.head) {
      // if linked list is empty, insertLast just puts new Node in it
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next; //while current has next, current = next, this traverses the linked list to the last node,
      }
      current.next = node; //since next doesn't exist, creates a new node and put it in the last position of the linkedList
    }
    this.size++;
  }
  size() {
    //done
    return this.size;
  }

  header() {
    //done
    return this.head.data;
  }

  tail() {
    //done
    let current;
    if (this.size === 1) {
      return this.head;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      return current.data;
    }
  }
  at(index) {
    //done
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }

  pop() {
    //remove last element on index;
    let current;
    let previous;
    if (this.size === 0) {
      return;
    } else if (this.size === 1) {
      this.head = null;
    } else {
      current = this.head; //sets current to first node;
      let count = 1;
      while (count < this.size - 1) {
        //in a 3 node list, count 1 runs once, then count = 2, 2 < this.size(3 - 1), wont run again, so we arrive at 2nd to last node;
        //if using index, index = 0; while (index < this.size - 2)
        current = current.next;
        count++;
      }
      current.next = null;
      this.size--;
    }
  }

  contains(value) {
    let current;
    current = this.head;
    while (current) {
      // if we current.next on the last node, current will become null, thats why this while(current) works
      if (current.data === value) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  find(value) {
    let current = this.head;
    let index = 0;
    while (current) {
      if (current.data === value) {
        return index;
      } else {
        current = current.next;
        index++;
      }
    }
    return false;
  }

  insertAt(data, index) {
    if (index > 0 && index > this.size) {
      return;
    } else {
      let node = new Node(data);
      let current;
      let previous;
      let count = 0;
      current = this.head;
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = node;
      node.next = current;
      this.size++;
    }
  }

  removeAt(index) {
    if (index > 0 && index > this.size) {
      return;
    } else {
      let current;
      let previous;
      let count = 0;
      current = this.head;
      while (count < index) {
        previous = current;
        current = current.next;
        count++;
      }
      previous.next = current.next;
      this.size--;
    }
  }

  toString() {
    let current = this.head;
    let string = "";
    while (current) {
      string += `(${current.data}) -> `;
      current = current.next;
    }
    if (!current) {
      string += "null";
    }
    return string;
  }
}

const ll = new LinkedList();
ll.insertFirst(100);
ll.insertLast(200);
ll.insertLast(300);
ll.insertLast(400);
ll.insertLast(500);
