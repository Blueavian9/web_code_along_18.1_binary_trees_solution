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

/*
1. we need an empty output array.
2. Initialize a queue
3. then apply queue.push(head)
4. while (queue has data) -
5. serve the current node (shift - adding to output array + add children if any to the queue.
6. keep repeating until the queue is empty.
10. return output array.
*/