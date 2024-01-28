let btn = document.querySelector("button");
let bg = document.body;
/* btn.addEventListener("click", (e) => {
  e.preventDefault();
  if (btn.innerHTML === "DARK") {
    bg.style.backgroundColor = "black";
    btn.innerHTML = "LIGHT";
  } else {
    bg.style.backgroundColor = "white";
    btn.innerHTML = "DARK";
  }
});
*/

let mode = "light";
btn.addEventListener("click", () => {
  if (mode === "light") {
    mode="dark  "
    bg.style.backgroundColor = "black";
    // btn.innerHTML="light"
    bg.style.color="white"
  } else {
    mode="light"
    bg.style.backgroundColor = "white";
    bg.style.color="black"
  }
});
