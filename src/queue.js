

function ListNode(x) {
  return {
    value: x,
    next: null
  };
}

class Queue {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  enqueue(value) {
    const newNode = new ListNode(value);

    if (!this._head) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail.next = newNode;
      this._tail = newNode;
    }
  }

  dequeue() {
    
    if (!this._head) return undefined; 

    const value = this._head.value;
    this._head = this._head.next;

    if (!this._head) {
      this._tail = null;
    }

    return value;
  }

  getUnderlyingList() {
    return this._head;
  }
}

module.exports = Queue;
module.exports.Queue = Queue;
module.exports.ListNode = ListNode;