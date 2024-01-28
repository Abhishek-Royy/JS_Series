/* We can define function inside our Object */

// ONE METHOD
/* const students = {
  name: "Abhishek",
  class: 12,
  isPass: true,
  marks: 91.02,
  printmmarks: () => {
    console.log("Marks is: ", students.marks);
  },
};

console.log(students);
*/

// ANOTHER METHOD
/* const students = {
  name: "Abhishek",
  class: 12,
  isPass: true,
  marks: 91.02,
  printmmarks: function () {
    console.log("Marks is: ", this.marks);
  },
};
console.log(students);
console.log(students.printmmarks());
*/

// CUSTOM PROTOTYPE CREATE/USE
const data = {
  company: "Infosis",
  turnOver: "600 cr",
  share: function () {
    console.log("Net share is 25% of turnover");
  },
};

const incometax = {
  annualTax: "25 cr",
};
// Use 'data' object as prototype in 'incometax' object.
incometax.__proto__ = data; //<- we can use it by doing this.
