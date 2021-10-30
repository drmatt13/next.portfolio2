export default [
{
  
"javascript BinarySearchTree": `
class Node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    let newNode = new Node(value)
    // if first value
    if (this.root == null) {
      this.root = newNode
      return this
    } else {
      let current = this.root
      while (true) {
        // if value already exists
        if (value == current.value) return undefined
        // traverse left
        if (value < current.value) {
          // check if left child is null
          if (current.left == null) {
            current.left = newNode
            return this
          }
          current = current.left
          // traverse right
        } else {
          // check if right child is null
          if (current.right == null) {
            current.right = newNode
            return this
          }
          current = current.right
        }
      }
    }
  }

  find(value) {
    // if empty
    if (this.root == null) return false
    let current = this.root,
        found = false
    while (current && !found) {
      // traverse left
      if (value < current.value) {
        current = current.left
        // traverse right
      } else if (value > current.value) {
        current = current.right
      } else {
        found = true
      }
    }
    if (!found) return undefined
    return current
  }
}
`,

"img-md-center binary tree": "data_structures/binary-tree.png"

},

{

"javascript BinarySearchTree": `
class BinarySearchTree {
  
  // ...

  // Breadth First Search
  BFS() {
    let node = this.root,
        data = [],
        queue = []
    queue.push(node)
    while (queue.length) {
      node = queue.shift()
      data.push(node)
      if (node.left) queue.push(node.left)
      if (node.right) queue.push(node.right)
    }
    return data
  }
}
`,

"img-md-center BFS": "data_structures/BFS.gif"

},

{

"javascript BinarySearchTree": `
class BinarySearchTree {
  
  // ...

  // Depth First Search Pre-Order Traversal
  DFSPreOrder() {
    let data = []
    function traverse(node) {
      data.push(node)
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
}
`,

"img-md-center DFS-Pre": "data_structures/DFS-Pre.gif"

},

{

"javascript BinarySearchTree": `
class BinarySearchTree {
  
  // ...

  // Depth First Search Post-Order Traversal
  DFSPostOrder() {
    let data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      if (node.right) traverse(node.right)
      data.push(node)
    }
    traverse(this.root)
    return data
  }
}
`,

"img-md-center DFS-Post": "data_structures/DFS-Post.gif"

},

{

"javascript BinarySearchTree": `
class BinarySearchTree {
  
  // ...

  // Depth First Search In-Order Traversal
  DFSInOrder() {
    let data = []
    function traverse(node) {
      if (node.left) traverse(node.left)
      data.push(node)
      if (node.right) traverse(node.right)
    }
    traverse(this.root)
    return data
  }
}
`,

"img-md-center DFS-InOrder": "data_structures/DFS-InOrder.gif"

}

]