// El diagrama de arbol de esta estructura es O(2^(m+n)) dos decisiones a la m+n ramificaciones
const commonGridTraveler = (m: number, n: number): number => {
  if (m === 1 || n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  return commonGridTraveler(m - 1, n) + commonGridTraveler(m, n - 1);
};

console.log(commonGridTraveler(3, 3));

// O(n*m) la combinación total de elementos
// O(n+m)
const memoizedCommonGridTraveler = (
  m: number,
  n: number,
  memo: Record<string, number> = {}
): number => {
  const key = `${m}-${n}`;
  if (key in memo) return memo[key];
  if (m === 1 || n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = memoizedCommonGridTraveler(m, n, memo);
  return memo[key];
};
