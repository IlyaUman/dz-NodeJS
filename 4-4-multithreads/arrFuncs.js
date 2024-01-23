export function createArr(len) {
  let arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i + 1);
  }
  return arr;
}

export function countNums(arr) {
  let num = 0;
  arr.forEach((el) => {
    if (el % 3 == 0) {
      num++;
    }
  });
  return num;
}
