
function whereIsWaldo(arr) {
  // Flatten the array and find the unique elements
  const flatList = arr.flat();
  const uniqueItems = [...new Set(flatList)];

  // Find the differing element
  let uniqueItem;
  for (let item of uniqueItems) {
    if (flatList.filter(x => x === item).length === 1) {
      uniqueItem = item;
      break;
    }
  }

  // Find the position of the unique element
  for (let i = 0; i < arr.length; i++) {
    const row = arr[i];
    const colIndex = row.indexOf(uniqueItem);
    if (colIndex !== -1) {
      return [i + 1, colIndex + 1];
    }
  }
}

// Example usage:
console.log(whereIsWaldo([
  ["A", "A", "A"],
  ["A", "A", "A"],
  ["A", "B", "A"]
])); // ➞ [3, 2]

console.log(whereIsWaldo([
  ["c", "c", "c", "c"],
  ["c", "c", "c", "d"]
])); // ➞ [2, 4]

console.log(whereIsWaldo([
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["O", "O", "O", "O"],
  ["P", "O", "O", "O"],
  ["O", "O", "O", "O"]
])); // ➞ [5, 1]