/**
 * @param {Array} arr
 * @return {Generator}
 */
function* inorderTraversal(arr) {
  for (const element of arr) {
    if (Array.isArray(element)) {
      yield* inorderTraversal(element);
    } else {
      yield element;
    }
  }
}