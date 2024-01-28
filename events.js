// SINGLE CLICK
/* document.querySelector("button").addEventListener("click", () => {
  console.log("Wellcome to Eventlistner.!");
});
*/

// DOUBLE CLICK
/* document.querySelector("button").addEventListener("dblclick", () => {
    console.log("Welcome to Event Listener.!");
  });
*/

// MOUSE OVER
/* let count = 0;
document.querySelector("div").addEventListener("mouseover", () => {
  console.log("Mouse hover spotted", count++);
});
*/

// MOUSE MOVE
/* let count = 0;
document.querySelector("div").addEventListener("mouseover", () => {
  console.log("Mouse hover spotted", count++);
});
*/

// MOUSE OBJECT
let box = document.querySelector("div");
box.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;
  console.log("X Axis: " + e.clientX, "Y Axis: " + e.clientY);
  x++;
  y++;
});
