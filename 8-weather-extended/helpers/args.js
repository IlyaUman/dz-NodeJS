const getArgs = (args) => {
  const [executor, file, ...rest] = process.argv;
  const res = {};
  rest.forEach((value, index, array) => {
    if (value.charAt(0) === "-") {
      if (index == array.length - 1) {
        res[value.substring(1)] = true;
      } else if (array[index + 1].charAt(0) != "-") {
        res[value.substring(1)] = array[index + 1];
        if (array[index + 2]) {
          for (let i = index + 1; i < array.length - 1; i++) {
            res[value.substring(1)] += "," + array[index + i + 1];
          }
        }
      } else {
        res[value.substring(1)] = true;
      }
    }
  });
  return res;
};

export { getArgs };
