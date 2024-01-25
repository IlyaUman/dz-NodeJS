import { WindowsToaster } from "node-notifier";
import {
  getHours,
  getMins,
  getOutputString,
  getSecs,
  getTimer,
} from "./getTime.js";

const notifier = new WindowsToaster();

const [, , arg1, arg2, arg3] = process.argv;
const time = {
  secs: getSecs([arg1, arg2, arg3]),
  mins: getMins([arg1, arg2, arg3]),
  hours: getHours([arg1, arg2, arg3]),
};

const timer = getTimer(time.secs, time.mins, time.hours);
setTimeout(
  () => {
    notifier.notify(getOutputString(time.secs, time.mins, time.hours));
  },
  timer <= 2000 ? timer : 1000
);
