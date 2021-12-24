function checkIsSameTree(treeA, treeB) {
  if (treeA.value !== treeB.value) return false;

  if (!treeA.left || !treeB.left) {
    if (treeA.left !== treeB.left) return false;
  } else {
    return checkIsSameTree(treeA.left, treeB.left);
  }

  if (!treeA.right || !treeB.right) {
    if (treeA.right !== treeB.right) return false;
  } else {
    return checkIsSameTree(treeA.right, treeB.right);
  }

  return true;
}

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
};

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
};

console.log( checkIsSameTree(tree, tree) ) // true
console.log( checkIsSameTree(tree, tree2) ) // false
