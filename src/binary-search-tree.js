const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {
  constructor() {
    this.data = null
  }

  root() {
    return this.data
  }

  add(value, currentNode = this.data) {
    let newNode = new Node(value);
    if (!currentNode) {
      this.data = newNode;
      return;
    }
    if (value < currentNode.data) {
      if (currentNode.left == null) {
        currentNode.left = new Node(value);
      } else this.add(value, currentNode.left);
    }
    if (value > currentNode.data) {
      if (currentNode.right == null) {
        currentNode.right = new Node(value);
      } else this.add(value, currentNode.right);
    }
  }

  has(value) {
    let currentNode = this.data
    if (!currentNode) return false

    while (currentNode) {
      if (value == currentNode.data) return true
      else if (value < currentNode.data) {
        if (!currentNode.left) return false
        else currentNode = currentNode.left
      } else if (value > currentNode.data) {
        if (!currentNode.right) return false
        else currentNode = currentNode.right
      }
    }
  }

  find(value) {
    let currentNode = this.data

    if (!currentNode) return null
    while (currentNode) {
      if (value == currentNode.data) return currentNode
      else if (value < currentNode.data) {
        if (!currentNode.left) return null
        else currentNode = currentNode.left
      } else if (value > currentNode.data) {
        if (!currentNode.right) return null
        else currentNode = currentNode.right
      }
    }

  }

  remove(value, currentNode = this.data) {
    if (currentNode == null) return null;

    if (value < currentNode.data) {
      currentNode.left = this.remove(value, currentNode.left);
    } else if (value > currentNode.data) {
      currentNode.right = this.remove(value, currentNode.right);
    } else {
      if (!currentNode.left) return currentNode.right;
      else if (!currentNode.right) return currentNode.left;
      else {
        let minValue = this.getMinValueNode(currentNode.right);
        currentNode.data = minValue.data;
        currentNode.right = this.remove(currentNode.data, currentNode.right);
      }
    }
    return currentNode;
  }

  getMinValueNode(root) {
    while (root.left) {
      root = root.left;
    }
    return root;
  }

  min() {
    let currentNode = this.data
    if (!currentNode) return null

    while (currentNode) {
      if (currentNode.left) currentNode = currentNode.left
      else return currentNode.data
    }

  }

  max() {
    let currentNode = this.data
    if (!currentNode) return null

    while (currentNode) {
      if (currentNode.right) currentNode = currentNode.right
      else return currentNode.data
    }
  }

}