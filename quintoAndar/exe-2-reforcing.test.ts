import { solutionReforce } from "./exe-2-reforcing";

const A1 = [1, 0, 0, 1, 0, 1]

test('maxGap testing', () => {
  expect(solutionReforce(A1)).toBe(3);
});