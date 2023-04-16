const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  console.log("converted to array", convertListToArray(l))
  let base = getNext(l)

  function getNext(current) {
    let baza = current
    if (current.value === k) {
      if (current.next) {
        current = getNext(current.next)
        return current
      } else {
        current = null
        return current
      }
    } else if (current.next) {
      current.next = getNext(current.next)
    } else {
      current.next = null
    }
    return baza
  }

  console.log('base:', base)
  console.log("converted base to array", convertListToArray(base))
  return base
}
function convertListToArray(l) {
  let arr = []
  while (l.next) {
    arr.push(l.value)
    l = l.next
  }
  arr.push(l.value)
  return arr
}


function convertArrayToList(arr) {
  return arr.reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}
module.exports = {
  removeKFromList
};



// console.log(removeKFromList(convertArrayToList([3, 1, 2, 3, 4, 5]), 3), [1, 2, 4, 5])  
// console.log(removeKFromList(convertArrayToList([1, 2, 3]), 3), [1, 2])  
