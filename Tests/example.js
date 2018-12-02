function sum(a, b) {
  return a * b;
}

test('total test', () => {
  const a = 1;
  const b = 2;
  const total = sum(a, b)
  const result = 3
  if (total !== 3) {
    throw new Error(`Total of ${a} and ${b} must be ${result}`);
  }
  // expect(total).toBe(result);
})
