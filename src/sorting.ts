function mergeSort(input: number[]): number[] {
  if (input.length < 2) return input;
  const mid = Math.floor(input.length / 2);
  const sortedLeftArray = mergeSort(input.slice(0, mid));
  const sortedRightArray = mergeSort(input.slice(mid));
  return merge(sortedLeftArray, sortedRightArray);
}

function merge(left: number[], right: number[]) {
  let result: number[] = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(right.shift()!);
    } else {
      result.push(left.shift()!);
    }
  }
  return [...result, ...left, ...right];
}

console.log(mergeSort([5, 3, 8, 10, 4, 1]));
