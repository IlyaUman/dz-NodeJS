import { WindowsToaster } from "node-notifier";

const notifier = new WindowsToaster();

const [, , arg1, arg2, arg3] = process.argv;
const secs =
  arg3 != undefined
    ? parseFloat(arg3)
    : arg2 != undefined
    ? parseFloat(arg2)
    : parseFloat(arg1);
const mins =
  arg3 != undefined
    ? parseFloat(arg2)
    : arg2 != undefined
    ? parseFloat(arg1)
    : 0;
const hours = arg3 != undefined ? parseFloat(arg1) : 0;
const timer = secs * 1000 + mins * 60 * 1000 + hours * 360 * 1000;
const stringForOutput = `${
  hours + Math.floor(mins / 60) + Math.floor(secs / 3600)
} hours, ${mins - Math.floor(mins / 60) * 60 + Math.floor(secs / 60)} mins, ${
  secs - Math.floor(secs / 3600) * 3600 - Math.floor(secs / 60) * 60
} secs`;

if (!secs) {
  console.error("No delay for timer entered");
} else {
  setTimeout(
    () => {
      notifier.notify(`Timer worked! You entered ${stringForOutput}`);
    },
    timer <= 5000 ? timer : 5000
  );
}
