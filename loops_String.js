// for Loops, This is the simple example of for loops

/* for (let i = 1; i <= 5; i++) {
  console.log(i);
}
console.log("Loop has Ended");
*/

// Calculate sum of 1 to n ?
/* let n = 5;
let sum = 0;
for (let i = 1; i <= n; i++) {
  sum = sum + i;
}
console.log("Sum of 1 to n is: " + sum);
*/

// while Loop, simple while loop Example.
/* let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}
*/

// do-while Loop, this is basic do-while Loop Example.
/* let i = 10;
do {
  console.log("i= " + i);
  i--;
} while (i >= 1);
*/

// for-in-loop,
/* let student = {
  name: "Abhishek Roy",
  age: 21,
  cgpa: 8.1,
  isPass: true,
};

for (let key in student) {
  // console.log(key);
  // console.log("Key: " + key, "Value: " + student[key]);
  console.log(key + " : ", student[key]);
}
*/

// PRINT ALL EVEN NUMBER 0 to 100
/* for (let i = 1; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log("Even Number: "+i);
  }
}
*/

// THE USER GUESS THE RANDOM NUMBER, UNTILL IT GUESS THE CORRECT NUMBER
let randomNum = Math.floor(Math.random() * 5);

let guessNumber = prompt("Enter a Number between(0 to 5): ");
while (randomNum != guessNumber) {
  console.log("YourGuess: " + guessNumber, "RandomGuess: " + randomNum);
  guessNumber = prompt("You choose wrong Number,Guess Again: ");
  if (guessNumber == randomNum) {
    alert("Congratulations, You guess the correct Number.");
    break;
  }
}

