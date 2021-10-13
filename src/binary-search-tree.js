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

  add(value) {
    let newNode = new Node(value)
    if (!this.data) {
      this.data = newNode
      return this
    }
    else {
      let currentNode = this.data
      while (currentNode) {
        if (value <= currentNode.data) {
          if (!currentNode.left) {
            currentNode.left = newNode
            return this
          } else currentNode = currentNode.left

        } else if (value > currentNode.data) {
          if (!currentNode.right) {
            currentNode.right = newNode
            return this
          } else currentNode = currentNode.right
        }
      }

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


  remove(value) {
    if (this.has(value)) {
      let currentNode = this.data
      let parentNode
      while (currentNode) {
        if (value == currentNode.data) {
          if (parentNode.left == value) {
            parentNode.left = null
          } else parentNode.right = null

        }
        else if (value < currentNode.data) {
          parentNode = currentNode
          currentNode = currentNode.left
        } else if (value > currentNode.data) {
          parentNode = currentNode
          currentNode = currentNode.right
        }
      }
    }
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