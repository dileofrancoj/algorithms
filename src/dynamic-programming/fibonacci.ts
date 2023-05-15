export const commonFibonacci = (n: number): number => {
  if (n <= 2) return 1;
  return commonFibonacci(n - 1) + commonFibonacci(n - 2);
};

// console.table(commonFibonacci(10));

// Temporal: O(n)
// ESPACIAL: O(n)
const memoizedFibonacci = (
  n: number,
  memo: Record<number, number> = {}
): number => {
  if (n in memo) return memo[n];
  if (n <= 2) return 1;
  memo[n] = memoizedFibonacci(n - 1, memo) + memoizedFibonacci(n - 2, memo);
  return memo[n];
};

console.time("memoizedFibonacci");
console.log(memoizedFibonacci(100));
console.timeEnd("memoizedFibonacci")