const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor (data) {
    this.data = data
    this.left = null
    this.right = null
  }
  pprint() {
    console.log(" ".repeat(20), "( ",  this.data, " )", " ".repeat(20))
    let left = this.left ? this.left.data : "empty"
    let right = this.right ? this.right.data : "empty"
    console.log(" ".repeat(10), "( ", left, " )",  " ".repeat(4), "( ",right, " )",  " ".repeat(10))
  }
  print() {


  }
}

class BinarySearchTree {
  constructor() {
    this._root = null
  }

  root() {
    return this._root
  }

  add(data) {
    if (!this._root) {
      this._root = new Node(data)
      return
    }
    _add(this._root, data)
    // this._root = __add(this._root, new Node(data)) 
    // function __add (node, newNode) {
      
      // if(node == null) {
        // node = newNode
        // return node
      // } else if (newNode.data < node.data ) {
        // node.left = __add(node.left, newNode)
      // } else if (newNode.data > node.data ) {
        // node.right = __add(node.right, newNode)
      // }
      // return node
      // 
    // }

    function _add (node, data) {
      // начинаем с корня (в корня) +
      // новое значение больше, чем значение в корне?
      // если да, то переходим в ригхт и повторяем эту функцию
      //          если ригхта нет, то в рихт записываем новое значение ()
      // если нет, то переходим в лефт
      //          если лефта нет, то в лефте записываем новое значение ()
      // console.log('#node:', node, '#data:', data)
      if (data > node.data) {
        if (node.right) {
          _add(node.right, data)
        } else {
          node.right = new Node(data)
        }
      } else if (data < node.data) {
        if (node.left) {
          _add(node.left, data)
        } else {
          node.left = new Node(data)
        }
      } else if (data === node.data) {
        console.log('нашли ноду с текущим значением')
      }
    }

  }

  has(data) {
    if(this.find(data)) {
      return true
    }
    return false
  }

  find(data) {
    let result = null
    _find(this._root, data)

    function _find(node, data) {
      if (node.data === data) {
        result = node
        return
      } 
      if (node.right) {
        _find(node.right, data)
      }
      if (node.left) {
        _find(node.left, data)
      }
    }
    return result
  }

  remove(data) {
    //            10
    //      5          16
    //   3    7 
    //       6 8
    //  If remove 5
    //    10 - 5  => 10 - 7
    //    5  - 3  => 7 - 6 - 3
    //    5  - 7 
    
    if (this.has(data)) {
      _remove(this._root, data)
    } else {
      console.log('Не найдено значение:', data)
    }
    function _remove(node, data) {
      if(node === null) {
        return node
      } else if (data < node.data) {
        node.left = _remove(node.left, data)
      } else if (data > node.data) {
        node.right = _remove(node.right, data)
      } else {
        if (node.left === null && node.right === null) {
          node = null
        } else if (node.right !== null) {
          // нужно найти приемника
          node.data = _successor(node)
          node.right = _remove(node.right, node.data)
        } else {
          // найти предшественника
          node.data = _predecessor(node);
          node.left = _remove(node.left, node.data)
        }     
      }
      return node
    }
    function _successor(node) {
      node = node.right
      while(node.left != null) {
        node = node.left
      }
      return node.data
    }
    function _predecessor(node) {
      node = node.left
      while(node.right != null) {
        node = node.right
      }
      return node.data
    }
    
  }

  min() {
    let leftest = findLetest(this._root)
      
    function findLetest(node) {
      if (node.left) {
        return findLetest(node.left)
      }
      else {
        return node
      }
    }
    return leftest.data
  }

  max() {
    let rightest = findRightest(this._root)
      
    function findRightest(node) {
      if (node.right) {
        return findRightest(node.right)
      }
      else {
        return node
      }
    }
    return rightest.data
  }
  print() {
    _printNode(this._root)
    function _printNode(node) {
      if (node.left) {
        _printNode(node.left)
      }
      console.log(node.data)
      if (node.right) {
        _printNode(node.right)
      }
    }
    
  }

  pprint() {
    _printNode(this._root)
    function _printNode(node) {
      node.pprint()
      if (node.left) {
        _printNode(node.left)
      }
      if (node.right) {
        _printNode(node.right)
      }
    }
  }
}

module.exports = {
  BinarySearchTree
};



const tree = new BinarySearchTree();
tree.add(9);
tree.add(14);
tree.add(54);
tree.add(2);
tree.add(6);
tree.add(8);
tree.add(31);
tree.add(1);
// tree.pprint()
// tree.print()
tree.remove(6);
tree.remove(2);
// tree.pprint()
// tree.print()

// console.log(tree.max(), 54);






// tree.add(100)
// tree.add(80)
// tree.add(70)
// tree.add(90)
// tree.add(150)
// tree.add(75)
// tree.print()
// console.log('='.repeat(20), 'removing 100')
// tree.remove(100)
// tree.print()
// console.log('#min:', tree.min())
// console.log('#max:', tree.max())
// console.log(tree.find(33))
// console.log(tree.find(30))
// console.log(tree.has(33))
// console.log(tree.has(30))






// tree.add(9);
// tree.add(14);
// tree.add(54);
// tree.add(2);
// tree.add(6);
// tree.add(8);
// tree.add(31);
// tree.add(1);
// tree.remove(6);
// tree.remove(2);
// console.log(tree.max(), 54);