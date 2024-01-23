import { Worker } from "node:worker_threads";

import { cpus } from "node:os";

import { createArr, countNums } from "./arrFuncs.js";

const len = process.argv[2] || 300000;
const arrBasic = createArr(len);
let arr = [];

for (let i = 0; i < cpus().length; i++) {
  arr[i] = arrBasic.slice(
    (i * arrBasic.length) / cpus().length,
    ((i + 1) * arrBasic.length) / cpus().length
  );
}

const calc = (arr) => {
  return new Promise((resolve, reject) => {
    const worker = new Worker("./worker.js", {
      workerData: {
        arr,
      },
    });

    worker.on("message", (msg) => {
      console.log(worker.threadId);
      resolve(msg);
    });

    worker.on("error", (err) => {
      reject(err);
    });

    worker.on("exit", () => {
      console.log("Worker has finished it's work");
    });
  });
};

let num = 0;
const main = async () => {
  performance.mark("start");
  for (let i = 0; i < arr.length; i++) {
    num += await Promise.resolve(calc(arr[i]));
  }
  console.log(num);
  performance.mark("end");
  performance.measure("main", "start", "end");

  console.log(performance.getEntriesByName("main").pop());
};

main();

const slow = (arrBasic) => {
  performance.mark("start");
  num = countNums(arrBasic);
  console.log(num);
  performance.mark("end");
  performance.measure("slow", "start", "end");
  console.log(performance.getEntriesByName("slow").pop());
};
slow(arrBasic);
