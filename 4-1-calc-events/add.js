export function add(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Enter numbers!");
  }
  return Number(num1) + Number(num2);
}
