// /* Strings has some inbuilt properties:
//     length
//     indices
//     typeof

//   ** Original string is immutable, if we want to change the existing string, then we need to create a new string.
// */

// let str = "abhishek";
// console.log("Lengthe of String is: " + str.length);

// let strr = `programmer abhishek`;
// console.log(typeof strr);

// // another method of declare string:
// let obj = {
//   item: "Keyboard",
//   price: 499,
//   owner: "Abhishek",
// };

// console.log(
//   "The price of " + obj.item + " is " + obj.price + " by " + obj.owner
// );

// /* STRING METHODS:
//         toUpperCase()
//         toLowerCase()
//         trim() =>it is used to delete/remove the extra space from start and last position of a word.
//         slice() =>here we give the start and ending index value, and the ending index value is taken, it will take the previous index of given ending index value.
//         concat() =>it is used to add two string with together.
//         replace() =>it has two parameter, 'searchValue','changeValue'.
//         charAt() =>it is used to print the value, as it;s index number wise..

// */

// let word = "codebyabhishek";
// let newWrd = word.toUpperCase();
// console.log(newWrd);

// let trimWrd = "      wellcome to coding world        ";
// console.log(trimWrd.trim());

// let sliceWrd = "thefinishers";
// console.log(sliceWrd.slice(3, 11));

// let str1 = "cover";
// let str2 = " drive";
// console.log(str1.concat(str2));

// let repStr = "hellow";
// console.log(repStr.replace("h", "y"));

// let char = "JavaScript";
// console.log("The 4the position word is: " + char.charAt(4));

//____________________________________________________________________________
// RANDOM USERNAME GENERATOR
let userInp = prompt("Enter Your Name: ");
let username = "@" + userInp.trim() + userInp.length;
console.log(username);
alert(username);
