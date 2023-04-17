const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.data = null;
  }

  root() {
    return this.data;
  }

  add(value) {
    this.data = addNode(this.data, value)

    function addNode(node, value) {
      if(!node) return new Node(value);
      if (node.data === value) return node;
      if (node.data < value) {
        node.right = addNode(node.right, value);
      } else {
        node.left = addNode(node.left, value);
      }
      return node;
    }
  }

  has(value) {
    return hasValue(this.data, value);

    function hasValue(node, value) {

        if (!node) return false;
        if (node.data === value) return true;
        if (node.data < value) return hasValue(node.right, value);
        if (node.data > value) return hasValue(node.left, value);
    }


  }

  find(value) {
    return findValue(this.data, value);

    function findValue(node, value) {

        if (!node) return null;
        if (node.data === value) return node;
        if (node.data < value) return findValue(node.right, value);
        if (node.data > value) return findValue(node.left, value);
    }
  }

  remove(value) {
     this.data = newNode(this.data, value)

     function newNode(node, value) {
      if (!node) return;

      if (node.data > value) {
        node.left = newNode(node.left, value);
      }

      if (node.data < value) {
        node.right = newNode(node.right, value);
      }

      if (node.data === value) {
        if (!node.left && !node.right) {
          return null;
        }
        if (node.left && !node.right) {
            node = node.left;
            return node;
        }
        if (!node.left && node.right) {
            node = node.right;
            return node;
        }

       node.data = findMax(node.left).data;

       node.left = newNode(node.left, findMax(node.left).data);

      }

      return node;


     }

     function findMax(node) {
      while(node.right) {
        node = node.right
      }
      return node

     }

  }

  min() {
    let minNode = this.data;
    if (!minNode) return null;
    while(minNode.left) {
      minNode = minNode.left
    }
    return minNode.data
  }

  max() {
    let maxNode = this.data;
    if (!maxNode) return null;
    while(maxNode.right) {
      maxNode = maxNode.right
    }
    return maxNode.data
  }
}

module.exports = {
  BinarySearchTree,
};
