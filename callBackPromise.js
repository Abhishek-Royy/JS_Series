// Asynchronous
/* Run this code and show the magic, what is Asynchronous funda. */
/* console.log("one");
console.log("two");
setTimeout(() => {
  console.log("Wellcome to Asynchronous");
}, 2000);
console.log("three");
console.log("four");
*/

// CALLBACK
/* let sum = (a, b) => {
  return a + b; 
};
const calculatesum = (a, b) => {
  console.log(a + b);
};
// Call a function into another function as an argument, is called callback.
calculatesum(2, 3, sum);
*/

// CALLBACK HELL
/* const getData = (dataId, getNextData) => {
  setTimeout(() => {
    console.log("Data: ", dataId);

    if (getNextData) {
      getNextData();
    }
  }, 2000);
};
// This multiple nested callback is, 'Callback hell'
getData(1, () => {
  getData(2, () => {
    getData(3, () => {
      getData(4, () => {
        getData(5);
      });
    });
  });
});
*/

// PROMISE
/* let promise = new Promise((resolve, reject) => {
  console.log("Hello from Promise");
});
*/

// If we do the 'resolve'
/* let resolvePromise = new Promise((resolve, reject) => {
  console.log("This is Resolve side from us");
  resolve(123);
});
*/

// If we do the 'reject'
/* let rejectPromise = new Promise((resolve, reject) => {
  console.log("This is Reject side from us");
  reject("Some error occured");
});
*/

// EXAMPLE
/* const message = () => {
  return new Promise((resolve, reject) => {
    console.log("Promise message Function..");
    // resolve("Success");
    reject("Not success");
  });
};

// let successPromise = message();
// successPromise.then((res) => {
//   console.log("Promise response Succesfully..!",res);
// });

let rejectPromise = message();
rejectPromise.catch((err) => {
  console.log("Promise faced Error..!", err);
});
*/

// EXAMPLE
/* const fetchData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am the Movie API");
      resolve("Success");
    }, 5000);

    // reject("Error Occured")
  });
};

// IF WE WANT TO FETCH ANOTHER DETAILS...

const fetchData2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("I am the Music API");
      resolve("Success");
    }, 5000);
  });
};

// PROMISE CHAIN
console.log("Fetching Movie Data...");
let promise1 = fetchData();
promise1.then((res) => {
  // console.log("Fetching Details from Movie API");
  console.log("Fetching Music Data...");
  let promise2 = fetchData2();
  promise2.then((res) => {
    // console.log("Fetching Details from Music API");
  });
});

// let promise2 = fetchData();
// promise2.catch((err) => {
//   console.log("Can't fetch the Details", err);
// });
*/

//-----------------------------------------------------------------

// ASYNC-AWAIT  |.| fetch weather data using 'async-await' & 'promises' :-
let obj = {
  Country: "India",
  temp: "23C",
  humidity: 435,
  rain: "No",
};

const weatherApi = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(obj);
      resolve(200);
    }, 3000);
  });
};

const fetchApi = async () => {
  console.log("Fetching Data from API....");
  await weatherApi(); // Here we need to call the function

  // await weatherApi();
};

// DO THE SAME THING USING IIFE :-
(async () => {
  console.log("Fetching Data from API....");
  await weatherApi(); // No need to call any function like above
})();
