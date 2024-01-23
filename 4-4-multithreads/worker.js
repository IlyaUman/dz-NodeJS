import { parentPort, workerData } from "node:worker_threads";

import { countNums } from "./arrFuncs.js";

const calc = ({ arr }) => {
  let num = 0;

  try {
    num = countNums(arr);
    return num;
  } catch (err) {
    return err.message;
  }
};

parentPort.postMessage(calc(workerData));
