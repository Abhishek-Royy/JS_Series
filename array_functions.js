//  map() -> example :
/*let arr = [5, 7, 4, 2, 9];

let new_Arr = arr.map((val) => {
  // Map() will create a new_array  with the same array element.
  return val;
});
console.log(new_Arr);
*/

//  filter() -> example :
/* let number = [20, 33, 98, 45, 77, 70];

let evenValue = number.filter((val) => {
  //it filter out the values
  if (val % 2 === 0) {
    //base on this condition
    return val;
  }
});
console.log(evenValue); //create a new array
*/

// reduce() -> example :
/* let num = [2, 3, 1, 4, 6];
const output = num.reduce((preRes, currentVal) => {
  return preRes + currentVal;
});
console.log(output);
*/

// WE ARE GIVEN MARK OF STUDENT ARRY, FILTER OUT THOSE, WHOSE SCORE 90+ ?
/* let marks = [91, 87, 92, 73, 45, 98];

const newMarks = marks.filter((val) => {
  return val > 90;
});
console.log(newMarks);
*/

// CREATE A USER INPUT ARRAY, AND DO ADDITION,MULTIPLICATION OPERATION USING REDUCE METHOD ?
let n = prompt("Enter last digit: ");
let arr = [];

for (let i = 1; i <= n; i++) {
  // create the user input array
  arr[i - 1] = i;
}
console.log(arr);

const output = arr.reduce((previous, current) => {
  return previous + current;
  
});
console.log(`Addition of each element is: ${output}`);
