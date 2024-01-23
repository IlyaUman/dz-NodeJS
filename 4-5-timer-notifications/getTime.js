const getSecs = (args) => {
  let res = 0;
  if (args[2] !== undefined) {
    res = parseFloat(args[2]);
  } else if (args[1] !== undefined) {
    res = parseFloat(args[1]);
  } else if (args[0] !== undefined) {
    res = parseFloat(args[0]);
  } else res = 0;
  return res;
};

const getMins = (args) => {
  let res = 0;
  if (args[2] !== undefined) {
    res = parseFloat(args[1]);
  } else if (args[1] !== undefined) {
    res = parseFloat(args[0]);
  } else res = 0;
  return res;
};

const getHours = (args) => {
  let res = 0;
  if (args[2] !== undefined) {
    res = parseFloat(args[0]);
  } else res = 0;
  return res;
};

const getTimer = (secs, mins, hours) => {
  const res = secs * 1000 + mins * 60 * 1000 + hours * 360 * 1000;
  return res;
};

const getOutputString = (secs, mins, hours) => {
  const outSecs =
    secs -
    Math.floor(secs / 3600) * 3600 -
    Math.floor((secs - Math.floor(secs / 3600) * 3600) / 60) * 60;
  const outHours =
    Number(hours) + Math.floor(secs / 3600) + Math.floor(mins / 60);
  const outMins =
    mins -
    Math.floor(mins / 60) * 60 +
    Math.floor((secs - Math.floor(secs / 3600) * 3600) / 60);
  const resString = `You enteres ${outHours} hours, ${outMins} mins and ${outSecs} seconds`;
  return resString;
};

export { getSecs, getMins, getHours, getOutputString, getTimer };
