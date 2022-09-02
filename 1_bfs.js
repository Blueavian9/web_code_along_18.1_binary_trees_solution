class node {
  constructor(value) {
    this.value = value
    this.left = null
    this.right = null
  }
}

function traverse(root) {
  if (root === null) return
  const values = []
  const queue = []
  queue.push(root)

  while (queue.length) {
    const current = queue.shift()
    values.push(current.value)

    if (current.left !== null) {
      queue.push(current.left)
    }
    if (current.right !== null) {
      queue.push(current.right)
    }
  }
  return values
}

// Test cases:
const head = new node(6)
head.left = new node(3)
head.right = new node(9)

console.log(traverse(head)) // 6, 3, 9
