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
  const stack = []
  let current = root

  while (stack.length || current !== null) {
    if (current !== null) {
      stack.push(current)
      current = current.left
    } else {
      current = stack.pop()
      values.push(current.value)
      current = current.right
    }
  }
  return values
}

// Test cases:
const head = new node(6)
head.left = new node(3)
head.right = new node(9)

console.log(traverse(head)) // 3, 6, 9
