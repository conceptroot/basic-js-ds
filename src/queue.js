const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.start = undefined 
  }

  getUnderlyingList() {
    return this.start
  }

  showArray() {
    const arr = []
    let cursor = this.start
    while (true) {
      arr.push(cursor.value)
      if (cursor.next) {
        cursor = cursor.next
      } else {
        break
      }
    }
    console.log('Full list repr:', arr)
  }
  enqueue(value) {
    if (!this.start) {
      this.start = new ListNode(value)
    } else {
      this.getLast().next = new ListNode(value)
    }

  }
  getLast() {
    let current = this.start
    while (true) {
      if (current.next) {
        current = current.next
      } else {
        break
      }
    }
    // console.log(current)
    return current
  }

  dequeue() {
    const first = this.start
    this.start = first.next
    return  first.value
  }
}

module.exports = {
  Queue
};

// const queue = new Queue();
// queue.enqueue(5);
// queue.enqueue(6);
// queue.enqueue(7);
// queue.showArray()
// console.log('dequeue:', queue.dequeue(), ' should be:',  5);
// queue.showArray()
// console.log('dequeue:', queue.dequeue(), ' should be:',  6)
// queue.showArray()
