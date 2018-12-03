// TDD
// sum() -> 0
// sum(5) -> 5
// sum(1, 2) -> 3

// // case 1:
// function sum() {
//   return 0;
// }

// // case 2:
// function sum(number = 0) {
//   // return number || 0;
//   return number;
// }

// // case 3:
// function sum(...numbers) {
//   return numbers.reduce((acc, n) => acc + n, 0);
// }

test('sum() -> 0', () => {
  const result = sum();
  expect(result).toBe(0);
})

test('sum(5) -> 5', () => {
  const result = sum(5);
  expect(result).toBe(5);
})

test('sum(1, 2) -> 3', () => {
  const result = sum(1, 2);
  expect(result).toBe(3);
})
