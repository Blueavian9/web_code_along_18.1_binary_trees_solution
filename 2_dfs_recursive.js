class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  const values = [];
  traverse(root, values);
  return values;
}

function traverse(current, values) {
  if (current.left !== null) {
    traverse(current.left, values);
  }
  values.push(current.value);
  if (current.right !== null) {
    traverse(current.right, values);
  }
}

// Test cases:
const head = new node(6);
head.left = new node(3);
head.right = new node(9);

console.log(traverse(head)); // 3, 6, 9

// This is the recursive solution. Could also be implemented with an explicitly-declared stack data structure.

// class node {
//   constructor(value) {
//     this.value = value
//     this.left = null
//     this.right = null
//   }
// }

// function traverse(root) {
//   const values = []
//   traverse_node(root, values)
//   return values
// }

// function traverse_node(current, values) {
//   if (current.left !== null) {
//     traverse_node(current.left, values)
//   }
//   values.push(current.value)
//   if (current.right !== null) {
//     traverse_node(current.right, values)
//   }
// }

// // Test cases:
// const head = new node(6)
// head.left = new node(3)
// head.right = new node(9)

// console.log(traverse(head)) // 3, 6, 9

// This is the recursive solution. Could also be implemented with an explicitly-declared stack data structure.
