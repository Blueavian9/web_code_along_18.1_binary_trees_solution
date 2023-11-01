class node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function traverse(root) {
  const output = [];
  const stack = [];
  const current = root;

  while (stack.length) {
    stack.push(current);
    current = current.left;
  }
}


// Test cases:
const head = new node(6);
head.left = new node(3);
head.right = new node(9);

console.log(traverse(head)); // 3, 6, 9

/*
        6
       / \
      3   9

  Last In First Out === L.I.F.O.

  Implement an in-order depth-first traversal for a binary tree using the provided class for a binary tree node.
  the return should be a list of values in the binary tree, based on an in-order (left, current, right) depth-first traversal // Hint: you can implement DFS either with recursion (using the system call stack) or by manually declaring your own stack data structure.
  For a quick and easy stack implementation:
  const stack = []
  then stack.push(value) to push and stack.pop() to pop
*/

/*
   1. Initialize Output array and stack as an empty array.
   2. keep repeating as long as stack has values.
   3. get the current value using pop().
   4. add/push root to stack.
   5. check for left/right children and serve them accordingly.
   6. return the output array.
*/
