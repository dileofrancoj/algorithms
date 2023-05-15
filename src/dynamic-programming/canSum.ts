// In the brute force case, the time complexity will be O(n^m) with n the array length and m the target sum number
// Posibilities ^ height of the tree

type CanSumParams = {
  target: number;
  numbers: number[];
};

interface MemoizedCanSumParams extends CanSumParams {
  memo: Record<number, boolean>;
}

function commonCanSum({ target, numbers }: CanSumParams): boolean {
  if (target === 0) return true;
  if (target < 0) return false;
  for (const num of numbers) {
    const result = target - num;
    if (commonCanSum({ target: result, numbers })) return true;
  }
  return false;
}

console.info(commonCanSum({ target: 7, numbers: [2, 3] }));

function memoizedCanSum({
  target,
  numbers,
  memo = {},
}: MemoizedCanSumParams): boolean {
  /* {2: true, 3: true,5: false} */
  if (target in memo) return memo[target];
  if (target === 0) return true;
  if (target < 0) return false;
  for (const number of numbers) {
    const result = target - number;
    const memoizedValue = memoizedCanSum({ target: result, numbers, memo });
    if (memoizedValue) {
      memo[target] = memoizedValue;
      return true;
    }
  }
  return false;
}
