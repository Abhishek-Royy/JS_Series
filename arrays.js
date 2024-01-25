/* Array is a collection of items \
   Array is mutable in JS
   */

// let marks = [96, 72, 65, 88, 45, 91];
// console.log(marks);

// let heroes = ["superman", "spiderman", "ironman", "thor", "hulk"];
// console.log(heroes);
// console.log("length is: " + heroes.length);
// console.log(typeof heroes);

// // ARRAY INDICES
// let number = [22, 14, 54, 78, 98, 65, 32];
// console.log(number[3]);

// /* METHOD OF PRINT ARRAY ELEMENT
// -----------------------------------------*/

// // Looping over an Array (FOR LOOP)
// let fruits = ["mango", "banana", "apple", "graphs", "guava", "blackberry"];
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i]);
// }

// //FOR-OF LOOP
// for (let elem of heroes) {
//   console.log(elem);
// }

// PRACTICE Question
/* Find average of all students mark ? */
// let stu_marks = [85, 97, 44, 37, 76, 60];
// let sum = 0;
// for (let i = 0; i < stu_marks.length; i++) {
//   sum = sum + stu_marks[i];
// }
// console.log("Avg of all student is: " + sum / stu_marks.length);

/* given price of 5 items, add extra 10% off ofer and show the final new array ? */
let items = [250, 645, 300, 900, 50];

for (let i = 0; i < items.length; i++) {
  console.log("The raw price is: " + items[i]);
  let discount = items[i] / 10;
  items[i] = items[i] - discount;
  console.log(`The after discount items are: ${items[i]}`);
}
