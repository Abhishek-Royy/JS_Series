let userInp = prompt("Enter a number between 1 -9: ");

let promise = new Promise((res, rej) => {
  if (userInp < 5) {
    return res;
  } else {
    return rej;
  }
});

promise
  .then((res) => {
    console.log(`${userInp} is smaller than 5`, res);
  })
  .catch((rej) => {
    console.log(`${userInp} is bigger than 5`, rej);
  });
