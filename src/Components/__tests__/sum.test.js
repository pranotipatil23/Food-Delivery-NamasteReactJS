import { sum } from "../sum";

test("Sum should calculate the sum of two numbers", () => {
  const result = sum(3, 4);

  //Assertion
  expect(result).toBe(7);
});

test("Sum should fail for wrong result", () => {
  const result = sum(2, 8);

  expect(result).not.toBe(9);
});
