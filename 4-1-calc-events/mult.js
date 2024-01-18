export function mult(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Enter numbers!");
  }
  return num1 * num2;
}
