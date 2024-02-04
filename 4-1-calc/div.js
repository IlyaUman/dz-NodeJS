
export function div(num1, num2) {
  if (isNaN(num1) || isNaN(num2)) {
    throw new Error("Enter numbers!");
  }
  if (num2 === "0") {
    throw new Error("Division by zero");
  }

  return num1 / num2;
}
