/* Block of code that perform specific task, whenever we needed.
    The are so many types to declare functions => */

/* function printWord() {
  // function declare
  console.log("Wellcome to CodeByAbhishek");
  console.log("Learn JavaScript");
}
printWord(); // function call
*/

// ANOTHER TYPE TO DECLARE SAME FUNCTION
/* const printWord = () => {
  // function declare
  console.log("Wellcome to CodeByAbhishek");
  console.log("Learning JavaScript");
};
printWord(); // function call
*/

// Create a function which calculate sum of two number ?
/* const addition = (a, b) => {
  console.log(`Sum of ${a} & ${b} is: ${a + b}`);
};
addition(215, 877);
*/

// Create a function, which take a string and return all the vowel from the String ?
/* const printVowel = (str) => {
  let count = 0;
  for (let char of str) {
    console.log(char);

    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count++;
    }
  }
  console.log(`Total present Vowel is: ${count}`);
};
printVowel("elephant");
*/

// FOR-EACH(CALLBACK FUNCTION) / HIGHER ORDER FUNCTION.
/* FOR-EACH works on each array index element. There are 3 parameter in 'forEach' -> `Value`,`Index`,`Array itself` */
let arr = [2, 3, 4, 8, 9];
arr.forEach((value, index, arr) => {
  /* for-each is allready a function, and we pass another arrow function, inside the for-each function */
  console.log(value, index, arr);
});

// For a given array of numbers, print squre of each element using the forEach loop ?
/* let num = [2, 4, 8, 6, 3];
num.forEach((number) => {
  console.log("Squre of " + number + " is : " + number ** 2);
});
*/

// Another methods of use callback function, for same question :
let num = [2, 7, 8, 3, 6, 5];
const calculateSqure = (number) => {
  console.log("Squre of " + number + " is : " + number ** 2);
};
num.forEach(calculateSqure);  // Pass another function, inside a function.


