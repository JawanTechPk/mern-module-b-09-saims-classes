// ---------- Callbacks ---------

// const for_callback_function = () => {
//   console.log("callback fired!");
// };

// const callback_function = (cb) => {
//   setTimeout(() => {
//     cb();
//   }, 3000);
// };

// callback_function(for_callback_function);
// // console.log("first");

// let arr = [
//   {
//     brand: "Samsung",
//     model: "SamsungA30",
//     price: "40000",
//     camera: "40px",
//     ram: "8gb",
//     rom: "128gb",
//   },
//   {
//     brand: "Samsung",
//     model: "SamsungA10",
//     price: "40000",
//     camera: "40px",
//     ram: "4gb",
//     rom: "128gb",
//   },
//   {
//     brand: "Samsung",
//     model: "SamsungA20",
//     price: "40000",
//     camera: "40px",
//     ram: "4gb",
//     rom: "128gb",
//   },
//   {
//     brand: "Vivo",
//     model: "VivoY20",
//     price: "20000",
//     camera: "40px",
//     ram: "2gb",
//     rom: "32gb",
//   },
//   {
//     brand: "Vivo",
//     model: "VivoY11",
//     price: "20000",
//     camera: "40px",
//     ram: "3gb",
//     rom: "32gb",
//   },
//   {
//     brand: "Vivo",
//     model: "VivoY15",
//     price: "30000",
//     camera: "40px",
//     ram: "4gb",
//     rom: "64gb",
//   },
//   {
//     brand: "Motorola",
//     model: "Motorola123",
//     price: "5000",
//     camera: "2px",
//     ram: "2gb",
//     rom: "32gb",
//   },
//   {
//     brand: "Iphone",
//     model: "Iphone12",
//     price: "300000",
//     camera: "40px",
//     ram: "8gb",
//     rom: "128gb",
//   },
//   {
//     brand: "Iphone",
//     model: "Iphone13",
//     price: "300000",
//     camera: "40px",
//     ram: "8gb",
//     rom: "128gb",
//   },
//   {
//     brand: "Iphone",
//     model: "IphoneX",
//     price: "300000",
//     camera: "40px",
//     ram: "8gb",
//     rom: "128gb",
//   },
// ];

// arr.forEach((current_object) => {
//   console.log(current_object);
// });

// const concept_of_forEach = (cb_for_loop) => {
//   for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];

//     cb_for_loop(element, index, arr);
//   }
// };

// const receiver_callback_paras = (first_para, second_para, third_para) => {
//     console.log("-1st---", first_para);
//     console.log("-2nd---", second_para);
//     console.log("-3rd---", third_para);
//   }

// concept_of_forEach(receiver_callback_paras);

// const another_fuction = () => {
//   setTimeout(() => {
//     console.log("callback execution!");
//     // call_back_func("callback value");
//     () => {
//       console.log("callback value");
//     };
//   }, 5000);
// };

// another_fuction();
// another_fuction((e) => {
//     console.log(e);
//   });

// const example_function = (para) => {
//   console.log("function executed!", para);
// };

// const value = "abc";

// example_function("abc");

//  ----- Promises ------

// const promise = new Promise((resolve, reject) => {
//   //   resolve();
//   reject();
// });

// promise
//   .then(() => {
//     console.log("Promise Resolved!");
//   })
//   .catch(() => {
//     console.log("Promise Rejected!");
//   });

// const async_promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject();
//   }, 10000);
// });

// async_promise.then(() => {
//   console.log("Async Promise Resolved!");
// });

// const promise_with_data = new Promise((resolve, reject) => {
//   //   resolve("Promise Resolved....");
//   reject("Promise Resjected due to server error!");
// });

// promise_with_data
//   .then((res) => {
//     console.log(res);
//   })
//   .catch(() => {
//     console.log(error);
//   });

// const another_promise = new Promise((resolve, reject) => {
//   const random_number = Math.round(Math.random() * 1);

//   setTimeout(() => {
//     if (random_number) {
//         resolve(`Promise resolved! ${random_number}`);
//       } else {
//         reject(`Promise Rejected! ${random_number}`);
//       }
//   }, 2000);

// });

// another_promise
//   .then((success) => {
//     console.log(success);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ------------ Default Parameters -----------------------------

// const function_with_default_para = (a = 3) => {
//   const sum = a * 2;
//   console.log(sum);
// };

// function_with_default_para(10);

// --------------- IIFE ------------

// (function function_iife() {
//     console.log("function invoked!");
//   })()
// (function function_iife() {
//   console.log("function invoked!");
// })();

// function_iife();

// ------------- async/await ---------

const new_promise = new Promise((resolve, reject) => {
  const random_number = Math.round(Math.random() * 1);

  setTimeout(() => {
    if (random_number) {
      resolve("Promise Resolved!");
    } else {
      reject("Promise Rejected!");
    }
  }, 3000);
});

// async function aync_function_response() {
//   try {
//     const res = await new_promise;
//     console.log(res);
//   } catch (error) {
//     console.log(error);
//   }
// }

// aync_function_response();

// async function func() {
//   try {
//     const res = await new_promise;
//     console.log("success", res);
//     console.log("test");
//   } catch (error) {
//     console.log("error", error);
//   }

//   console.log("function console");
// }

// func();

// for (let index = 0; index < 5; index++) {
//   setTimeout(() => {
//     console.log(index);
//   }, 3000)
// }
