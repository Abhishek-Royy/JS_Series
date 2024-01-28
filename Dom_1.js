// let elem = document.querySelector("div").children
// console.log(elem);

// let inntext=document.querySelector("div").innerText
// console.dir(inntext);

// let inhtml=document.querySelector("div").innerHTML
// console.log(inhtml);

// PACTICE QUESTION-1---------------------------
// let h2 = document.querySelector("h2");
// h2.innerText = h2.innerText + "Hello from CodebyAbhishek";
// console.dir(h2)

// PRACTICE QUESTION-2--------------------------
/* let prac = document.querySelectorAll(".practice");
console.log(prac); //Another method
prac[0].innerHTML = "Hello";
prac[1].innerHTML = "From";
prac[2].innerHTML = "Abhishek";
*/

/******************************************************************** */
/* let heading = document.querySelectorAll(".practice");

let count = 0;
for (let divs of heading) {
  divs.innerHTML = `Hello from box ${count}`;
  count++;
}
*/

//------ATTRIBUTES----------------
/* let div = document.querySelector("div");
console.log(div);
let showAttribute = div.getAttribute("id");
console.log(showAttribute);

let nameDiv = document.querySelector("div");
console.log(nameDiv);
let showAttributeV = div.getAttribute("name");
console.log(showAttributeV);
*/

/* let divStyle = document.querySelector("#box ");
divStyle.style.backgroundColor="Green"
divStyle.style.borderRadius="5px"
*/

// INSERT ELEMENT
let insrt = document.querySelector(".insert");

let btn = document.createElement("button");
btn.innerText = "Visit.!";
btn.style.padding = "1vw";
btn.style.width = "10vw";
btn.style.fontSize = "20px";
btn.style.borderRadius = "10px";

insrt.append(btn);
// insrt.prepend(btn)
// insrt.before(btn)
// insrt.after(btn)

// btn.remove();  -> Remove the 'BUTTON'


