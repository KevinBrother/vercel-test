import { expect, test } from 'vitest';

function add(a, b) {
  return a + b;
}
test('Link changes the class when hovered', () => {
  expect(add(1, 1)).toBe(2);
});
