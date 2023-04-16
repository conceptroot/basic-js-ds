const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement the Stack with a given interface via array.
 *
 * @example
 * const stack = new Stack();
 *
 * stack.push(1); // adds the element to the stack
 * stack.peek(); // returns the peek, but doesn't delete it, returns 1
 * stack.pop(); // returns the top element from stack and deletes it, returns 1
 * stack.pop(); // undefined
 *
 */
class Stack {
  constructor () {
    this.values = []
  }
  show() {
    console.log(this.values)
  }
  push(element) {
    this.values.push(element)
  }

  pop() {
    return this.values.pop()
  }

  peek() {
    return this.values.slice(-1)[0]
  }

}

module.exports = {
  Stack
};

const stack = new Stack();
// stack.push(5);
// stack.push(6);
// stack.push(7);
// stack.show()
// console.log('peek', stack.peek(), 7);
// stack.show()
// console.log('pop', stack.pop(), 7);
// stack.show()
// console.log('peek', stack.peek(), 6);
// stack.show()
// console.log('pop', stack.pop(), 7);
// console.log('pop', stack.pop(), 7);
// console.log('pop', stack.pop(), 7);
// stack.show()